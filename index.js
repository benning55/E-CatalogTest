let loginTest = require('./loginCase');
let level3 = require('./main_level3/level3')

const osSpecificOps = {
    platformName: 'Android',
    deviceName: '4b283c1f9905',
    autoGrantPermissions: true,
    app: 'C:\\Users\\bmais\\Desktop\\E-CatAuto\\E-Cat\\build\\app\\outputs\\apk\\qas_homepro\\debug\\ecatalog-qas_homepro-debug-vn_1_0_0-vc_1-20200925_095453.apk'
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

// loginTest.loginUseCase(opts);
level3.seeMainLevel3(opts)