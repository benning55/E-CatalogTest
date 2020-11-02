const {
    expect,
    assert
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

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

    describe('Compare 3 things', function () {

        before(function (){
            skip = false;
        });
        
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
            await new Promise(res => setTimeout(res, 2000));
        });

    });

    describe('ลบสินค้า 1 ชิ้นจากช่องเปรียบเทียบ', function(){

        before(function (){
            skip = false;
        });
        
        it('กดปุ่มลบสินค้าต้องเหลือสินค้า 2 ชิ้น', async function(){
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByXPath("//*[contains(@content-desc, 'เปรียบเทียบ(3/3)')]/following::android.view.View[1]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            expect(await driverWd.element("xpath", "//*[contains(@content-desc, 'เปรียบเทียบ(2/3)')]")).to.exist;
        })
    });
	
    describe('ลบสินค้าทั้งหมด', function(){

        before(function (){
            skip = false;
        });

        it('กดปุ่มลบทั้งหมด', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("ลบทั้งหมด", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            try{
                await driverWd.element("xpath", "//*[contains(@content-desc, 'เปรียบเทียบ(')]");
                assert.throws(iThrowError, Error, "Error thrown");
            }
            catch (e) {
                expect(e.cause.value.message).to.exist;
            }
        })
    });
}

module.exports = {
    test,
}
