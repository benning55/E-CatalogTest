const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const handToolTest = function (opts) {

    describe('เครื่องมือช่างและฮาร์ดแวร์', function () {

        before(async function () {
            this.timeout(50000 * 10000);
            // driver = await wdio.remote(opts);

            // usernameField = byValueKey('usernameTxt');
            // passwordField = byValueKey('passwordTxt');
            // loginButton = byValueKey('loginBtn');

            // await driver.elementSendKeys(usernameField, "551503");
            // await driver.elementSendKeys(passwordField, "551504");
            // await driver.elementClick(loginButton);
            // await driver.execute('flutter:waitForAbsent', loginButton);
            await driver.execute('flutter:scrollUntilVisible', byType('ListView'), {
                item: byValueKey("catThree14"),
                dxScroll: 10,
                dyScroll: -400
            });
            await driver.elementClick(byValueKey('catThree14'));
        });

        it('เครื่องมือโยธา', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องมือโยธา');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 8; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องโม่ปูน');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขัดมันปูน');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องจี้ปูน');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องตบดิน');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องผสมปูนฉาบ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ยกของ');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปาดปูน');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องดัดเหล็ก');
                        break;
                }
            }
        });

        it('เครื่องมือไฟฟ้า', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องมือไฟฟ้า');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 11; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเจียระไนและอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเป่าลม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือเลื่อยและอุปกรณ์');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องกบไสไม้และอุปกรณ์');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องฉีดน้ำและอุปกรณ์');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือตัดและอุปกรณ์');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือขัดและอุปกรณ์');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สว่านและดอกสว่าน');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องสกัด');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แบตเตอรี่เครื่องมือไร้สาย');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องพ่นละออง');
                        break;
                }
            }
        });

        it('เครื่องมือช่าง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องมือช่าง');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 16; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมืองานปูน');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมืองานไม้');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือวัด');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เลื่อย');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไขควง');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กรรไกรตัดชิ้นงาน');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไขควงบล็อก');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมืออื่นๆ');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ค้อน');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('คีม');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ปากกาจับงาน');
                        break;
                    case 11:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ประแจ');
                        break;
                    case 12:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แชลง');
                        break;
                    case 13:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ขวาน');
                        break;
                    case 14:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดเครืองมือช่าง');
                        break;
                    case 15:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สว่านมือ');
                        break;
                }
            }
        });

        it('เครื่องมือลม', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องมือลม');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 8; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องพ่นสี');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องยิงแม๊กลม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ปั๊มลม');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเจียรแม่พิมพ์ลม');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขัดกระดาษทรายลม');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องบล็อกลม');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดไขควงและบล็อกลม');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องมือลม');
                        break;
                }
            }
        });

        it('เครื่องยนต์และเครื่องปั่นไฟ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องยนต์และเครื่องปั่นไฟ');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องชาร์จแบต');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องปั่นไฟ');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องยนต์เบนซิน');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('มอเตอร์');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องยนต์สูบน้ำ');
                        break;
                }
            }
        });

        it('กล่องเครื่องมือ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('กล่องเครื่องมือ');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เอี๊ยมช่าง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเป๋าเข็มขัดช่าง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเป๋าช่าง');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กล่องเครื่องมือช่าง');
                        break;
                }
            }
        });

        it('กาว', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('กาว');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 14; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวเอนกประสงค์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวแท่ง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวซิลิโคน');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวดินน้ำมัน');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวตะปู');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวติดพลาสติก');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวปะเก็น');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวผง');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวยาง');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวร้อน');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวลาเท็กซ์');
                        break;
                    case 11:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวสเปรย์');
                        break;
                    case 12:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวอีพ๊อกซี่');
                        break;
                    case 13:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ปืนยิงกาว');
                        break;
                }
            }
        });

        it('ชุดและอุปกรณ์เซฟตี้', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('ชุดและอุปกรณ์เซฟตี้');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์นิรภัยส่วนบุคคล');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์นิรภัยสาธารณะ');
                        break;
                }
            }
        });
        
        it('บันได', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo8"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo8");
            expect(await driver.getElementText(categoryTwo)).to.equal('บันได');
            scrollKey = byValueKey('horiLst8');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดทรงA');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดพาด');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดสเต็ป');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดอเนกประสงค์');
                        break;
                }
            }
        });

        it('ประดับยนต์', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo9"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo9");
            expect(await driver.getElementText(categoryTwo)).to.equal('ประดับยนต์');
            scrollKey = byValueKey('horiLst9');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขัดสีรถยนต์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาดูแลรถยนต์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตกแต่งรถยนต์');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ทำความสะอาดรถยนต์');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์รักษาความปลอดภัยรถยนต์');
                        break;
                }
            }
        });

        it('รถเข็น', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo10"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo10");
            expect(await driver.getElementText(categoryTwo)).to.equal('รถเข็น');
            scrollKey = byValueKey('horiLst10');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt10" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รถเข็น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รถเข็นเครื่องมือช่าง');
                        break;
                }
            }
        });

        it('อุปกรณ์เชื่อมและบัดกรี', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo11"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo11");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์เชื่อมและบัดกรี');
            scrollKey = byValueKey('horiLst11');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt11" + "in" + j.toString());
                switch (j) {
                    case 0:
                        console.log(await driver.getElementText(subCategoryTwo));
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเชื่อมและอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์บัดกรี');
                        break;
                }
            }
        });

        it('อุปกรณ์ยึดติด', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo12"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo12");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ยึดติด');
            scrollKey = byValueKey('horiLst12');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt12" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สกรู, น๊อตและแหวน');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พุ๊ก');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ยึดอื่นๆ');
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

const util = require('./utils');
const handTool2Mch1Test = function (opts) {
    util.Format2Mch1Test(opts, 'ทดสอบปุ่มทั้งหมดหมวดเครื่องมือช่างและฮาร์ดแวร์', 13, 14);
}


module.exports = {
    handToolTest,
    handTool2Mch1Test
}