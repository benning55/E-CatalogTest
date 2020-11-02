const {
    expect
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    describe('Menutab Mch Brand', function(){
        afterEach(async function () {
            if (this.currentTest.state == 'failed') {
                var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
                var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\menuTab\\'
                await driverWd.takeScreenshot().then(
                    function (image, err) {
                        require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                    }
                );
                skip = true;
            }
        });
    
        describe("initial for menu tab 2", () => {
    
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
                await new Promise(res => setTimeout(res, 5000));
            });
        });
    
        describe('กดเข้าแถบ เมนู', function () {
    
            before(function (){
                skip = false;
            });
            
            it('กดไปที่ปุ่มผู้เมนู', async function() {
                await new Promise(res => setTimeout(res, 2000));
                await driverWd.waitForElementByAccessibilityId("เมนู\nแท็บที่ 4 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            }); 
        });
    
        describe('เช็คสินค้ากับแบรนว่าตรงไหม', function() {
    
            before(function (){
                skip = false;
            });
            
            it('กดไปเลือกแบรนสินค้า', async function() {
                await new Promise(res => setTimeout(res, 3000));
                await driverWd.waitForElementByAccessibilityId("ช็อปตามแบรนด์", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            }); 
    
            it('เลือกแบรน ALLUSION', async function(){
                await new Promise(res => setTimeout(res, 3000));
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, 'Menu')]/android.view.View/android.view.View/android.view.View/android.view.View[1]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('เช็ค ว่ามีแบรน ALLUSION', async function() {
                await new Promise(res => setTimeout(res, 3000));
                await driverWd.waitForElementByAccessibilityId("SKU: 1106003\nALLUSION\nโซฟา ALLUSION TESI สีดำ\n5,900 บาท", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    expect(await el.getAttribute("content-desc")).to.exist;
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
