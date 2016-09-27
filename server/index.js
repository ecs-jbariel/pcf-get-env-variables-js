O = require('./out');

__IS_TRACE = process.env.DO_TRACE || false;
__IS_DEBUG = process.env.DO_DEBUG || false;

if (__IS_DEBUG || __IS_TRACE) {
    O.level(((__IS_TRACE) ? O.LogLevel.TRACE : O.LogLevel.DEBUG));
}

const CF = require('js-cfclient');
const CfClient = new CF.CFClient(new CF.CFConfig({
    protocol: process.env.API_PROTOCOL,
    host: process.env.API_HOST,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    skipSslValidation: process.env.SKIP_SSL_VALIDATION
}));

CfClient.connect().then(() => {
    require('./server').start(process.env.PORT || 8888, CfClient, process.env.APP_NAMES || []);
}, O.e);
