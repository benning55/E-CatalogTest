let loginTest = require('./Login_Senario/main');
let Mchlevel3Test = require('./Mch_Level3_Senario/main');
let Mchlevel2Test = require('./Mch_Level2_Senario/main')

const osSpecificOps = {
    platformName: 'Android',
    deviceName: '4b283c1f9905',
    autoGrantPermissions: true,
    app: 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\flutter_ecatalog\\build\\app\\outputs\\apk\\dev\\debug\\ecatalog-dev-debug-vn_1_0_1-vc_1-20200930_145612.apk'
    // @todo support non-unix style path
    // app: 'C:\\Users\\bmais\\Documents\\appium_flutter_test\\myapp\\build\\app\\outputs\\apk\\debug\\app-debug.apk'
    // app: '/home/benntend/Desktop/appium_flutter_test/myapp/build/app/outputs/apk/debug/app-debug.apk',
}


const opts = {
    path: '/wd/hub/',
    port: 4723,
    capabilities: {
        ...osSpecificOps,
        automationName: 'Flutter'
    }
};

// loginTest.loginFail(opts);
// loginTest.loginPass(opts);
// Mchlevel3Test.seeMainLevel3(opts);
// Mchlevel3Test.searchBar(opts);
Mchlevel2Test.testStart(opts);