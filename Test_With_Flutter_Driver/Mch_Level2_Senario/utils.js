const wdio = require("webdriverio");
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const Format2Mch1Test = function (opts, txt, amount, cat3) {
    describe(txt, function () {

        before(async function () {
            this.timeout(50000 * 10000);
            if (cat3 == 0) {
                driver = await wdio.remote(opts);

                usernameField = byValueKey('usernameTxt');
                passwordField = byValueKey('passwordTxt');
                loginButton = byValueKey('loginBtn');

                await driver.elementSendKeys(usernameField, "551503");
                await driver.elementSendKeys(passwordField, "551505");
                await driver.elementClick(loginButton);
                await driver.execute('flutter:waitForAbsent', loginButton);
            }
            if(cat3 > 1){
                await driver.execute('flutter:scroll', byType('ListView'), {dx: 50, dy: -100, durationMilliseconds: 100, frequency: 60});
            }
            await driver.elementClick(byValueKey('catThree' + cat3.toString()));
        });

        it('ปุ่มดูทั้งหมด (เครื่องใช้ไฟฟ้า) ', async function () {
            this.timeout(300 * 1000);
            var i;
            for (i = 0; i < amount; i++) {
                if (i > 0) {
                    await driver.execute('flutter:scroll', byValueKey('lstViewVertical'), {
                        dx: 5,
                        dy: -350,
                        durationMilliseconds: 120,
                        frequency: 30
                    });
                }
                categoryTwo = byValueKey("catTwo" + i.toString());
                textOfSubCat = await driver.getElementText(categoryTwo);
                totalbtn = byValueKey('totalSubBtn' + i.toString());
                await driver.elementClick(totalbtn);
                await driver.execute('flutter:waitForAbsent', totalbtn);
                backBtnTxt = byValueKey('backBtnTxt');
                expect(await driver.getElementText(backBtnTxt)).to.equal(textOfSubCat);
                backBtn = byValueKey('backIcon');
                await driver.touchAction({
                    action: 'tap',
                    element: {
                        elementId: backBtn
                    }
                });
            }

        });

        after(async function () {
            if (cat3 == 15) {
                driver.deleteSession();
            } else {
                backBtn = byValueKey('backIcon');
                await driver.touchAction({
                    action: 'tap',
                    element: {
                        elementId: backBtn
                    }
                });
            }
        });

    })
}

module.exports = {
    Format2Mch1Test
}