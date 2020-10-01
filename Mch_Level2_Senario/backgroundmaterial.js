const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType,
    pageBack
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const backgroundMaterialTest = function (opts) {

    describe('วัสดุปูพื้นและผนัง', function () {

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
            await driver.elementClick(byValueKey('catThree6'));
        });

        it('กระเบื้องพื้นและผนัง', async function () {
            this.timeout(300 * 1000);
            categoryTwo = byValueKey("catTwo0");
            expect(await driver.getElementText(categoryTwo)).to.equal('กระเบื้องพื้นและผนัง');
            scrollKey = byValueKey('horiLst0');
            for (j = 0; j < 6; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt0" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเบื้องพื้น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเบื้องดินเผา');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเบื้องผนัง');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หินธรรมชาติ');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หินสังเคราะห์');
                        break;
                    case 5:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('หินหล่อทราย');
                        break;
                }
            }
        });

        it('กาวปูกระเบื้อง', async function () {
            this.timeout(300*1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo1"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo1");
            expect(await driver.getElementText(categoryTwo)).to.equal('กาวปูกระเบื้อง');
            scrollKey = byValueKey('horiLst1');
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt1" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวซีเมนต์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวปูกระเบื้อง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กาวยาแนว');
                        break;
                }
            }
        });

        it('บล็อกแก้ว', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo2"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo2");
            expect(await driver.getElementText(categoryTwo)).to.equal('บล็อกแก้ว');
            scrollKey = byValueKey('horiLst2');
            var j;
            for (j = 0; j < 1; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt2" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('บล็อกแก้ว');
                        break;
                }
            }
        });

        it('พื้นไวนิล', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo3"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo3");
            expect(await driver.getElementText(categoryTwo)).to.equal('พื้นไวนิล');
            scrollKey = byValueKey('horiLst3');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt3" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ปูกระเบื้องยาง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระเบื้องยาง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พรมวิทยาศาสตร์และเสื่อน้ำมัน');
                        break;
                }
            }
        });

        it('พื้นลามิเนต', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo4"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo4");
            expect(await driver.getElementText(categoryTwo)).to.equal('พื้นลามิเนต');
            scrollKey = byValueKey('horiLst4');
            var j;
            for (j = 0; j < 4; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt4" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตัวจบไม้พื้น');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พื้นไม้ลามิเนต');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พื้นไม้ไวนิล');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('พื้นไม้ SPC');
                        break;
                }
            }
        });

        it('อุปกรณ์ตกแต่งพื้นและผนัง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo5"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo5");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ตกแต่งพื้นและผนัง');
            scrollKey = byValueKey('horiLst5');
            var j;
            for (j = 0; j < 5; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt5" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('ไม้บัวและอุปกรณ์');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กรุยเชิง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('คิ้ว');
                        break;
                    case 3:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('จมูกบันได');
                        break;
                    case 4:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('กระจกไฮเปอร์ไบร์ท');
                        break;
                }
            }
        });

        it('อุปกรณ์ปูพื้นและผนัง', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo6"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo6");
            expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ปูพื้นและผนัง');
            scrollKey = byValueKey('horiLst6');
            var j;
            for (j = 0; j < 3; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt6" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ปูกระเบื้อง');
                        break;
                    case 1:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ตัดกระเบื้อง');
                        break;
                    case 2:
                        driver.execute('flutter:scrollUntilVisible', scrollKey, {
                            item: subCategoryTwo,
                            dxScroll: -200,
                            dyScroll: 10
                        });
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('น้ำยาสำหรับกระเบื้อง');
                        break;
                }
            }
        });

        it('โมเสค', async function () {
            this.timeout(300 * 1000);
            await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
                item: byValueKey("catTwo7"),
                dxScroll: 10,
                dyScroll: -300
            });
            categoryTwo = byValueKey("catTwo7");
            expect(await driver.getElementText(categoryTwo)).to.equal('โมเสค');
            scrollKey = byValueKey('horiLst7');
            var j;
            for (j = 0; j < 1; j++) {
                subCategoryTwo = byValueKey("subCatTwoTxt7" + "in" + j.toString());
                switch (j) {
                    case 0:
                        expect(await driver.getElementText(subCategoryTwo)).to.equal('โมเสค');
                        break;
                }
            }
        });
        
        // it('รางปลั๊กและอแดปเตอร์', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo8"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo8");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('รางปลั๊กและอแดปเตอร์');
        //     scrollKey = byValueKey('horiLst8');
        //     var j;
        //     for (j = 0; j < 3; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt8" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ปลั๊กไฟ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อแดปเตอร์');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ล้อเก็บสายไฟ');
        //                 break;
        //         }
        //     }
        // });

        // it('ปลั๊กและสวิตช์ไฟฟ้า', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo9"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo9");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('ปลั๊กและสวิตช์ไฟฟ้า');
        //     scrollKey = byValueKey('horiLst9');
        //     var j;
        //     for (j = 0; j < 4; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt9" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('เต้ารับสายไฟ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ปลั๊กไฟ');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ปลั๊กและสวิตช์');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('สวิตช์ไฟ');
        //                 break;
        //         }
        //     }
        // });

        // it('อ่างอาบน้ำ', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo10"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo10");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อ่างอาบน้ำ');
        //     scrollKey = byValueKey('horiLst10');
        //     var j;
        //     for (j = 0; j < 2; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt10" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อ่างอาบน้ำ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อ่างอาบน้ำวน');
        //                 break;
        //         }
        //     }
        // });

        // it('อุปกรณ์ห้องน้ำ', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo11"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo11");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('อุปกรณ์ห้องน้ำ');
        //     scrollKey = byValueKey('horiLst11');
        //     var j;
        //     for (j = 0; j < 3; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt11" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 console.log(await driver.getElementText(subCategoryTwo));
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ความปลอดภัยและผู้สูงอายุ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์ในห้องน้ำ');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์จัดเก็บในห้องน้ำ');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ชุดอุปกรณ์ในห้องน้ำ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('อุปกรณ์แขวนในห้องน้ำ');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ห้องน้ำเด็กเล็ก');
        //                 break;
        //         }
        //     }
        // });

        // it('ผลิตภัณฑ์ดูแลเส้นผม', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo12"),
        //         dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo12");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('ผลิตภัณฑ์ดูแลเส้นผม');
        //     scrollKey = byValueKey('horiLst12');
        //     var j;
        //     for (j = 0; j < 10; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt12" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('เครื่องหนีบผม');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('แกนม้วนผม');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('ไดร์เป่าผม');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('หมวกอบไอน้ำ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('หวีแปรงไฟฟ้า');
        //         }
        //     }
        // });

        // it('พัดลม', async function () {
        //     this.timeout(300 * 1000);
        //     await driver.execute('flutter:scrollUntilVisible', byValueKey('lstViewVertical'), {
        //         item: byValueKey("catTwo13"),
        //       dxScroll: 10,
        //         dyScroll: -300
        //     });
        //     categoryTwo = byValueKey("catTwo13");
        //     expect(await driver.getElementText(categoryTwo)).to.equal('พัดลม');
        //     scrollKey = byValueKey('horiLst13');
        //     var j;
        //     for (j = 0; j < 10; j++) {
        //         subCategoryTwo = byValueKey("subCatTwoTxt13" + "in" + j.toString());
        //         switch (j) {
        //             case 0:
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมดูดอากาศ');
        //                 break;
        //             case 1:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมไอน้ำ');
        //                 break;
        //             case 2:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมไอหมอก');
        //                 break;
        //             case 3:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมตั้งโต๊ะ');
        //                 break;
        //             case 4:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมตั้งพื้น');
        //                 break;
        //             case 5:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมติดเพดาน');
        //                 break;
        //             case 6:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมติดผนัง');
        //                 break;
        //             case 7:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมทาวเวอร์');
        //                 break;
        //             case 8:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมพกพา');
        //                 break;
        //             case 9:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมสไลด์');
        //                 break;
        //             case 10:
        //                 driver.execute('flutter:scrollUntilVisible', scrollKey, {
        //                     item: subCategoryTwo,
        //                     dxScroll: -200,
        //                     dyScroll: 10
        //                 });
        //                 expect(await driver.getElementText(subCategoryTwo)).to.equal('พัดลมอุตสาหกรรม');
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
    backgroundMaterialTest
}