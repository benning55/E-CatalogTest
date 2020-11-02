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
            var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\mchDetail\\'
            await driverWd.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                }
            );
            skip = true;
        }
    });


    describe("initial for Mch Detail 1", () => {

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

    describe('สินค้าไม่มีราคาโปรโมชั่น', function () {

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

        it('เลือกสินค้าไม่มีโปรโมชั่น', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("SKU: 1071540\nSMARTHOME\nเครื่องผสมอาหาร SMARTHOME SM-MX100\n399 บาท", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('เช็คแบรนสินค้า', async function() {
            await new Promise(res => setTimeout(res, 5000));
            await driverWd.waitForElementByAccessibilityId("SMARTHOME", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็คชื่อสินค้า', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByXPath("//android.view.View[@content-desc='SMARTHOME']/following::android.view.View[1]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็ครหัสสินค้า', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("SKU : 1071540", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็คราคาแบบธรรมดา', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("399", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

    });

    describe('สินค้าราคาโปรโมชั่น', function () {

        before(function (){
            skip = false;
        });
        
        it('กลับไปที่หน้าเลือกสินค้า', async function() {
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 5000));
            await driverWd.waitForElementByXPath("//android.view.View[@content-desc='เครื่องผสมอาหาร SMARTHOME SM-MX100'][1]", asserters.isDisplayed, 20000, 100).then(async function(el) {
                await el.click();
            });
        }); 

        it('เลือกสินค้ามีโปรโมชั่น', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("SKU: 1085163\nCOCORU\nเครื่องผสมอาหารมือถือ COCORU AKAI สีแดง\n1,290\n799 บาท", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('เช็คแบรนสินค้า', async function() {
            await new Promise(res => setTimeout(res, 5000));
            await driverWd.waitForElementByAccessibilityId("COCORU", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็คชื่อสินค้า', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByXPath("//android.view.View[@content-desc='COCORU']/following::android.view.View[1]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็ครหัสสินค้า', async function() {
            await new Promise(res => setTimeout(res, 2000));	
            await driverWd.waitForElementByAccessibilityId("SKU : 1085163", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็คราคาแบบธรรมดา', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("1,290", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

        it('เช็คราคาแบบโปรโมชั่น', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("799", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });

    });

    describe('เช็คปุ่มเปรียบเทียบสินค้าหน้า Detail', function () {

        before(function (){
            skip = false;
        });

        it('กดปุ่มเปรียบเทียบ', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("เปรียบเทียบ", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });
        
        it('เช็คว่ามีสินค้าในช่องเปรียบเทียบ', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("เปรียบเทียบ(1/3)", asserters.isDisplayed, 2000, 100).then(async function(el) {
                expect(el).to.exist
            });
        });
    });

}

module.exports = {
    test,
}
