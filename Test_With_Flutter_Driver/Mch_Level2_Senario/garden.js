const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const gardenTest = function (opts) {

    describe('สวนและอุปกรณ์ตกแต่ง', function () {

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
                item: byValueKey("catThree11"),
                dxScroll: 10,
                dyScroll: -400
            });
            await driver.elementClick(byValueKey('catThree11'));
        });

        it('เครื่องมือทำสวน', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องมือทำสวน');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 8; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเป่าใบไม้');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเล็มหญ้า');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องตัดแต่งพุ่มไม้');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือพรวนดิน');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เลื่อยยนต์');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รถตัดหญ้า');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องมือทำสวน');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องย่อยกิ่งไม้');
                        break;
                }
            }
        });

        it('เฟอร์นิเจอร์นอกบ้าน', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('เฟอร์นิเจอร์นอกบ้าน');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 7; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โต๊ะและเก้าอี้');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เต็นท์สนาม');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เฟอร์นิเจอร์ปิคนิค');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โซฟาสนาม');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชิงช้า');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดม้านั่งสนาม');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ร่มสนาม');
                        break;
                }
            }
        });

        it('ของเล่นสนาม', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('ของเล่นสนาม');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บ้านบอล');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สระว่ายน้ำเป่าลม');
                        break;
                }
            }
        });

        it('อุปกรณ์จัดเก็บในสวน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์จัดเก็บในสวน');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 1; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บ้านจัดเก็บ');
                        break;
                }
            }
        });

        it('อุปกรณ์ตกแต่งสวน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ตกแต่งสวน');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 11; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระถางต้นไม้และอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ต้นไม้ประดิษฐ์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ทางเท้า');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รั้ว');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตะเกียงตกแต่งสวน');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตุ๊กตาตกแต่งสวน');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้จดหมาย');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้ปลา');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำพุแต่งสวน');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หญ้าเทียม');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตกแต่งสวนอื่นๆ');
                        break;
                }
            }
        });

        it('อุปกรณ์ทำสวน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ทำสวน');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 6; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตัดแต่ง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เลื่อยและอุปกรณ์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ขุดดิน');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ทำสวนอื่นๆ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พลาสติกคลุมวัชพืช');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์พรวนดิน');
                        break;
                }
            }
        });

        it('อุปกรณ์ทำอาหารนอกบ้าน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ทำอาหารนอกบ้าน');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ถ่านบาร์บีคิวและขี้ไต้');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาบาร์บีคิวถ่านไม้');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาบาร์บีคิวแก็ส');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เตาบาร์บีคิวไฟฟ้า');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์บาร์บีคิว');
                        break;
                }
            }
        });

        it('อุปกรณ์รดน้ำต้นไม้', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์รดน้ำต้นไม้');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สปริงเกอร์และอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สายยางรดน้ำ');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('วาล์วการเกษตร');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ข้อต่อสายยาง');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ปืนฉีดน้ำ');
                        break;
                }
            }
        });
        
        it('อุปกรณ์สำหรับสัตว์เลี้ยง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo8"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo8");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์สำหรับสัตว์เลี้ยง');
            scrollKey = byValueKey('horiLst8');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เบาะและที่นอนสัตว์เลี้ยง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ให้อาหารสัตว์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('รถเข็นสัตว์เลี้ยง');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บ้านสัตว์เลี้ยง');
                        break;
                }
            }
        });

        it('ต้นไม้และเมล็ดพันธุ์', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo9"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo9");
            expect(await driver.getElementText(categoryTwo)).to.equal('ต้นไม้และเมล็ดพันธุ์');
            scrollKey = byValueKey('horiLst9');
            var j;
            for (j = 0; j < 12; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระถางต้นไม้และอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เมล็ดพันธุ์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('จุลินทรีย์');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ถังพ่นยา');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บัวรดน้ำ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ปุ๋ย');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('วัสดุเพาะปลูก');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สารกำจัดแมลง');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สารกำจัดวัชพืช');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สารปรับสภาพน้ำ');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หิน ดิน ทราย');
                        break;
                    case 11:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ต้นไม้จริง');
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
const garden2Mch1Test = function (opts) {
    util.Format2Mch1Test(opts, 'ทดสอบปุ่มทั้งหมดหมวดสวนและอุปกรณ์ตกแต่ง', 10, 11);
}

module.exports = {
    gardenTest,
    garden2Mch1Test
}