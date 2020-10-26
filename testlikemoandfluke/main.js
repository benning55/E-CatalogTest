const wd = require("wd");
const {
    expect
} = require("chai");
const asserters = require("wd/lib/asserters");
// var path = require('path'),
//     wd = require('wd'),
//     WdAndroid = require('wd-android');
// const {
//     byValueKey,
//     byText,
//     byType,
//     pageBack
// } = require('appium-flutter-finder');
// const expect = require('chai').expect;


const testFluke = function (osSpecificOps) {
    describe("initial", () => {
        it("should run initial correctly", async function () {
            this.timeout(3000 * 10000);
            driverWd = await wd.promiseChainRemote({
                host: "localhost",
                port: 4723,
            });
            return driverWd.init(osSpecificOps);
        });
        // after(async () => {
        it("Try type button", async function () {
            this.timeout(3000 * 10000);
            await driverWd.waitForElementByXPath("//*[@text='รหัสผู้ใช้' or @label='รหัสผู้ใช้']",
                asserters.isDisplayed, 20000, 100).then(async function (el) {
                await el.click();
            });
        });

        it('press button', async function () {
            this.timeout(3000000);
            await new Promise(res => setTimeout(res, 3000));
            await driverWd.pressKeycode(12);
            await driverWd.pressKeycode(12);
            await driverWd.pressKeycode(12);
            await driverWd.pressKeycode(12);
            await driverWd.pressKeycode(12);
            await driverWd.pressKeycode(12);
            // await driverWd.longPressKeycode(12, undefined, undefined);
            // await driverWd.longPressKeycode(12, undefined, undefined);
            // await driverWd.longPressKeycode(12, undefined, undefined);
            // await driverWd.longPressKeycode(12, undefined, undefined);
        })
        // });
    });
}

module.exports = {
    testFluke
}