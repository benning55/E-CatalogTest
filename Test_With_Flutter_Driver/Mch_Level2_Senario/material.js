const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const materialTest = function (opts) {

    describe('วัสดุก่อสร้าง', function () {

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
            await driver.elementClick(byValueKey('catThree3'));
        });

        it('เคมีภัณฑ์ก่อสร้าง', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เคมีภัณฑ์ก่อสร้าง');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('วัสดุประสานและอุดรอยรั่ว');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('วัสดุกันซึม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หมั่นโป๊ว');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ซีเมนต์');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อีพ๊อกซี่เสียบเหล็ก');
                        break;
                }
            }
        });

        it('แผ่นบอร์ด', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('แผ่นบอร์ด');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นบอร์ดไฟเบอร์ซีเมนต์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นฝ้าระแนง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นฝ้าระบายอากาศ');
                        break;
                }
            }
        });

        it('ไม้ตกแต่ง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('ไม้ตกแต่ง');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 11; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เชิงชาย');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้ตกแต่งผนัง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้บันได');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้บัว');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้ผนังบังใบ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้ฝา');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้พื้น');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้มอบ');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้ระแนง');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้รั้ว');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้อัด');
                        break;
                }
            }
        });

        it('งานหลังคา', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('งานหลังคา');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 6; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นโพลีคาร์บอเนต');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นยิปซั่ม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โรงรถ');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กันสาด');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รางน้ำฝนและรางน้ำทิ้ง');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลังคา');
                        break;
                }
            }
        });

        it('ฉนวนกันความร้อน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('ฉนวนกันความร้อน');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นสะท้อนความร้อน');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ฉนวน PE');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ฉนวนโพลีเอสเตอร์');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ฉนวนใยแก้ว');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ฉนวนบับเบิล');
                        break;
                }
            }
        });

        it('น้ำยาเฉพาะทาง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('น้ำยาเฉพาะทาง');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 9; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาและตัวทำละลาย');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาหล่อลื่น');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาเคลือบและกำจัดเชื้อรา');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาเร่งการเซ็ทตัว');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาแปลงสภาพสนิม');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยากำจัดและป้องกันปลวก');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาทำความสะอาดไม้');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาลอกสี');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาอื่นๆ');
                        break;
                }
            }
        });

        it('ยางมะตอย', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('ยางมะตอย');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 1; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ยางมะตอย');
                        break;
                }
            }
        });

        it('สีและอุปกรณ์', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('สีและอุปกรณ์');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สีงานไม้');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ทาสี');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สีทาอาคาร');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สีเฉพาะทาง');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สีสเปรย์');
                        break;
                }
            }
        });
        
        it('อุปกรณ์รั้วและเชือกกั้น', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo8"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo8");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์รั้วและเชือกกั้น');
            scrollKey = byValueKey('horiLst8');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์โซ่และสลิง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รั้วและอุปกรณ์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เชือกกั้น');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รอก');
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
const material2Mch1Test = function (opts) {
    util.Format2Mch1Test(opts, 'ทดสอบปุ่มทั้งหมดหมวดวัสดุก่อสร้าง', 5, 3);
}

module.exports = {
    materialTest,
    material2Mch1Test
}