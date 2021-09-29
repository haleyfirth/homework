import {
    Alert,
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
} from "selenium-webdriver";
import { alertIsPresent } from "selenium-webdriver/lib/until";
import { homeworkobject } from "./homeworkobject";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()
const divvy = new homeworkobject(driver);
   
test("Can open The Internet", async()=>{
        await divvy.navigate()
        console.log ("This is when the web page opens");
    
});

    test("Click on Notification", async()=>{
        //await divvy.navigate();
        await divvy.click(divvy.notifi);
        await divvy.driver.sleep(4000);
        await divvy.click(divvy.notifiMess);
        await divvy.driver.sleep(3000);
         });

    test("Check one, two", async()=>{
        await divvy.navigate();
        await divvy.driver.sleep(2000);
        await divvy.click(divvy.checkBox);
        await divvy.driver.sleep(2000);
    })

    test("Lets do lots o windows", async()=>{
        await divvy.navigate();
        await divvy.driver.sleep(4000)
        await divvy.click(divvy.multiWindow);
        await divvy.driver.sleep(4000);
        await divvy.click(divvy.newWindow);
        await divvy.driver.sleep(4000);
        await divvy.driver.takeScreenshot();
        await divvy.driver.quit()
    });