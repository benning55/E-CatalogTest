const {
    expect, assert
} = require("chai");
const asserters = require("wd/lib/asserters");
const wd = require("wd");
const { after } = require("mocha");
const utils = require('../Utils/utils');

const test = function (osSpecificOps) {

    describe('การจัดการรถเข็นสินค้า', function(){
        afterEach(async function () {
            if (this.currentTest.state == 'failed') {
                var imgName = (this.currentTest.parent.title).replace(/ /g, "_");
                var screenshotPath = 'C:\\Users\\bmais\\Documents\\SeniorHomepro\\E-CatalogTest\\images\\cart\\'
                await driverWd.takeScreenshot().then(
                    function (image, err) {
                        require('fs').writeFile(screenshotPath + imgName + '.png', image, 'base64', function (err) {});
                    }
                );
                skip = true;
            }
        });
    
    
        describe("initial for cart 1", () => {
    
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
    
        describe('Compare 3 things and confirm', function () {
    
            before(function (){
                skip = false;
            });
            
            it('กดไปที่หมวดเครื่องใช้ไฟฟ้า', async function() {
                this.timeout(50000);
                await new Promise(res => setTimeout(res, 5000));
                await driverWd.waitForElementByXPath("//android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[1]", asserters.isDisplayed, 20000, 100).then(async function(el) {
                    await el.click();
                });
            }); 
    
            it('กดปุ่มหมวดย่อยไปที่เครื่องเตรียมอาหาร', async function() {
                await new Promise(res => setTimeout(res, 2000));
                await driverWd.waitForElementByAccessibilityId("เครื่องเตรียมอาหาร", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('กดเลือกปุ่มเปรียบเทียบสินค้า 3 ชิ้น', async function() {
                this.timeout(50000);
                await new Promise(res => setTimeout(res, 5000));
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1071540')]/child::*", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/child::*", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
    
                const elPath = "//*[contains(@content-desc, '1085128')]/child::*";
                const element = await utils.scrollUntilVisible(
                    "xpath",
                    elPath,
                    driverWd,
                );
    
                await element.click();
            });
    
            it('กดยืนยันการเปรียบเทียบ', async function(){
                await driverWd.waitForElementByAccessibilityId("ยืนยัน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
        });
    
        describe('Add product to cart', function() {
    
            before(function (){
                skip = false;
            });
    
            it('กดสินค้าที่เลือกเพิ่มเข้าตะกร้า1', async function() {
                await driverWd.waitForElementByXPath("(//android.widget.Button[@content-desc='ใส่รถเข็น'])[2]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('กดยืนยันการเปรียบเทียบครั้งที่2', async function(){
                await driverWd.waitForElementByAccessibilityId("ยืนยัน", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
        
            it('กดสินค้าที่เลือกเพิ่มเข้าตะกร้า2', async function() {
                await driverWd.waitForElementByXPath("(//android.widget.Button[@content-desc='ใส่รถเข็น'])[3]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
        })
    
        // จำนวนสินค้ายังไม่เกิน 999
        describe('แก้ไขจำนวนสินค้า', function() {
    
            before(function (){
                skip = false;
            });
    
            it('ไปที่แถบ ตะกร้า', async function() {
                await driverWd.waitForElementByAccessibilityId("2\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('กดเพิ่มให้กับ SKU: 1085163', async function(){
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.view.View[3]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                    await el.click();
                });
            });
    
            it('กดลดให้กับ SKU: 1085163', async function(){
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.view.View[2]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('เทียบจำนวนสินค้ากับเลขบนรูปรถเข็น', async function() {
                this.timeout(50000);
                var QtyFromTextBox1;
                var QtyFromTextBox2;
                var QtyCart;
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    QtyFromTextBox1 = await el.text();
                });
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085128')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {    
                    QtyFromTextBox2 = await el.text();
                });
    
                await driverWd.waitForElementByAccessibilityId("3\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    QtyCart = await el.getAttribute("content-desc");
                });
    
                expect(parseInt(QtyCart[0])).to.equal(parseInt(QtyFromTextBox1)+parseInt(QtyFromTextBox2));
            });
    
            it('เทียบจำนวนสินค้ากับราคา', async function(){
                this.timeout(50000);
                var priceOne;
                var priceTwo;
                var totalPrice;
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    priceOne = await el.text();
                });
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085128')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {    
                    priceTwo = await el.text();
                });
    
                await driverWd.waitForElementByAccessibilityId("2,397", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    totalPrice = await el.getAttribute("content-desc");
                });
    
                expect(totalPrice.replace(',', '')).to.equal(((parseInt(priceOne)*799) + (parseInt(priceTwo)*799)).toString());
            });
    
        });
    
        // จำนวนสินค้าเกิน 999
        describe('แก้ไขจำนวนสินค้าเกิน 999', function(){
    
            before(function (){
                skip = false;
            });
    
            it('กดเพิ่มสินค้าให้เกิน 999', async function() {
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
                await new Promise(res => setTimeout(res, 1500));
                utils.textToPress('999', driverWd);
                await new Promise(res => setTimeout(res, 2500));
                await driverWd.pressKeycode(66);
            });
    
            it('เทียบจำนวนสินค้ากับเลขบนรูปรถเข็นว่าเป็น 999+ ไหม', async function() {
                var Qty;
                await new Promise(res => setTimeout(res, 2000));
                await driverWd.waitForElementByAccessibilityId("999+\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    Qty = await el.getAttribute("content-desc");
                });
    
                expect(Qty).to.include('999+')
            });
    
            it('เทียบจำนวนสินค้ากับราคาของ 999 ชิ้น', async function(){
                this.timeout(50000);
                var priceOne;
                var priceTwo;
                var totalPrice;
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    priceOne = await el.text();
                });
    
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085128')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {    
                    priceTwo = await el.text();
                });
    
                await driverWd.waitForElementByAccessibilityId("2,397,000", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    totalPrice = await el.getAttribute("content-desc");
                });
    
                expect((totalPrice.replace(',', '')).replace(',', '')).to.equal(((parseInt(priceOne)*799) + (parseInt(priceTwo)*799)).toString());
            });
        });
    
        // ลบสินค้า
        describe('Delete some product in cart', function(){
    
            before(function (){
                skip = false;
            });
    
            it('ลบสินค้าจากตะกร้า', async function(){
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085163')]/android.view.View[1]", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    await el.click();
                });
            });
    
            it('เทียบจำนวนสินค้ากับเลขบนรูปรถเข็นลดลงจากที่ลบหรือไม่', async function() {
                var Qty;
                await new Promise(res => setTimeout(res, 2000));
                await driverWd.waitForElementByAccessibilityId("1\nรถเข็นสินค้า\nแท็บที่ 2 จาก 4", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    Qty = await el.getAttribute("content-desc");
                });
    
                expect(Qty[0]).to.equal('1');
            });
    
            it('เทียบราคาสินค้าว่าลดลงหรือไม่', async function(){
                this.timeout(50000);
                var priceOne;
                var totalPrice;
                await driverWd.waitForElementByXPath("//*[contains(@content-desc, '1085128')]/android.widget.EditText", asserters.isDisplayed, 2000, 100).then(async function(el) {    
                    priceOne = await el.text();
                });
    
                await driverWd.waitForElementByAccessibilityId("799", asserters.isDisplayed, 2000, 100).then(async function(el) {
                    totalPrice = await el.getAttribute("content-desc");
                });
    
                expect(totalPrice).to.equal((parseInt(priceOne)*799).toString());
            });
        });
    
        describe('Close Session', function () {
            
            before(function (){
                skip = false;
            });
            
            it('Close session', async function() {
                await driverWd.quit();
            });
    
        });
    });
}

module.exports = {
    test,
}