const {
    expect, assert
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
            var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\compare\\'
            await driverWd.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                }
            );
            skip = true;
        }
    });


    describe("initial for compare 1", () => {

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

    describe('Compare 3 things and confirm', function () {
        
        it('กดไปที่หมวดเครื่องใช้ไฟฟ้า', async function() {
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 5000));
            await driverWd.waitForElementByXPath("//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[1]", asserters.isDisplayed, 20000, 100).then(async function(el) {
                await el.click();
            });
        }); 

        it('กดปุ่มหมวดย่อยไปที่เครื่องเตรียมอาหาร', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("เครื่องเตรียมอาหาร", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('กดเลือกปุ่มเปรียบเทียบสินค้า 3 ชิ้น', async function() {
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 5000));
            await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1071540')]/child::*", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });

            await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/child::*", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });

            const elPath = "//*[contains(@content-desc, '1085128')]/child::*";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );

            await element.click();
        });

        it('กดยืนยันการเปรียบเทียบ', async function(){
            await driverWd.waitForElementByAccessibilityId("ยืนยัน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });
    });

    describe('Add compare product to cart', function() {

        it('กดสินค้าที่เลือกเพิ่มเข้าตะกร้า', async function() {
            await driverWd.waitForElementByXPath("(//android.widget.Button[@content-desc='ใส่รถเข็น'])[2]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('ไปยังหน้าตะกร้าเพื่อตรวจสอบสินค้าที่เลือก', async function() {
            await driverWd.waitForElementByAccessibilityId("1\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            expect(await driverWd.element('accessibility id', 'SKU: 1085163\nเครื่องผสมอาหารมือถือ COCORU AKAI สีแดง\n799/EA\n799')).to.exist;
        });
    });

    after (async function (){
        await driverWd.quit();
    });
}

module.exports = {
    test,
}
