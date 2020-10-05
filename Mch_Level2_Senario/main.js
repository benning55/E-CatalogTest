const electric = require('./electric');
const bathroom = require('./bathroom');
const bedroom = require('./bedroom');
const material = require('./material');
const doorwindow = require('./doorwindow');
const electricSystem = require('./electricsystem');
const backgroundMaterial = require('./backgroundmaterial');
const furniture = require('./furniture');
const indoor = require('./indoor');
const kitchen = require('./kitchen');
const lamp = require('./lamp');
const garden = require('./garden');
const plumbing = require('./plumbing');
const sport = require('./sport');
const handtool = require('./handtool');
const tv = require('./tv');

const testMch2Cat = function(opts){
    electric.electricTest(opts);
    bathroom.bathroomTest(opts);
    bedroom.bedroomTest(opts);
    material.materialTest(opts)
    doorwindow.doorwindowTest(opts);
    electricSystem.electricsystemTest(opts);
    backgroundMaterial.backgroundMaterialTest(opts);
    furniture.furnitureTest(opts);
    indoor.indoorTest(opts);
    kitchen.kitchenTest(opts);
    lamp.lampTest(opts);
    garden.gardenTest(opts)
    plumbing.plumbingTest(opts);
    sport.sportTest(opts);
    handtool.handToolTest(opts);
    tv.tvTest(opts)
};

const testMch2ToMch1 = function(opts){
    electric.electric2Mch1Test(opts);
    bathroom.bathroom2Mch1Test(opts);
    bedroom.bedroom2Mch1Test(opts);
    material.material2Mch1Test(opts);
    doorwindow.doorwindow2Mch1Test(opts);
    electricSystem.electricsystem2Mch1Test(opts);
    backgroundMaterial.backgroundMaterial2Mch1Test(opts);
    furniture.furniture2Mch1Test(opts);
    indoor.indoor2Mch1Test(opts)
    kitchen.kitchen2Mch1Test(opts)
    lamp.lamp2Mch1Test(opts);
    garden.garden2Mch1Test(opts);
    plumbing.plumbing2Mch1Test(opts);
    sport.sport2Mch1Test(opts);
    handtool.handTool2Mch1Test(opts);
    tv.tv2Mch1Test(opts);
}

module.exports = {
    testMch2Cat,
    testMch2ToMch1
}