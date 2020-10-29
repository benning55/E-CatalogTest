let loginTest = require('./Login_Senario/main');
let Mchlevel3Test = require('./Mch_Level3_Senario/main');
let Mchlevel2Test = require('./Mch_Level2_Senario/main')
let Mchlevel1Test = require('./Mch_Level1_Senario/main');
let MchDetailTest = require('./Mch_Detail_Senario/main');
let TestFluke = require('./testlikemoandfluke/main');


let LogoutViaUserTest = require('./Logout_Senario/logoutViaUser');
let LogoutViaMenuTest = require('./Logout_Senario/logoutViaMenu');
let Compare3Things = require('./Compare_Senario/compare3things');
let CompareMoreThan3 = require('./Compare_Senario/comparemorethan3');
let CompareDelete = require('./Compare_Senario/compareDelete');
let CompareToCart = require('./Compare_Senario/compareToCart');
let CartAdjustment = require('./Cart_Senario/cartAdjustment');
let CartOrderPass = require('./Cart_Senario/cartOrderPass');
let CartOrderFail = require('./Cart_Senario/cartOrderFail');
let userTab = require('./Usertab_senario/userDetail');
let menuTabProductCategory = require('./MenuTab_Senario/productCategory');
let menuTabProductBrand = require('./MenuTab_Senario/productBrand');

const osSpecificOps = {
    platformName: 'Android',
    realDevice: true,
    // deviceName: '4b283c1f9905',
    autoGrantPermissions: true,
    // app: 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\flutter_ecatalog\\build\\app\\outputs\\apk\\dev\\debug\\ecatalog-dev-debug-vn_1_0_1-vc_1-20201019_171810.apk'
    // @todo support non-unix style path
    app: 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\flutter_ecatalog\\build\\app\\outputs\\apk\\dev\\debug\\ecatalog-dev-debug-vn_1_0_1-vc_1-20201024_111537.apk'
    // app: 'C:\\Users\\bmais\\Documents\\appium_flutter_test\\myapp\\build\\app\\outputs\\apk\\debug\\ecatalog-dev-debug-vn_1_0_1-vc_1-20201024_111537.apk'
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

// ทดสอบกับ Appium Flutter Driver 
// loginTest.loginFail(opts);
// loginTest.loginPass(opts);
// Mchlevel3Test.seeMainLevel3(opts);
// Mchlevel3Test.searchBar(opts);
// Mchlevel2Test.testMch2Cat(opts);
// Mchlevel2Test.testMch2ToMch1(opts);
// Mchlevel1Test.testMainLevel1(opts);
// Mchlevel1Test.mchFilterTest(opts);
// Mchlevel1Test.mchCompare1(opts);
// MchDetailTest.mchDetailTxt(opts);
// MchDetailTest.mchDetailTab(opts);
// MchDetailTest.mchDetailStock(opts);
// TestFluke.testFluke(osSpecificOps)

// ทดสอบด้วย Wd driver กับ ตัว Appium เอง
// LogoutViaUserTest.test(osSpecificOps);
// LogoutViaMenuTest.test(osSpecificOps);
// Compare3Things.test(osSpecificOps);
// CompareMoreThan3.test(osSpecificOps);
// CompareDelete.test(osSpecificOps);
// CompareToCart.test(osSpecificOps);
// CartAdjustment.test(osSpecificOps);
// CartOrderPass.test(osSpecificOps);
// CartOrderFail.test(osSpecificOps);
// userTab.test(osSpecificOps);
// menuTabProductCategory.test(osSpecificOps);
menuTabProductBrand.test(osSpecificOps);
