const wd = require("wd");

const textToPress = async function (text, driverWd) {
    var i;
    for(i = 0; i < text.length; i++){
        switch (text[i]) {
            case '0':
                await driverWd.pressKeycode(7);
                break;
            case '1': 
                await driverWd.pressKeycode(8);
                break;
            case '2': 
                await driverWd.pressKeycode(9);
                break;
            case '3': 
                await driverWd.pressKeycode(10);
                break;
            case '4': 
                await driverWd.pressKeycode(11);
                break;
            case '5': 
                await driverWd.pressKeycode(12);
                break;
            case '6': 
                await driverWd.pressKeycode(13);
                break;
            case '7': 
                await driverWd.pressKeycode(14);
                break;
            case '8': 
                await driverWd.pressKeycode(15);
                break;
            case '9': 
                await driverWd.pressKeycode(16);
                break;
        }
    }
}

const scrollUntilVisible = async (
    by,
    elementPath,
    driver,
    co_x,
    horizon,
    co_y,
    scrollInverse
  ) => {
    let touchAction;
    scrollInverse = typeof scrollInverse !== "undefined" ? scrollInverse : false;
    horizon = typeof horizon !== "undefined" ? horizon : false;
    if (!horizon) {
      //vertical
      if (scrollInverse) {
        touchAction = new wd.TouchAction(global.driverWd)
          .longPress({ x: co_x ? co_x : 100, y: 800 })
          .moveTo({ x: co_x ? co_x : 100, y: 1000 })
          .release();
      } else {
        touchAction = new wd.TouchAction(global.driverWd)
          .longPress({ x: co_x ? co_x : 100, y: 1000 })
          .moveTo({ x: co_x ? co_x : 100, y: 800 })
          .release();
      }
    } else {
      //horizontal
      const deviceSize = await driver.getWindowSize();
      let x = deviceSize.width / 2;
   
      touchAction = new wd.TouchAction(global.driverWd)
        .longPress({ x: x, y: co_y })
        .moveTo({ x: x - 200, y: co_y })
        .release();
    }
   
    var element;
    while (true) {
      try {
        element = await driver.element(by, elementPath);
      } catch (ex) {
        await touchAction.perform();
        continue;
      }
      if (element != null) {
        return element;
      }
    }
  };

module.exports = {
    textToPress,
    scrollUntilVisible
}
