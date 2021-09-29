import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
  export class homeworkobject {
      driver: WebDriver 
      internet: string = "https://the-internet.herokuapp.com/";
      notifi: By = By.xpath('//a[text()="Notification Messages"]');
      notifiMess: By = By.xpath('//a[text()="Click here"]');
      //restartMess: By = By.xpath('//a[@id="restart-ad"]');
      close: By = By.xpath('//a[text()="Close"]');
      floatMenu: By = By.xpath('//a[@href="https://the-internet.herokuapp.com/floating_menu"]');
      multiWindow: By = By.xpath('//a[text()="Multiple Windows"]');
      newWindow: By = By.xpath('//a[text()="Click Here"]');
      checkBox: By = By.xpath('//a[text()="Checkboxes"]');
      logIn: By = By.xpath('//a[text()="Form Authentication"]');
      //basicAuth: By = By.xpath('//a[text()="Basic Auth"]');
      userName: By = By.xpath('//input[@name="username"]');
      password: By = By.xpath('//input[@name="password"]');
      constructor(driver: WebDriver){
          this.driver = driver
            
      };
    async sendKey(elementBy: By, keys,){
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async navigate(){
        await this.driver.get(this.internet);
    };
    async click(elementBy: By){
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
    
  }