let LogInPass = require('./Login_Senario/loginPass');
let LogInFail = require('./Login_Senario/loginFail');
let LogoutViaUserTest = require('./Logout_Senario/logoutViaUser');
let LogoutViaMenuTest = require('./Logout_Senario/logoutViaMenu');
let Search = require('./Search_Senario/search');
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
let menuTabLanguage = require('./MenuTab_Senario/language');
let mchDetailAndCompare = require('./MchDetail_Senario/mchDetailAndCompare');
let mchInformation = require('./MchDetail_Senario/mchInformation');
let mchStock = require('./MchDetail_Senario/mchStock');


skip = false;

const osSpecificOps = {
    platformName: 'Android',
    realDevice: true,
    autoGrantPermissions: true,
    app: 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\flutter_ecatalog\\build\\app\\outputs\\apk\\dev\\debug\\ecatalog-dev-debug-vn_1_0_1-vc_1-20201024_111537.apk'
}

beforeEach(function () {
    if (skip) {
        this.skip();
    }
});

afterEach(async function () {
    if (this.currentTest.state == 'failed') {
        var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
        var imgName2 = (this.currentTest.title).replace(/ /g, "_");
        var screenshotPath = "C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\"
        // var screenshotPath = process.env.DEVICEFARM_LOG_DIR;
        await driverWd.takeScreenshot().then(
            function (image, err) {
                require('fs').writeFile(
                    screenshotPath +"/"+ imgName + '.png',
                    image,
                    'base64', 
                    function (err) {}
                );
            }
        );
        skip = true;
    }
});

// ทดสอบด้วย Wd driver กับ ตัว Appium เอง
LogInPass.test(osSpecificOps);
LogInFail.test(osSpecificOps);
Search.test(osSpecificOps);
LogoutViaUserTest.test(osSpecificOps);
LogoutViaMenuTest.test(osSpecificOps);
Compare3Things.test(osSpecificOps);
CompareMoreThan3.test(osSpecificOps);
CompareDelete.test(osSpecificOps);
CompareToCart.test(osSpecificOps);
CartAdjustment.test(osSpecificOps);
CartOrderPass.test(osSpecificOps);
CartOrderFail.test(osSpecificOps);
userTab.test(osSpecificOps);
menuTabProductCategory.test(osSpecificOps);
menuTabProductBrand.test(osSpecificOps);
menuTabLanguage.test(osSpecificOps);
mchDetailAndCompare.test(osSpecificOps);
mchInformation.test(osSpecificOps);
mchStock.test(osSpecificOps);
