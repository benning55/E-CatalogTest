const wdio = require("webdriverio");
var path = require('path'),
    wd = require('wd'),
    WdAndroid = require('wd-android');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const testMainLevel1 = function (opts) {
    describe('เช็คเรียงราคา Default', function () {

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

        it('เรียงราคาจากน้อยไปหามาก', async function () {
            this.timeout(300 * 10000);
            var listTest = [];
            var listReal = [];
            var listSorted;
            var i;
            await driver.execute('flutter:scroll', byType('ListView'), {
                dx: 10,
                dy: -550,
                durationMilliseconds: 120,
                frequency: 60
            });
            await driver.elementClick(byValueKey('catThree13'));
            totalbtn = byValueKey('totalSubBtn0');
            await driver.elementClick(totalbtn);
            await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            // await driver.execute('flutter:waitForAbsent', totalbtn);
            for(i = 0; i < 10; i++){
                driver.execute('flutter:scrollUntilVisible', byValueKey('mchListView'), {
                    item: byValueKey("mchPrice" + i.toString()),
                    dxScroll: 10,
                    dyScroll: -100
                });
                priceTxt = byValueKey("mchPrice" + i.toString());
                listTest[i] = await driver.getElementText(priceTxt);
            }
            console.log(listTest);
            for(i = 0; i < listTest.length; i++){
                var tmp = (listTest[i].substring(0, listTest[i].length-4)).split(",");
                listReal[i] = parseFloat(tmp[0] + tmp[1]);
            }
            console.log(listReal);
            listSorted = listReal.sort(function(a, b){return a-b});
            expect(listReal).to.equal(listSorted);
        });

        after(function () {
            driver.deleteSession();
        });

    });
};

module.exports = {
    testMainLevel1
}