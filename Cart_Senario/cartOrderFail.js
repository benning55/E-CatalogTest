const {
    expect
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
var skip = false;
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    beforeEach(function () {
        if (skip) {
            this.skip();
        }
    });

    afterEach(async function () {
        if (this.currentTest.state == 'failed') {
            var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
            var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\cart\\'
            await driverWd.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                }
            );
            skip = true;
        }
    });


    describe("initial for cart 3", () => {

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

    describe('นำสินค้าเข้าตะกร้า', function () {
        
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
        
        it('เลือกสินค้า', async function() {
            this.timeout(30000);
            await driverWd.waitForElementByXPath("//*[contains(@content-desc, '255255')]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            await driverWd.waitForElementByAccessibilityId("ใส่รถเข็น", asserters.isDisplayed, 20000, 100).then(async function(el) {
                await el.click();
            });
        })

        it('ไปยังหน้ารถเข็น', async function(){
            await driverWd.waitForElementByAccessibilityId("1\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 20000, 100).then(async function(el) {
                await el.click();
            });
        });
    });


    describe('สร้างใบคำสั่งซื้อไม่ผ่าน', async function(){

        it('กรอกเบอร์โทรศพท์บ้าน', async function(){
            this.timeout(50000)
            await driverWd.waitForElementByXPath("//*[contains(@content-desc, 'หมายเลขโทรศัพท์อ้างอิง')]/following::android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            await new Promise(res => setTimeout(res, 2000));
            utils.textToPress('025555555', driverWd);
            await new Promise(res => setTimeout(res, 4000));
            await driverWd.pressKeycode(66);
            await driverWd.waitForElementByAccessibilityId("ยืนยัน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('แจ้งเตือนแสดงว่าไม่ผ่าน', async function(){
            await new Promise(res => setTimeout(res, 1000));
            await driverWd.waitForElementByXPath("//*[contains(@content-desc, 'หมายเลขโทรศัพท์ไม่ถูกต้อง')]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist;
            });
        });
    });

    after (async function (){
        await driverWd.quit();
    });
}

module.exports = {
    test,
}
