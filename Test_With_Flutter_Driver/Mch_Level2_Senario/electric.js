const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;
const util = require('./utils');

const electricTest = function (opts) {

    describe('เครื่องใช้ไฟฟ้า', function () {

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
            await driver.elementClick(byValueKey('catThree0'));
        });

        it('เครื่องใช้ไฟฟ้าในครัวขนาดเล็ก', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องใช้ไฟฟ้าในครัวขนาดเล็ก');
            for (j = 0; j < 13; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเตรียมอาหาร');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องใช้ไฟฟ้าเฉพาะทาง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปั่นและเครื่องคั้น');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องชงชาและชงกาแฟ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปิ้งขนมปังและแซนวิช');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาไฟฟ้า');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาอบและไมโครเวฟ');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระติกและกาต้มน้ำ');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระทะไฟฟ้า');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หม้อไฟฟ้า');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาบาร์บิคิว');
                        break;
                    case 11:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หม้อหุงข้าว');
                        break;
                    case 12:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst0'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมอื่นๆ');
                }
            }
        });

        it('เครื่องกรองอากาศ', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo1");
            subCategoryTwo = byValueKey("subCatTwoTxt1" + "in0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องกรองอากาศ');
            expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องกรองอากาศ');
        })


        it('เครื่องซักผ้าและอบผ้า', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -200
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องซักผ้าและอบผ้า');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องซักผ้า');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst2'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องอบผ้า');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', byValueKey('horiLst2'), {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องซักอบผ้า');
                        break;
                }
            }
        });

        it('เครื่องดูดฝุ่น', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องดูดฝุ่น');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดไรฝุ่น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นแบบกล่อง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นแบบถุง');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นและดูดน้ำ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นด้ามจับ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นมือถือ');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดูดฝุ่นอุตสาหกรรม');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องทำความสะอาดไอน้ำ');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หุ่นยนต์ดูดฝุ่น');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขจัดคราบอเนกประสงค์');
                        break;
                }
            }
        });

        it('เครื่องทำความร้อน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องทำความร้อน');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 1; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องทำความร้อน');
                        break;
                }
            }
        });

        it('เครื่องปรับอากาศ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องปรับอากาศ');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปรับอากาศเคลื่อนที่');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปรับอากาศตั้งพื้น, แขวน');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปรับอากาศติดผนัง');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปรับอากาศตู้ตั้ง');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปรับอากาศฝัง, ซ่อนเพดาน');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ม่านอากาศ');
                        break;
                }
            }
        });

        it('เครื่องฟอกอากาศ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องฟอกอากาศ');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นกรองอากาศ');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องฟอกอากาศในบ้าน');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องฟอกอากาศพกพา');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องฟอกอากาศตั้งโต๊ะ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขจัดความชื้น');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องผลิตโอโซน');
                        break;
                }
            }
        });

        it('เตารีด', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('เตารีด');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องรีดผ้า');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องรีดผ้าไอน้ำ');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตารีดแรงดันไอน้ำ');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตารีดแห้ง');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตารีดไอน้ำ');
                        break;
                }
            }
        });

        it('จักรเย็บผ้า', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo8"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo8");
            expect(await driver.getElementText(categoryTwo)).to.equal('จักรเย็บผ้า');
            scrollKey = byValueKey('horiLst8');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('จักรเย็บผ้า');
                        break;
                }
            }
        });

        it('ชุดเครื่องใช้ไฟฟ้าเล็ก', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo9"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo9");
            expect(await driver.getElementText(categoryTwo)).to.equal('ชุดเครื่องใช้ไฟฟ้าเล็ก');
            scrollKey = byValueKey('horiLst9');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดเครื่องใช้ไฟฟ้าเล็ก');
                        break;
                }
            }
        });

        it('ตู้เย็นและตู้แช่แข็ง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo10"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo10");
            expect(await driver.getElementText(categoryTwo)).to.equal('ตู้เย็นและตู้แช่แข็ง');
            scrollKey = byValueKey('horiLst10');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt10" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้เย็น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้แช่แข็ง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้น้ำดื่ม');
                }
            }
        });

        it('ตู้แช่ไวน์และตู้แช่', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo11"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo11");
            expect(await driver.getElementText(categoryTwo)).to.equal('ตู้แช่ไวน์และตู้แช่');
            scrollKey = byValueKey('horiLst11');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt11" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้แช่เครื่องดื่ม');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้แช่ไวน์');
                }
            }
        });

        it('ผลิตภัณฑ์ดูแลเส้นผม', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo12"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo12");
            expect(await driver.getElementText(categoryTwo)).to.equal('ผลิตภัณฑ์ดูแลเส้นผม');
            scrollKey = byValueKey('horiLst12');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt12" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องหนีบผม');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แกนม้วนผม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไดร์เป่าผม');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หมวกอบไอน้ำ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หวีแปรงไฟฟ้า');
                }
            }
        });

        it('พัดลม', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo13"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo13");
            expect(await driver.getElementText(categoryTwo)).to.equal('พัดลม');
            scrollKey = byValueKey('horiLst13');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt13" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมดูดอากาศ');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมไอน้ำ');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมไอหมอก');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมตั้งโต๊ะ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมตั้งพื้น');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมติดเพดาน');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมติดผนัง');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมทาวเวอร์');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมพกพา');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมสไลด์');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมอุตสาหกรรม');
                        break;
                }
            }
        });

        it('อะไหล่เครื่องใช้ไฟฟ้า', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo14"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo14");
            expect(await driver.getElementText(categoryTwo)).to.equal('อะไหล่เครื่องใช้ไฟฟ้า');
            scrollKey = byValueKey('horiLst14');
            var j;
            for (j = 0; j < 10; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt14" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่ตู้เย็น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่ตู้น้ำดื่ม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่พัดลม');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องซักผ้า');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องดูดฝุ่น');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องปรับอากาศ');
                        break;
                }
            }
        });

        after(async function () {
            backBtn = byValueKey('backIcon');
            await driver.touchAction({
                action: 'tap',
                element: {
                    elementId: backBtn
                }
            });
        });

    });
}


const electric2Mch1Test = function (opts) {
    util.Format2Mch1Test(opts, 'ทดสอบหน้าเครื่องใช้ไฟฟ้า', 15, 0);
}

module.exports = {
    electricTest,
    electric2Mch1Test
}