const wdio = require("webdriverio");
// const assert = require('assert');
const {
    byValueKey,
    byText,
    byType
} = require('appium-flutter-finder');
const expect = require('chai').expect;

const mchDetailTxt = function (opts) {
    describe('ดูรายละเอียดสินค้าเบื้องต้น', function(){

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
            await driver.execute('flutter:scroll', byType('ListView'), {
                dx: 10,
                dy: -550,
                durationMilliseconds: 120,
                frequency: 60
            });
            await driver.elementClick(byValueKey('catThree13'));
            // totalbtn = byValueKey('totalSubBtn0');
            // await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.execute('flutter:scrollIntoView', byValueKey('lstViewVertical'), byValueKey('totalSubBtn2'), {alignment: 0.0});
            await driver.elementClick(byValueKey('totalSubBtn2'));
            await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn2'));
            await driver.elementClick(byValueKey('mchDetail0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
        });

        describe('กดดูรายละเอียดสินค้าแบบราคาธรรมดา', function () {
    
            it('ชื่อแบรนสินค้า', async function () {
                this.timeout(300 * 10000);
                var brandName = findText(driver, 'productBrand');
                if(brandName) {
                    expect(await driver.getElementText(byValueKey('productBrand'))).to.equal('เสี่ยวมี่')
                }else {
                    throw new Error('There is no brand name');
                }
            });
    
            it('ชื่อสินค้า', async function () {
                this.timeout(300 * 10000);
                // await driver.elementClick(byValueKey('mchDetail0'));
                // await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
                var productName = findText(driver, 'productName');
                if(productName) {
                    expect(await driver.getElementText(byValueKey('productName'))).to.equal('นาฬิกาอัจฉริยะ XIAOMI MI BAND 3');
                }else {
                    throw new Error('There is no product name');
                }
            });
    
            it('ชื่อรหัสสินค้า', async function (){
                this.timeout(300*1000);
                var idName = findText(driver, 'productId');
                if(idName) {
                    expect(await driver.getElementText(byValueKey('productId'))).to.equal('SKU : 1111925');
                }
                else {
                    throw new Error('There is no product Id');
                }
            })
    
            it('ราคาสินค้าแบบธรรมดา', async function (){
                this.timeout(300*1000);
                var normalPrice = findText(driver, 'normalPrice');
                if(normalPrice) {
                    expect(await driver.getElementText(byValueKey('normalPrice'))).to.equal('1,190')
                }
                else {
                    throw new Error('There is no normal price');
                }
            })
    
        });

        describe('กดดูรายละเอียดสินค้าแบบราคาโปรโมชั่น', function () {
    
            it('ชื่อแบรนสินค้า', async function () {
                this.timeout(300 * 10000);
                await driver.elementClick(byValueKey('backIcon'));
                await driver.elementClick(byValueKey('backIcon'));
                await driver.elementClick(byValueKey('backIcon'));
                await driver.execute('flutter:scroll', byType('ListView'), {
                    dx: 10,
                    dy: -550,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                await driver.elementClick(byValueKey('catThree13'));
                await driver.execute('flutter:scrollIntoView', byValueKey('lstViewVertical'), byValueKey('totalSubBtn2'), {alignment: 0.0});
                await driver.elementClick(byValueKey('totalSubBtn0'));
                await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn0'));
                await driver.elementClick(byValueKey('mchDetail0'));
                await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
                var brandName = findText(driver, 'productBrand');
                if(brandName) {
                    expect(await driver.getElementText(byValueKey('productBrand'))).to.equal('KIDSCLUB')
                }else {
                    throw new Error('There is no brand name');
                }
            });
    
            it('ชื่อสินค้า', async function () {
                this.timeout(300 * 10000);
                // await driver.elementClick(byValueKey('mchDetail0'));
                // await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
                var productName = findText(driver, 'productName');
                if(productName) {
                    expect(await driver.getElementText(byValueKey('productName'))).to.equal('เครื่องคาดิโอ KIDSCLUB 557012413');
                }else {
                    throw new Error('There is no product name');
                }
            });
    
            it('ชื่อรหัสสินค้า', async function (){
                this.timeout(300*1000);
                var idName = findText(driver, 'productId');
                if(idName) {
                    expect(await driver.getElementText(byValueKey('productId'))).to.equal('SKU : 1079402');
                }
                else {
                    throw new Error('There is no product Id');
                }
            })
    
            it('ราคาสินค้าธรรมดา', async function (){
                this.timeout(300*1000);
                var normalPrice = findText(driver, 'normalPrice');
                if(normalPrice) {
                    expect(await driver.getElementText(byValueKey('normalPrice'))).to.equal('4,000')
                }
                else {
                    throw new Error('There is no normal price');
                }
            });
    
            it('ราคาสินค้าพิเศษ', async function (){
                this.timeout(300*1000);
                var specialPrice = findText(driver, 'specialPrice');
                if(specialPrice) {
                    expect(await driver.getElementText(byValueKey('specialPrice'))).to.equal('2,500')
                }
                else {
                    throw new Error('There is no special price');
                }
            });
    
            it('กดเปรียบเทียบ', async function(){
                this.timeout(300*1000);
                await driver.elementClick(byValueKey('compareBtn'));
                expect(await driver.getElementText(byValueKey('compare1'))).to.include('1/3');  
            })
    
        });

        after(function () {
            driver.deleteSession();
        });
    });

};

const mchDetailTab = function(opts) {

    describe('กดดูแทบ 3 แทบ', function () {

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
            await driver.elementClick(byValueKey('catThree4'));
            // totalbtn = byValueKey('totalSubBtn0');
            // await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.elementClick(byText('ประตูภายนอก'));
            await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn0'));
            await driver.elementClick(byValueKey('mchDetail0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
            await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                dx: 10,
                dy: -200,
                durationMilliseconds: 120,
                frequency: 60
            });
        });

        describe('กดดูแทบรายละเอียดสินค้า', function() {
            it('คุณสมบัติ', async function () {
                this.timeout(2000);
                await driver.elementClick(byText('รายละเอียดสินค้า'))
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('proProp0'))).to.equal('ประตูบานฉีดเกล็ดล่างไม่เจาะ พร้อมวงกบ');
                expect(await driver.getElementText(byValueKey('proProp1'))).to.equal('ผลิตจาก PVC  คุณภาพดี แข็งแรง ทนทาน');
                expect(await driver.getElementText(byValueKey('proProp2'))).to.equal('ปลอดภัยจากปลวก มอด และแมลงกัดกิน');
                expect(await driver.getElementText(byValueKey('proProp3'))).to.equal('ทนต่อความชื้น ไม่ลามไฟ และไม่บิดงอ');
            });
    
            it('วิธีใช้งาน', async function () {
                this.timeout(2000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('proHowto0'))).to.equal('ใช้สำหรับประกอบ ติดตั้ง ตกแต่งเป็นทางเข้า-ออก ห้องภายในอาคาร');
                expect(await driver.getElementText(byValueKey('proHowto1'))).to.equal('ติดตั้งด้วยบานพับให้เหมาะกับน้ำหนักประตู ในตำแหน่งที่ถูกต้อง');
            });
    
            it('คำแนะนำ', async function () {
                this.timeout(3000);
                await driver.elementClick(byValueKey('moreDetail'));
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('proRecom0'))).to.equal('ศึกษาวิธีติดตั้งและวัดขนาด ก่อนการตกแต่งและติดตั้งใช้งานจริง');
                expect(await driver.getElementText(byValueKey('proRecom1'))).to.equal('ควรติดตั้งโดยช่างที่ชำนาญ');
            });
            
            it('ข้อควรระวัง', async function () {
                this.timeout(3000);
                await driver.elementClick(byValueKey('moreDetail'));
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('proSafety0'))).to.equal('ระวัง ห้ามกระแทก อาจชำรุดเสียหายและเป็นอันตรายต่อผู้ใช้');
                expect(await driver.getElementText(byValueKey('proSafety1'))).to.equal('สำหรับใช้ภายในอาคารเท่านั้น หลีกเลี่ยงการถูกแสงแดด และเปลวไฟ');
                expect(await driver.getElementText(byValueKey('proSafety2'))).to.equal('หลีกเลี่ยงสารเคมี ทำความสะอาดโดยใช้ผ้าชุบน้ำหมาดๆ');
                expect(await driver.getElementText(byValueKey('proSafety3'))).to.equal('ห้ามทาสีทับ เนื่องจากจะเกิดปฎิกิริยาเคมี ทำให้สินค้าเสียหาย');
            });
        });
        
        describe('กดดูแทบข้อมูลจำเพาะ', function() {
            it('Brand', async function () {
                this.timeout(5000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: 500,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                await driver.elementClick(byText('ข้อมูลจำเพาะ'));
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('data0'))).to.equal('ASIA')
            });

            it('Color', async function(){
                expect(await driver.getElementText(byValueKey('data1'))).to.equal('ครีม')
            });

            it('ประเภทหน้าบาน', async function(){
                expect(await driver.getElementText(byValueKey('data2'))).to.equal('เกล็ด')
            });

            it('ผิวเคลือบ', async function(){
                expect(await driver.getElementText(byValueKey('data3'))).to.equal('ไม่เคลือบ UV')
            });

            it('การขึ้นรูป', async function(){
                expect(await driver.getElementText(byValueKey('data4'))).to.equal('บานฉีด')
            });

            it('ลายหน้าบาน', async function(){
                expect(await driver.getElementText(byValueKey('data5'))).to.equal('เกล็ดล่าง')
            });

            it('Material', async function(){
                expect(await driver.getElementText(byValueKey('data6'))).to.equal('PVC')
            });

            it('Size', async function(){
                expect(await driver.getElementText(byValueKey('data7'))).to.equal('70X180CM')
            });
    
        });

        describe('กดดูแทบโปรโมชัน', function() {

            it('Promotion ID CA18000189', async function () {
                this.timeout(5000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: 400,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                await driver.elementClick(byText('โปรโมชัน'));
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -200,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId0'))).to.equal('CA18000189')
            });

            it('Promotion ID CA18000198', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId1'))).to.equal('CA18000198')
            });

            it('Promotion ID CA18000246', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId2'))).to.equal('CA18000246')
            });

            it('Promotion ID CA18000249', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId3'))).to.equal('CA18000249')
            });

            it('Promotion ID CO13000216', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId4'))).to.equal('CO13000216')
            });

            it('Promotion ID CO18000204', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId5'))).to.equal('CO18000204')
            });

            it('Promotion ID CO18000289', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId6'))).to.equal('CO18000289')
            });

            it('Promotion ID CO19000125', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId7'))).to.equal('CO19000125')
            });

            it('Promotion ID TD18000205', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId8'))).to.equal('TD18000205')
            });

            it('Promotion ID TD20000044', async function () {
                this.timeout(3000);
                await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                    dx: 10,
                    dy: -100,
                    durationMilliseconds: 120,
                    frequency: 60
                });
                expect(await driver.getElementText(byValueKey('promotionId9'))).to.equal('TD20000044')
            });
    
        });


        after(function () {
            driver.deleteSession();
        });

    });
}


