const { Builder, By, Key, until } = require("selenium-webdriver");
const login = async () => {
  try {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3002");
    await driver
      .findElement(By.xpath("/html/body/div/main/div/main/div/a/button"))
      .click();
    if (
      driver.findElement(By.name("username")).sendKeys("admin", Key.RETURN) &&
      driver.findElement(By.name("password")).sendKeys("1", Key.RETURN)
    ) {
      console.log("Passed!!");
    } else {
      console.log("Failed");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
};
login();
