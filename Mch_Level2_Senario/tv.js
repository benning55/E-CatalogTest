const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const tvTest = function (opts) {

    describe('ทีวีและเครื่องเสียง', function () {

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
                item: byValueKey("catThree15"),
                dxScroll: 10,
                dyScroll: -400
            });
            await driver.elementClick(byValueKey('catThree15'));
        });

        it('เครื่องเล่นแผ่นและบันทึก', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องเล่นแผ่นและบันทึก');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเล่น Blu-Ray');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเล่น CD');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเล่น DVD');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นดีวีดี');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แผ่นวีซีดี');
                        break;
                }
            }
        });

        it('เครื่องเสียงและลำโพง', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องเสียงและลำโพง');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 7; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเสียงแยกชิ้น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์เครื่องเสียง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('Mini Compo');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โฮมเธียเตอร์');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('คาราโอเกะ');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดเครื่องเสียงไฮ-ไฟ');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('วิทยุพกพา');
                        break;
                }
            }
        });

        it('เครื่องรับสัญญาณทีวี', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('เครื่องรับสัญญาณทีวี');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เสาอากาศ');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กล่องรับสัญญาณ');
                        break;
                }
            }
        });

        it('แก๊ตแจ๊ต', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('แก๊ตแจ๊ต');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โดรน');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กล้องวิดิโอ');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์แก๊ตแจ็ต');
                        break;
                }
            }
        });

        it('โทรศัพท์บ้าน', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('โทรศัพท์บ้าน');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โทรศัพท์ไร้สาย');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โทรศัพท์พื้นฐาน');
                        break;
                }
            }
        });

        it('มือถือและแทบเล็ต', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('มือถือและแทบเล็ต');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 2; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('มือถือ');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('แทบเล็ต');
                        break;
                }
            }
        });

        it('สายสัญญาณ', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('สายสัญญาณ');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 13; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย AV');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย Coaxial');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย Componant');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย Digital');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย HDMI');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย Optical');
                        break;
                    case 6:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย RCA');
                        break;
                    case 7:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย RF');
                        break;
                    case 8:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย S.Video');
                        break;
                    case 9:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย USB');
                        break;
                    case 10:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สาย VGA');
                        break;
                    case 11:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สายลำโพง');
                        break;
                    case 12:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('สายสัญญาณเสียง');
                        break;
                }
            }
        });

        it('อุปกรณ์เสริมทีวี', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -400
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์เสริมทีวี');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('เมาส์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ขาแขวนทีวี');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('คีย์บอร์ด');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดทำความสะอาด');
                        break;
                }
            }
        });
        
        // it('บันได', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo8"),
        //         dxScroll: 10,
        //         dyScroll: -400
        //     });
        //     categoryTwo = byValueKey("catTwo8");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('บันได');
        //     scrollKey = byValueKey('horiLst8');
        //     var j;
        //     for (j = 0; j < 4; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดทรงA');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดพาด');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดสเต็ป');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('บันไดอเนกประสงค์');
        //                 break;
        //         }
        //     }
        // });

        // it('ประดับยนต์', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo9"),
        //         dxScroll: 10,
        //         dyScroll: -400
        //     });
        //     categoryTwo = byValueKey("catTwo9");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('ประดับยนต์');
        //     scrollKey = byValueKey('horiLst9');
        //     var j;
        //     for (j = 0; j < 5; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องขัดสีรถยนต์');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาดูแลรถยนต์');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตกแต่งรถยนต์');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ทำความสะอาดรถยนต์');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ระกษาความปลอดภัย');
        //                 break;
        //         }
        //     }
        // });

        // it('รถเข็น', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo10"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo10");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('รถเข็น');
        //     scrollKey = byValueKey('horiLst10');
        //     var j;
        //     for (j = 0; j < 2; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt10" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('รถเข็น');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('รถเข็นเครื่องมือช่าง');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์เชื่อมและบัดกรี', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo11"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo11");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์เชื่อมและบัดกรี');
        //     scrollKey = byValueKey('horiLst11');
        //     var j;
        //     for (j = 0; j < 2; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt11" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 console.log(await driver.getElementText(subCategoryTwo));
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องเชื่อมและอุปกรณ์');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์บัดกรี');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์ยึดติด', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo12"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo12");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ยึดติด');
        //     scrollKey = byValueKey('horiLst12');
        //     var j;
        //     for (j = 0; j < 3; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt12" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('สกรู, น๊อตและแหวน');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พุ๊ก');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ยึดอื่นๆ');
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
    tvTest
}