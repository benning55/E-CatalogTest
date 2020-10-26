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
            var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\logout'
            await driverWd.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                }
            );
            skip = true;
        }
    });

    describe("initial for logout 2", () => {

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

    describe('Press Log Out via Menu Section', function () {
        
        it('กดไปที่ปุ่มผู้ใช้งาน', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("เมนู\nแท็บที่ 4 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        }); 

        it('กดปุ่มออกจากระบบ', async function() {
            await driverWd.waitForElementByAccessibilityId("ออกจากระบบ", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('กดตกลงยืนยัน', async function() {
            await driverWd.waitForElementByAccessibilityId("ตกลง", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            let element = await driverWd.elementByXPath("//*[@text='รหัสผู้ใช้' or @label='รหัสผู้ใช้']");
            expect(await element.text()).to.equal('รหัสผู้ใช้')
        });
    });

    after (async function (){
        await driverWd.quit();
    });
}

module.exports = {
    test
}