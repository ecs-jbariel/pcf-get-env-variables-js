var fs = require('fs');

module.exports = () => {
    var _propFile = (process.env.PROPS) ? process.env.PROPS : 'props.json';
    var fileConnParams = {};

    O.d("Looking for properties file: '" + _propFile + "'");
    try {
        fs.accessSync(_propFile, fs.F_OK);
        fileConnParams = JSON.parse(fs.readFileSync(_propFile, 'utf-8'));
    } catch (e) {
        O.w("Could not find or access file '" + _propFile + "'");
    }

    O.t("Params from file: '" + JSON.stringify(fileConnParams) + "'");

    var defaultConnectionParams = {
        "protocol": "http",
        "host": "api.bosh-lite.com",
        "username": "admin",
        "password": "admin",
        "skipSSLValidation": "false"
    };

    var params = extend(defaultConnectionParams, fileConnParams);
    O.t("Final params: '" + JSON.stringify(params) + "'");
    return params;
}
