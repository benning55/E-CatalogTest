const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const mchDetailTxt = function (opts) {
    describe('กดดูรายละเอียดสินค้าแบบราคาธรรมดา', function () {

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
            await driver.execute('flutter:scroll', byType('ListView'), {
                dx: 10,
                dy: -550,
                durationMilliseconds: 120,
                frequency: 60
            });
            await driver.elementClick(byValueKey('catThree13'));
            // totalbtn = byValueKey('totalSubBtn0');
            // await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.execute('flutter:scrollIntoView', byValueKey('lstViewVertical'), byValueKey('totalSubBtn2'), {alignment: 0.0});
            await driver.elementClick(byValueKey('totalSubBtn2'));
            await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn2'));
            await driver.elementClick(byValueKey('mchDetail0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
        });

        it('ชื่อแบรนสินค้า', async function () {
            this.timeout(300 * 10000);
            var brandName = findText(driver, 'productBrand');
            if(brandName) {
                expect(await driver.getElementText(byValueKey('productBrand'))).to.equal('เสี่ยวมี่')
            }else {
                throw new Error('There is no brand name');
            }
        });

        it('ชื่อสินค้า', async function () {
            this.timeout(300 * 10000);
            // await driver.elementClick(byValueKey('mchDetail0'));
            // await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
            var productName = findText(driver, 'productName');
            if(productName) {
                expect(await driver.getElementText(byValueKey('productName'))).to.equal('นาฬิกาอัจฉริยะ XIAOMI MI BAND 3');
            }else {
                throw new Error('There is no product name');
            }
        });

        it('ชื่อรหัสสินค้า', async function (){
            this.timeout(300*1000);
            var idName = findText(driver, 'productId');
            if(idName) {
                expect(await driver.getElementText(byValueKey('productId'))).to.equal('SKU : 1111925');
            }
            else {
                throw new Error('There is no product Id');
            }
        })

        it('ราคาสินค้าแบบธรรมดา', async function (){
            this.timeout(300*1000);
            var normalPrice = findText(driver, 'normalPrice');
            if(normalPrice) {
                expect(await driver.getElementText(byValueKey('normalPrice'))).to.equal('1,190')
            }
            else {
                throw new Error('There is no normal price');
            }
        })

        after(function () {
            driver.deleteSession();
        });

    });

    describe('กดดูรายละเอียดสินค้าแบบราคาโปรโมชั่น', function () {

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
            await driver.execute('flutter:scroll', byType('ListView'), {
                dx: 10,
                dy: -550,
                durationMilliseconds: 120,
                frequency: 60
            });
            await driver.elementClick(byValueKey('catThree13'));
            // totalbtn = byValueKey('totalSubBtn0');
            // await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.execute('flutter:scrollIntoView', byValueKey('lstViewVertical'), byValueKey('totalSubBtn2'), {alignment: 0.0});
            await driver.elementClick(byValueKey('totalSubBtn0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn0'));
            await driver.elementClick(byValueKey('mchDetail0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
        });

        it('ชื่อแบรนสินค้า', async function () {
            this.timeout(300 * 10000);
            var brandName = findText(driver, 'productBrand');
            if(brandName) {
                expect(await driver.getElementText(byValueKey('productBrand'))).to.equal('KIDSCLUB')
            }else {
                throw new Error('There is no brand name');
            }
        });

        it('ชื่อสินค้า', async function () {
            this.timeout(300 * 10000);
            // await driver.elementClick(byValueKey('mchDetail0'));
            // await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
            var productName = findText(driver, 'productName');
            if(productName) {
                expect(await driver.getElementText(byValueKey('productName'))).to.equal('เครื่องคาดิโอ KIDSCLUB 557012413');
            }else {
                throw new Error('There is no product name');
            }
        });

        it('ชื่อรหัสสินค้า', async function (){
            this.timeout(300*1000);
            var idName = findText(driver, 'productId');
            if(idName) {
                expect(await driver.getElementText(byValueKey('productId'))).to.equal('SKU : 1079402');
            }
            else {
                throw new Error('There is no product Id');
            }
        })

        it('ราคาสินค้าธรรมดา', async function (){
            this.timeout(300*1000);
            var normalPrice = findText(driver, 'normalPrice');
            if(normalPrice) {
                expect(await driver.getElementText(byValueKey('normalPrice'))).to.equal('4,000')
            }
            else {
                throw new Error('There is no normal price');
            }
        });

        it('ราคาสินค้าพิเศษ', async function (){
            this.timeout(300*1000);
            var specialPrice = findText(driver, 'specialPrice');
            if(specialPrice) {
                expect(await driver.getElementText(byValueKey('specialPrice'))).to.equal('2,500')
            }
            else {
                throw new Error('There is no special price');
            }
        });

        after(function () {
            driver.deleteSession();
        });

    });
};

async function findText(driver, txt) {
    try {
        await driver.execute('flutter:waitFor', byValueKey(txt));
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = {
    mchDetailTxt,
}