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
            // skip = true;
        }
    });


    describe("initial for compare 1", () => {

        before(function (){
            skip = false;
        });

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

    describe('เช็คส่วนสต๊อค', function () {

        before(function (){
            skip = false;
        });
        
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

        it('ไปหาเช็คแถบรายละเอียดสินค้ากดปุ่มเพิ่มเติม', async function(){
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "สต๊อค";
            const element = await utils.scrollUntilVisible(
                "accessibility id",
                elPath,
                driverWd,
            );
            await element.click();
        });


        it('มีรายสาขาที่ของผู้ใช้ขึ้นก่อน', async function(){
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S015 - ประชาชื่น');
        });

        it('เป็นสาขา DC01', async function(){
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('DC01 - DC1');
        });

        it('เป็นสาขา DC02', async function(){
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[7]";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('DC02 - DC2');
        });

    });

    describe('เช็คส่วนสต๊อคสาขาอื่น', function () {

        before(function (){
            skip = false;
        });
        
        it('กดไปที่สต๊อคสาขาอื่น', async function() {
            await new Promise(res => setTimeout(res, 5000));
            const elPath = "สต๊อคสาขาอื่น ";
            const element = await utils.scrollUntilVisible(
                "accessibility id",
                elPath,
                driverWd,
            );
            await element.click();
        }); 

    });

    describe('เช็คราคาสินค้าจากมากไปน้อย', async function() {

        before(function (){
            skip = false;
        });


        it('เช็คลำดับ 0', async function() {
            this.timeout(50000);
            await new Promise(res => setTimeout(res, 5000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='0']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal("S014 - พระราม 2\n8,000.00\nSET");
        });

        it('เช็คลำดับ 1', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='1']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S033 - อยุธยา\n8,000.00\nSET');
        });

        it('เช็คลำดับ 2', async function() {
            this.timeout(30000);
            skip = false;
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='2']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S021 - เพชรเกษม\n2,700.00\nSET');
        });

        it('เช็คลำดับ 3', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='3']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S002 - รัตนาธิเบศร์2\n2,200.00\nSET');
        });

        it('เช็คลำดับ 4', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='4']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S004 - FIL\n2,200.00\nSET');
        });

        it('เช็คลำดับ 5', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='5']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S005 - \n2,200.00\nSET');
        });

        it('เช็คลำดับ 6', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='6']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S016 - ลาดพร้าว\n2,200.00\nSET');
        });

        it('เช็คลำดับ 7', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='7']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S022 - ราชพฤกษ์\n2,200.00\nSET');
        });

        it('เช็คลำดับ 8', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='8']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S023 - หัวหิน\n2,200.00\nSET');
        });

        it('เช็คลำดับ 9', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='9']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S024 - สุวรรณภูมิ\n2,200.00\nSET');
        });

        it('เช็คลำดับ 10', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='10']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S035 - ภูเก็ต(ฉลอง)\n2,200.00\nSET');
        });

        it('เช็คลำดับ 11', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='11']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S010 - สาขาเพลินจิตร\n1,500.00\nSET');
        });

        it('เช็คลำดับ 12', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='12']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S017 - เอกมัย-รามอินทรา\n1,500.00\nSET');
        });

        it('เช็คลำดับ 13', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='13']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S029 - สุราษฎร์ธานี\n1,500.00\nSET');
        });

        it('เช็คลำดับ 14', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='14']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S034 - กระบี่\n1,500.00\nSET');
        });

        it('เช็คลำดับ 15', async function() {
            this.timeout(30000);
            await new Promise(res => setTimeout(res, 2000));
            const elPath = "//android.widget.ScrollView/android.view.View/android.view.View/android.view.View[@index='15']";
            const element = await utils.scrollUntilVisible(
                "xpath",
                elPath,
                driverWd,
            );
            expect(await element.getAttribute("content-desc")).to.equal('S036 - เขาใหญ่\n1,500.00\nSET');
        });


    })

}

module.exports = {
    test,
}
