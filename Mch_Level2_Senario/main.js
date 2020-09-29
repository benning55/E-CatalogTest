const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const seeMainLevel2 = function(opts){

    describe('Check sub category', function(){

        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn');

            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551504");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
        });

        it('Cathch first category', async function() {
            this.timeout(30*1000);
            await driver.elementClick(byValueKey('catThree0'));
            categoryTwo = byValueKey("catTwo0");
            console.log(categoryTwo);
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องใช้ไฟฟ้าในครัวขนาดเล็ก');
        });

        after(function () {
            driver.deleteSession();
        });

    });
}


module.exports = {
    seeMainLevel2
}