const mchDetailStock = function(opts) {

    describe('กดดู Stock', function () {

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
            await driver.elementClick(byValueKey('catThree4'));
            // totalbtn = byValueKey('totalSubBtn0');
            // await driver.elementClick(byText('เครื่องยกน้ำหนัก'));
            await driver.elementClick(byText('ประตูภายนอก'));
            await driver.execute('flutter:waitForAbsent', byValueKey('totalSubBtn0'));
            await driver.elementClick(byValueKey('mchDetail0'));
            await driver.execute('flutter:waitForAbsent', byValueKey('mchDetail0'));
            await driver.execute('flutter:scroll', byType('CustomScrollView'), {
                dx: 10,
                dy: -900,
                durationMilliseconds: 120,
                frequency: 60
            });
            await driver.elementClick(byValueKey('stockBtn'));
            await driver.execute('flutter:waitForAbsent', byValueKey('stockBtn'));
        });

        describe('กดปุ่มสต็อกดูลำดับการเรียง Store', function() {
            it('เช็ค เริ่มจาก Store ที่ Login (S015)', async function () {
                this.timeout(2000);
                expect(await driver.getElementText(byValueKey('storeS015'))).to.equal('S015 - ประชาชื่น')
            });

            it('เช็ค DC01', async function () {
                this.timeout(2000);
                expect(await driver.getElementText(byValueKey('storeDc01'))).to.equal('DC01 - DC1')
            });

            it('เช็ค DC02', async function () {
                this.timeout(2000);
                expect(await driver.getElementText(byValueKey('storeDc02'))).to.equal('DC02 - DC2')
            });
        });

        describe('กดปุ่ม more เพื่อดูรายการเพิ่มและการเรียงจำนวนของ', function() {

            it('กดปุ่มและเช็คเรียงจำนวน มาก -> น้อย', async function () {
                this.timeout(10000*10);
                await driver.elementClick(byValueKey('moreStockBtn'));
                var listQty = [];
                var i;
                for(i = 0; i < 16; i++){
                    driver.execute('flutter:scrollUntilVisible', byType('SingleChildScrollView'), {
                        item: byValueKey("store"+i.toString()+"Qty"),
                        dxScroll: 10,
                        dyScroll: -100
                    });
                    catelogQty = byValueKey("store"+i.toString()+"Qty");
                    listQty[i] = parseFloat(await driver.getElementText(catelogQty));
                }
                var listSorted = [];
                listSorted = listQty.sort(function(a, b){return b-a});
                expect(listQty).to.equal(listSorted);
            });

        });


        after(function () {
            // driver.deleteSession();
        });

    });
}

function findText(driver, txt) {
    try {
        driver.execute('flutter:waitFor', byValueKey(txt));
        return true;
    } catch (e) {
        return false;
    }
}


module.exports = {
    mchDetailTxt,
    mchDetailTab,
    mchDetailStock
}