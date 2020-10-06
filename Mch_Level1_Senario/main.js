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

        it('ตาม Default เรียงราคาจากน้อยไปหามาก', async function () {
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
            // await driver.elementClick(totalbtn);
            await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.execute('flutter:waitForAbsent', totalbtn);
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


const mchFilterTest = function(opts){

    describe('ทดสอบตัวกรอง', function(){

        before(async function(){
            this.timeout(50000 * 10000);
            driver = await wdio.remote(opts);

            usernameField = byValueKey('usernameTxt');
            passwordField = byValueKey('passwordTxt');
            loginButton = byValueKey('loginBtn');

            await driver.elementSendKeys(usernameField, "551503");
            await driver.elementSendKeys(passwordField, "551504");
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
        });

        it('กรองจากราคา น้อย -> มาก', async function(){
            this.timeout(300 * 10000);
            await driver.elementClick(byValueKey('filterMch'));
            await driver.elementClick(byValueKey('orderFilter'));
            await driver.elementClick(byValueKey('less2greater'));
            await driver.elementClick(byValueKey('goFilterBtn'));
            await driver.execute('flutter:waitForAbsent', byValueKey('goFilterBtn'));
            var listTest = [];
            var listReal = [];
            var listSorted;
            var i;
            for(i = 0; i < 9; i++){
                driver.execute('flutter:scrollUntilVisible', byValueKey('mchListView'), {
                    item: byValueKey("mchPrice" + i.toString()),
                    dxScroll: 10,
                    dyScroll: -100
                });
                priceTxt = byValueKey("mchPrice" + i.toString());
                listTest[i] = await driver.getElementText(priceTxt);
            }
            // console.log(listTest);
            for(i = 0; i < listTest.length; i++){
                var tmp = (listTest[i].substring(0, listTest[i].length-4)).split(",");
                listReal[i] = parseFloat(tmp[0] + tmp[1]);
            }
            // console.log(listReal);
            listSorted = listReal.sort(function(a, b){return a-b});
            expect(listReal).to.equal(listSorted);
        });

        it('กรองจากราคา มาก -> น้อย', async function(){
            this.timeout(300 * 10000);
            await driver.elementClick(byValueKey('filterMch'));
            await driver.elementClick(byValueKey('orderFilter'));
            await driver.elementClick(byValueKey('greater2less'));
            await driver.elementClick(byValueKey('goFilterBtn'));
            await driver.execute('flutter:waitForAbsent', byValueKey('goFilterBtn'));
            var listTest = [];
            var listReal = [];
            var listSorted;
            var i;
            for(i = 0; i < 9; i++){
                driver.execute('flutter:scrollUntilVisible', byValueKey('mchListView'), {
                    item: byValueKey("mchPrice" + i.toString()),
                    dxScroll: 10,
                    dyScroll: -100
                });
                priceTxt = byValueKey("mchPrice" + i.toString());
                listTest[i] = await driver.getElementText(priceTxt);
            }
            // console.log(listTest);
            for(i = 0; i < listTest.length; i++){
                var tmp = (listTest[i].substring(0, listTest[i].length-4)).split(",");
                listReal[i] = parseFloat(tmp[0] + tmp[1]);
            }
            // console.log(listReal);
            listSorted = listReal.sort(function(a, b){return b-a});
            expect(listReal).to.equal(listSorted);
        });

        it('กรองจากหมวดสินค้า', async function(){
            this.timeout(300*10000);
            await driver.elementClick(byValueKey('filterMch'));
            await driver.elementClick(byValueKey('categoryFilter'));
            await driver.elementClick(byValueKey('category1'));
            await driver.elementClick(byValueKey('goFilterBtn'));
            await driver.execute('flutter:waitForAbsent', byValueKey('goFilterBtn'));
            var listCategory = [];
            var i;
            for(i = 0; i < 12; i++){
                driver.execute('flutter:scrollUntilVisible', byValueKey('mchListView'), {
                    item: byValueKey("mchName" + i.toString()),
                    dxScroll: 10,
                    dyScroll: -100
                });
                mchName = byValueKey("mchName" + i.toString());
                listCategory[i] = await driver.getElementText(mchName);
            }
            var checkIsWatch = 0;
            for (i = 0; i < listCategory.length; i++){
                if(listCategory[i].includes("นาฬิกาอัจฉริยะ", 0) || listCategory[i].includes("SMART WATCH", 0)){
                    checkIsWatch += 1;
                }
            }
            console.log(listCategory);
            console,console.log(checkIsWatch);
            expect(checkIsWatch).to.equal(12);
        });
        
        it('กรองจากแบรนสินค้า', async function(){
            this.timeout(300*10000);
            await driver.elementClick(byValueKey('filterMch'));
            await driver.elementClick(byValueKey('brandFilter'));
            await driver.elementClick(byValueKey('brand4'));
            var brandName = await driver.getElementText(byValueKey('brandTxt4'));
            await driver.elementClick(byValueKey('goFilterBtn'));
            await driver.execute('flutter:waitForAbsent', byValueKey('goFilterBtn'));
            var listBrand = [];
            for(i = 0; i < 2; i++){
                driver.execute('flutter:scrollUntilVisible', byValueKey('mchListView'), {
                    item: byValueKey("mchBrand" + i.toString()),
                    dxScroll: 10,
                    dyScroll: -100
                });
                mchBrand = byValueKey("mchBrand" + i.toString());
                listBrand[i] = await driver.getElementText(mchBrand);
            }
            const checkBrand = (element) => element !== brandName
            console.log(brandName);
            expect(false).to.equal(listBrand.some(checkBrand));
        });

        after(function () {
            driver.deleteSession();
        });
    });
}

module.exports = {
    testMainLevel1,
    mchFilterTest
}