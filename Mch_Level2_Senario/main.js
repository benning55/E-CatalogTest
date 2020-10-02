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

const testStart = function(opts){
    // electric.electricTest(opts);
    // bathroom.bathroomTest(opts);
    // bedroom.bedroomTest(opts);
    // material.materialTest(opts)
    // doorwindow.doorwindowTest(opts);
    // electricSystem.electricsystemTest(opts);
    // backgroundMaterial.backgroundMaterialTest(opts);
    // furniture.furnitureTest(opts);
    // indoor.indoorTest(opts);
    // kitchen.kitchenTest(opts);
    lamp.lampTest(opts);
};

module.exports = {
    testStart,
}