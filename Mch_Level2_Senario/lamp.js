const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const lampTest = function (opts) {

    describe('โคมไฟและหลอดไฟ', function () {

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
            await driver.execute('flutter:scrollUntilVisible', byType('ListView'), {
                item: byValueKey("catThree10"),
                dxScroll: 10,
                dyScroll: -400
            });
            await driver.elementClick(byValueKey('catThree10'));
        });

        it('โคมไฟ', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('โคมไฟ');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟตั้งโต๊ะ');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟตั้งพื้น');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟอ่านหนังสือ');
                        break;
                }
            }
        });

        it('โคมไฟภายใน', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('โคมไฟภายใน');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 7; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แทรคไลท์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟเพดาน');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟช่อ');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟถาด');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟกิ่งภายใน');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมเพดาน');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สปอทไลท์ภายใน');
                        break;
                }
            }
        });

        it('โคมไฟภายนอก', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('โคมไฟภายนอก');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 8; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟกิ่งภายนอก');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟช่อภายนอก');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟตกแต่งสวน');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟถนน');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟผนังภายนอก');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟสนาม');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟสปอทไลท์ภายนอก');
                        break;
                     case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไฟหัวเสา');
                        break;
                }
            }
        });

        it('รางนีออนและดาวน์ไลท์', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('รางนีออนและดาวน์ไลท์');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมไฟดาวน์ไลท์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โคมตะแกรง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดโคมไฟ');
                        break;
                }
            }
        });

        it('หลอดไฟ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('หลอดไฟ');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 6; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เทียน LED');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลอดไฟ LED');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลอดไส้');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลอดนีออน');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลอดประหยัดไฟ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หลอดฮาโลเจน');
                        break;
                }
            }
        });

        it('อุปกรณ์หลอดไฟ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์หลอดไฟ');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ขั้วหลอด');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บัลลาสต์');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สตาร์ทเตอร์');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หม้อแปลง');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เปลี่ยนหลอดไฟ');
                        break;
                }
            }
        });

        // it('อ่างล้างจานและอุปกรณ์', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo6"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo6");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อ่างล้างจานและอุปกรณ์');
        //     scrollKey = byValueKey('horiLst6');
        //     var j;
        //     for (j = 0; j < 3; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อ่างล้างจานขาตั้ง');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อ่างล้างจานฝัง');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์อ่างล้างจาน');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์จัดเก็บในครัว', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo7"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo7");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์จัดเก็บในครัว');
        //     scrollKey = byValueKey('horiLst7');
        //     var j;
        //     for (j = 0; j < 9; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ชั้นวางของในครัว');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ตะกร้าใส่ของในครัว');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ตะกร้าผลไม้');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่เก็บแก้วน้ำ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่เสียบมีด');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่ใส่ช้อนส้อม');
        //                 break;
        //             case 6:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่ใส่ทิชชู่');
        //                 break;
        //             case 7:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ราวแขวนในครัว');
        //                 break;
        //             case 8:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์จัดเก็บในครัวอื่นๆ');
        //                 break;
        //         }
        //     }
        // });
        
        // it('อุปกรณ์บนโต๊ะอาหาร', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo8"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo8");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์บนโต๊ะอาหาร');
        //     scrollKey = byValueKey('horiLst8');
        //     var j;
        //     for (j = 0; j < 8; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('แก้วน้ำ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่รองภาชนะ');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ใส่อาหาร');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ทานอาหาร');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กล่องใส่ทิชชู');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดอุปกรณ์บนโต๊ะอาหาร');
        //                 break;
        //             case 6:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ผ้าปูโต๊ะ');
        //                 break;
        //             case 7:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์บนโต๊ะอาหารอื่นๆ');
        //                 break;
                    
        //         }
        //     }
        // });

        // it('อุปกรณ์จัดเก็บเสื้อผ้า', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo9"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo9");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์จัดเก็บเสื้อผ้า');
        //     scrollKey = byValueKey('horiLst9');
        //     var j;
        //     for (j = 0; j < 5; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กล่องเก็บผ้า');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ขอแขวนผ้า');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ตะกร้าผ้า');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ตู้เสื้อผ้า');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่แขวนและถุงจัดเก็บ');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์จัดเก็บทั่วไป', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo10"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo10");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์จัดเก็บทั่วไป');
        //     scrollKey = byValueKey('horiLst10');
        //     var j;
        //     for (j = 0; j < 8; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt10" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นชั้นและแขนรับชั้น');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่จัดเก็บรองเท้า');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเป๋าอเนกประสงค์');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กล่องเก็บของ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ชั้นวางของ');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ลิ้นชักเก็บของ');
        //                 break;
        //             case 6:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์จัดเก็บเครื่องสำอาง');
        //                 break;
        //             case 7:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์จัดเก็บสำนักงาน');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์ตากผ้า', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo11"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo11");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ตากผ้า');
        //     scrollKey = byValueKey('horiLst11');
        //     var j;
        //     for (j = 0; j < 5; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt11" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 console.log(await driver.getElementText(subCategoryTwo));
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้แขวนเสื้อ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กิ๊บหนีบผ้า');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ราวตากผ้า');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ห่วงตากผ้า');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตากผ้าอื่นๆ');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์ทำความสะอาด', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo12"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo12");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ทำความสะอาด');
        //     scrollKey = byValueKey('horiLst12');
        //     var j;
        //     for (j = 0; j < 14; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt12" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องมือขัดพื้นและอุปกรณ์');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้ม็อบและอุปกรณ์');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('แปรงทำความสะอาด');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นกรองอากาศ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้กวาดและที่โกยผง');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('กระดาษชำระและทิชชู่เปียก');
        //                 break;
        //             case 6:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ถังน้ำ');
        //                 break;
        //             case 7:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ถุงมือ');
        //                 break;
        //             case 8:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่เก็บอุปกรณ์');
        //                 break;
        //             case 9:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ที่เช็ดกระจกและยางไล่น้ำ');
        //                 break;
        //             case 10:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ผ้าเช็ดอเนกประสงค์');
        //                 break;
        //             case 11:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ฟองน้ำและใยขัด');
        //                 break;
        //             case 12:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ยางปั๊ม');
        //                 break;
        //             case 13:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ลูกกลิ้งเก็บขนและฝุ่น');
        //                 break;
        //         }
        //     }
        // });

        // it('ผลิตภัณฑ์แม่และเด็ก', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo13"),
        //       dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo13");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('ผลิตภัณฑ์แม่และเด็ก');
        //     scrollKey = byValueKey('horiLst13');
        //     var j;
        //     for (j = 0; j < 3; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt13" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ผลิตภัณฑ์เพื่อสุขอนามัย');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ผลิตภัณฑ์จำเป็นสำหรับเด็ก');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ผลิตภัณฑ์การทานอาหาร');
        //                 break;
        //         }
        //     }
        // });  

        // it('อะไหล่เครื่องใช้ไฟฟ้า', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo14"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo14");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อะไหล่เครื่องใช้ไฟฟ้า');
        //     scrollKey = byValueKey('horiLst14');
        //     var j;
        //     for (j = 0; j < 10; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt14" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่ตู้เย็น');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่ตู้น้ำดื่ม');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อะไหล่พัดลม');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องซักผ้า');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องดูดฝุ่น');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เสริมเครื่องปรับอากาศ');
        //                 break;
        //         }
        //     }
        // });

        after(function () {
            driver.deleteSession();
        });

    });
}


module.exports = {
    lampTest
}