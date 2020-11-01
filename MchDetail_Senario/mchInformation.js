const {
    expect,
    assert
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
// var skip = false;
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    afterEach(async function () {
        if (this.currentTest.state == 'failed') {
            var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
            var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\mchDetail\\'
            await driverWd.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                }
            );
            // console.log(skip);
            skip = true;
        }
    });


    describe("initial for compare 1", () => {

        it("Start Application", async function () {
            this.timeout(3000 * 10000);
            driverWd = await wd.promiseChainRemote({
                host: "localhost",
                port: 4723,
            });
            return driverWd.init(osSpecificOps);
        });

        it("Type Username", async function () {
            this.timeout(30 * 10000);
            await driverWd.waitForElementByXPath("//*[@text='รหัสผู้ใช้' or @label='รหัสผู้ใช้']",
                asserters.isDisplayed, 20000, 100).then(async function (el) {
                await el.click();
            });
            await new Promise(res => setTimeout(res, 1000));
            utils.textToPress('551503', driverWd);
            await new Promise(res => setTimeout(res, 2000));
        });

        it('Type Password', async function () {
            this.timeout(30 * 10000);
            await driverWd.waitForElementByXPath("//*[@text='รหัสผ่าน' or @label='รหัสผ่าน']",
                asserters.isDisplayed, 20000, 100).then(async function (el) {
                await el.click();
            });
            await new Promise(res => setTimeout(res, 1000));
            utils.textToPress('551505', driverWd);
            await new Promise(res => setTimeout(res, 2000));
        });

        it('Click Log In Button', async function () {
            await driverWd.waitForElementByAccessibilityId("เข้าสู่ระบบ", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
            await new Promise(res => setTimeout(res, 2000));
        });
    });

    describe('เช็คแถบส่วนรายละเอียดสินค้า', function () {
        
        it('กดไปที่หมวดประตูและหน้าต่าง', async function() {
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 5000));
            const elPath = "//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[5]";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            await element.click();
        }); 

        it('กดปุ่มหมวดย่อยไปที่ประตูภายนอก', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("ประตูภายนอก", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });

        it('เลือกสินค้า', async function() {
            await new Promise(res => setTimeout(res, 2000));
            await driverWd.waitForElementByAccessibilityId("SKU: 1012188\nASIA\nประตู PVC เกล็ดล่างพร้อมวงกบ ASIA 70X180 ซม. สีครีม ไม่เจาะ\n1,090\n575 บาท", asserters.isDisplayed, 2000, 100).then(async function(el) {
                await el.click();
            });
        });
        
        // it('ไปหาเช็คแถบรายละเอียดสินค้า', async function(){
        //     await new Promise(res => setTimeout(res, 2000));
        //     const elPath = "รายละเอียดสินค้า\nแท็บที่ 1 จาก 3";
        //     const element = await utils.scrollUntilVisible(
        //         "accessibility id",
        //         elPath,
        //         driverWd,
        //     );
        //     expect(element).to.exist;
        // })

        it('ไปหาเช็คแถบรายละเอียดสินค้ากดปุ่มเพิ่มเติม', async function(){
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "+ เพิ่มเติม";
            const element = await utils.scrollUntilVisible(
                "accessibility id",
                elPath,
                driverWd,
            );
            await element.click();
        });


        it('มีรายละเอียดสินค้า', async function(){
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "ประตู PVC เกล็ดล่างพร้อมวงกบ ASIA 70X180 ซม. สีครีม ไม่เจาะ\nคุณสมบัติ\nวิธีใช้งาน\nคำแนะนำ\nข้อควรระวัง";
            const element = await utils.scrollUntilVisible(
                "accessibility id",
                elPath,
                driverWd,
            );
            expect(element).to.exist;
        });

    });

}

module.exports = {
    test,
}
