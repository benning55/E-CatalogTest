const {
    expect
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    describe ('Test Search Mch', function() {
        
        afterEach(async function () {
            if (this.currentTest.state == 'failed') {
                var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
                var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\search\\'
                await driverWd.takeScreenshot().then(
                    function (image, err) {
                        require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                    }
                );
                skip = true;
            }
        });
    
    
        describe("initial for search 1", () => {
    
            before(function (){
                skip = false;
            });
    
            it("Start Application", async function () {
                this.timeout(3000 * 10000);
                driverWd = await wd.promiseChainRemote({
                    host: "localhost",
                    port: 4723,
                });
                return driverWd.init(osSpecificOps);
            });
    
            it("Type Username", async function () {
                this.timeout(30 * 10000);
                await driverWd.waitForElementByXPath("//*[@text='รหัสผู้ใช้' or @label='รหัสผู้ใช้']",
                    asserters.isDisplayed, 20000, 100).then(async function (el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 1000));
                utils.textToPress('551503', driverWd);
                await new Promise(res => setTimeout(res, 2000));
            });
    
            it('Type Password', async function () {
                this.timeout(30 * 10000);
                await driverWd.waitForElementByXPath("//*[@text='รหัสผ่าน' or @label='รหัสผ่าน']",
                    asserters.isDisplayed, 20000, 100).then(async function (el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 1000));
                utils.textToPress('551505', driverWd);
                await new Promise(res => setTimeout(res, 2000));
            });
    
            it('Click Log In Button', async function () {
                await driverWd.waitForElementByAccessibilityId("เข้าสู่ระบบ", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 2000));
            });
        });
    
        describe('ค้นหาสินค้ารหัส 255255', function () {
    
            before(function (){
                skip = false;
            });
            
            it('กดปุ่มและค้นหาสินค้า', async function() {
                this.timeout(50000);
                await new Promise(res => setTimeout(res, 5000));
                await driverWd.waitForElementByAccessibilityId("เปิดเมนูการนำทาง", asserters.isDisplayed, 20000, 100).then(async function(el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 1000));
                await driverWd.waitForElementByXPath("//android.view.View[1]/android.view.View/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 1000));
                utils.textToPress('255255', driverWd);
                await new Promise(res => setTimeout(res, 3000));
                await driverWd.pressKeycode(66);
            });
            
            it('แสดงสินค้ารหัส 255255', async function() {
                this.timeout(30000);
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '255255')]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    expect(el).to.exist;
                });
            });
    
        });
    
        describe('Close Session', function () {
    
            before(function (){
                skip = false;
            });
            
            it('Close session', async function() {
                await driverWd.quit();
            });
    
        });

    })
}

module.exports = {
    test,
}
