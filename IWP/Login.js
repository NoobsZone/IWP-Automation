const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // await driver.get('http://www.google.com/ncr');
    await driver.get('http://localhost:3002/');
    await driver.findElement(By.xpath('/html/body/div/main/div/main/div/a/button')).click();
    await driver.findElement(By.name('username')).sendKeys('admin',Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('1',Key.RETURN);
    await driver.refresh();
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})();