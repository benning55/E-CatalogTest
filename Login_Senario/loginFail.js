const {
    expect,
    assert
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
// var skip = false;
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    describe('Log In To Fail', function(){
        
        describe("initial login to fail 1", () => {
    
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
                utils.textToPress('551502', driverWd);
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
    
            it('ไม่พบข้อมูลผู้ใช้งาน', async function () {
                await new Promise(res => setTimeout(res, 5000));
                await driverWd.waitForElementByAccessibilityId("ไม่พบข้อมูลชื่อผู้ใช้งาน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    expect(el).to.exist;
                });
                await driverWd.waitForElementByAccessibilityId("ปิด", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
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

    });

    describe('Log In To Fail With Wrong Password', function(){

        afterEach(async function () {
            if (this.currentTest.state == 'failed') {
                var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
                var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\login\\'
                await driverWd.takeScreenshot().then(
                    function (image, err) {
                        require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                    }
                );
                skip = true;
            }
        });
    
        describe("initial login to fail2", async function() {
    
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
                utils.textToPress('551503', driverWd);
                await new Promise(res => setTimeout(res, 2000));
            });
    
            it('Click Log In Button', async function () {
                await driverWd.waitForElementByAccessibilityId("เข้าสู่ระบบ", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 2000));
            });
    
            it('รหัสผ่านไม่ถูกต้อง', async function () {
                await new Promise(res => setTimeout(res, 5000));
                await driverWd.waitForElementByAccessibilityId("รหัสผ่านไม่ถูกต้อง", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    expect(el).to.exist;
                });
                await driverWd.waitForElementByAccessibilityId("ปิด", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
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
    });
}

module.exports = {
    test,
}
