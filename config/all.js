const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");

const android = require("./android");
const ios = require("./ios");
const browser = require("./browser");

exports.config = configBuild(config, {
    capabilities: [
        android.device
    ],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
