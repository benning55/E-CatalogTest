const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;
  
const seeMainLevel3 = function(opts) {
    describe('Login To Pass.js', function () {

        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn');
            expect(await driver.getElementText(byText('ปิด')) == 'ปิด')

        });

        it('Log in', async function () {
            this.timeout(30 * 1000);
            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551504");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
        });

        it('Scroll Down and Check all Category', async function () {
            this.timeout(300*10000);
            var count = 0;
            var i;
            for (i = 0; i < 16; i++) {
                if(count == 8){
                    await driver.execute('flutter:scroll', byType('ListView'), {dx: 50, dy: -550, durationMilliseconds: 1000, frequency: 60});
                }
                await driver.elementClick(byValueKey('catThree'+i.toString()));
                backBtn = byValueKey('back2level3');
                await driver.touchAction({
                    action: 'tap',
                    element: { elementId: backBtn }
                });
                count += 1;
                console.log(count)
            }
            expect(count, 16);
        });

        after(function () {
            driver.deleteSession();
        });

    });
};

const searchLevel3 = function (opts) {
    describe('Search bar in lavel3 page', function (){
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

        it('Log in', async function () {
            this.timeout(30 * 1000);
            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551504");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
        });

        after(function () {
            driver.deleteSession();
        });
    })
}

module.exports = {
    seeMainLevel3
}