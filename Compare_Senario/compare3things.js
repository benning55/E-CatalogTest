const {
    expect
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    describe('Compare 3 Mch', function(){
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
    
        describe('Compare 3 things and confirm', function () {
    
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
            });
    
            it('กดยืนยันการเปรียบเทียบ', async function(){
                await driverWd.waitForElementByAccessibilityId("ยืนยัน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('เช็ค ความกว้าง', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                expect(await driverWd.elementByAccessibilityId("ความกว้าง (ซม.)\n18\n18\n18")).to.exist;
            });
    
            it('เช็ค ความลึก', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "ความลึก (ซม.)\n7.5\n6\n6";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค Material', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "Material\nพลาสติก\nพลาสติก\nพลาสติก";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค ระดับ', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "ระดับ\n5ระดับ\n1ระดับ\n1ระดับ";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค อุปกรณ์เสริม', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "อุปกรณ์เสริม\nหัวปั่น 2 ชนิด\nไม่มี\nไม่มี";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค ฺBrand', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "Brand\nSMARTHOME\nCOCORU\nCOCORU";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค ความสูง', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "ความสูง (ซม.)\n14\n11.5\n11.5";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค น้ำหนัก', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "น้ำหนัก (กก.)\n.65\n.8\n.8";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค กำลังไฟ', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "กำลังไฟ\n100วัตต์\n200วัตต์\n200วัตต์";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค Size', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "Size\nไม่มี\nไม่มี\nไม่มี";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
            });
    
            it('เช็ค Color', async function() {
                // this.timeout(50000);
                await new Promise(res => setTimeout(res, 2000));
                const elPath = "Color\nขาว\nแดง\nฟ้า";
                const element = await utils.scrollUntilVisible(
                    "accessibility id",
                    elPath,
                    driverWd,
                );
                expect(element).to.exist;
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
    });

}

module.exports = {
    test,
}
