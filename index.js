O = require('./server/out');

__IS_TRACE = process.env.DO_TRACE || false;
__IS_DEBUG = process.env.DO_DEBUG || false;

if (__IS_DEBUG || __IS_TRACE) {
    O.level(((__IS_TRACE) ? O.LogLevel.TRACE : O.LogLevel.DEBUG));
}

extend = require("xtend");
connectionParams = require('./paramLoader')();
O.d("connectionParams: " + JSON.stringify(connectionParams));

const CF = require('js-cfclient');
const CfClient = new CF.CFClient(new CF.CFConfig({
    protocol: connectionParams.protocol,
    host: connectionParams.host,
    username: connectionParams.username,
    password: connectionParams.password,
    skipSslValidation: connectionParams.skipSSLValidation
}));

CfClient.connect().then(() => {
    require('./server/server').start(process.env.PORT || 8888, CfClient, process.env.APP_NAME || '');
}, O.e);
