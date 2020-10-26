const wdio = require("webdriverio");
// const assert = require('assert');
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
  
const seeMainLevel3 = function(opts) {
    describe('Check Category', function () {

        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn');

            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551505");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
        });

        it('Need to be 16 category and prioritize', async function () {
            this.timeout(300*10000);
            var count = 0;
            var i;
            for (i = 0; i < 16; i++) {
                if(count == 8){
                    await driver.execute('flutter:scroll', byType('ListView'), {dx: 50, dy: -550, durationMilliseconds: 1000, frequency: 60});
                }
                await driver.elementClick(byValueKey('catThree'+i.toString()));
                categoryTxt = byValueKey('backBtnTxt');
                switch (i) {
                    case 0:
                        expect(await driver.getElementText(categoryTxt)).to.equal('เครื่องใช้ไฟฟ้า');
                        break;
                    case 1:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ห้องน้ำ');
                        break;
                    case 2:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ห้องนอนและเครื่องนอน');
                        break;
                    case 3:
                        expect(await driver.getElementText(categoryTxt)).to.equal('วัสดุก่อสร้าง');
                        break;
                    case 4:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ประตูและหน้าต่าง');
                        break;
                    case 5:
                        expect(await driver.getElementText(categoryTxt)).to.equal('งานระบบไฟฟ้า');
                        break;
                    case 6:
                        expect(await driver.getElementText(categoryTxt)).to.equal('วัสดุปูพื้นและผนัง');
                        break;
                    case 7:
                        expect(await driver.getElementText(categoryTxt)).to.equal('เฟอร์นิเจอร์และของแต่งบ้าน')
                        break;
                    case 8:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ผลิตภัณฑ์และของใช้ภายในบ้าน');
                        break;
                    case 9:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ห้องครัวและอุปกรณ์');
                        break;
                    case 10:
                        expect(await driver.getElementText(categoryTxt)).to.equal('โคมไฟและหลอดไฟ');
                        break;
                    case 11:
                        expect(await driver.getElementText(categoryTxt)).to.equal('สวนและอุปกรณ์ตกแต่ง');
                        break;
                    case 12:
                        expect(await driver.getElementText(categoryTxt)).to.equal('งานระบบประปา');
                        break;
                    case 13:
                        expect(await driver.getElementText(categoryTxt)).to.equal('กีฬาและฟิตเนส');
                        break;
                    case 14:
                        expect(await driver.getElementText(categoryTxt)).to.equal('เครื่องมือช่างและฮาร์ดแวร์');
                        break;
                    case 15:
                        expect(await driver.getElementText(categoryTxt)).to.equal('ทีวีและเครื่องเสียง');
                        break;
                        
                }
                backBtn = byValueKey('backIcon');
                await driver.touchAction({
                    action: 'tap',
                    element: { elementId: backBtn }
                });
                count += 1;
            }
        });

        after(function () {
            driver.deleteSession();
        });

    });
};

const searchBar = function (opts) {
    describe('Search bar in level 3', function (){
        before(async function () {
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);    

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn');
            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551505");
            await driver.elementClick(loginButton);
            await driver.execute('flutter:waitForAbsent', loginButton);
        });

        it('Can search by brand, article_no, name', async function () {
            this.timeout(30 * 1000);
            searchIcon = byValueKey('searchIcon');
            await driver.elementClick(searchIcon);
            await driver.execute('flutter:waitForAbsent', searchIcon);
            await driver.touchAction({
                action: 'tap',
                element: { elementId: byType('TextField') }
            });
            await driver2.pressKeycode(9);
            await driver2.pressKeycode(12);
            await driver2.pressKeycode(12);
            await driver2.pressKeycode(9);
            await driver2.pressKeycode(12);
            await driver2.pressKeycode(12);
            // await driver.execute('flutter:enterText', '255255');
            // await driver.elementSendKeys(byType('TextField'), '255255');
            // await driver.execute('flutter:sendKeyEvent', 66, { platForm: 'android' });
            await driver.execute('flutter:waitForAbsent', byType('TextField'));
        });

        after(function () {
            driver.quit();
        });
    })
}

module.exports = {
    seeMainLevel3,
    searchBar
}