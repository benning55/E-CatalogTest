const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType
} = require('appium-flutter-finder');
const expect = require('chai').expect;
  

const loginFail = function (opts) {
    describe('Login to fail', function () {

        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn')
        });

        it('Check Log In Page', async function() {
            this.timeout(500000);
            expect(await driver.getElementText(byText('รหัสผู้ใช้'))).to.equal('รหัสผู้ใช้');
        })

        it('Log in wrong password', async function () {
            this.timeout(30 * 1000);
            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "0924155555");
            await driver.elementClick(loginButton);
            expect(await driver.getElementText(byText('รหัสผ่านไม่ถูกต้อง'))).to.equal('รหัสผ่านไม่ถูกต้อง');
            await driver.elementClick(byText('ปิด'));
        });

        it('Log in wrong username', async function () {
            this.timeout(30 * 1000);
            await driver.elementClear(usernameField);
            await driver.elementClear(passwordField);
            await driver.elementSendKeys(usernameField, "551502");
            await driver.elementSendKeys(passwordField, "551504");
            await driver.elementClick(loginButton);
            expect(await driver.getElementText(byText('ไม่พบข้อมูลชื่อผู้ใช้งาน'))).to.equal('ไม่พบข้อมูลชื่อผู้ใช้งาน');
            await driver.elementClick(byText('ปิด'));
        });

        after(function () {
            driver.deleteSession();
        })

    });
}

const loginPass = function(opts) {
    describe('Login to pass', function() {

        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn')
        });

        it('Log in successful', async function () {
            this.timeout(30 * 1000);
            await driver.elementClear(usernameField);
            await driver.elementClear(passwordField);
            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551504");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
            // expect(await driver.getElementText(byText('ประชาชื่น')), 'ประชาชื่น')
        });

        after(function () {
            driver.deleteSession();
        })
    });
}

module.exports = {
    loginFail,
    loginPass
}