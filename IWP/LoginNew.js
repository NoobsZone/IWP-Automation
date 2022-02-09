const { Builder, By, Key, until } = require("selenium-webdriver");

// (async function start() {
//   login();
// })();

const login = async () => {
  try {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3002/");
    await driver
      .findElement(By.xpath("/html/body/div/main/div/main/div/a/button"))
      .click();
    await driver.findElement(By.name("username")).sendKeys("admin", Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("1", Key.RETURN);
  } catch (error) {
    console.log(error);
  } finally {
    // await driver.quit();
  }
};
login();
