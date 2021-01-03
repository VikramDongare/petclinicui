import { Before, After, Status, BeforeAll } from "cucumber";
import { browser } from "protractor";
import testdata from "../testdata/userData";
import { HookScenarioResult } from 'cucumber';

BeforeAll(async function () {
  // This hook will be executed beforeAll scenarios
  await browser.get(testdata.appUrl);
});

Before(async function () {
  // This hook will be executed before scenarios
  //browser.manage().window().maximize();  given in conf file 
});

After(async function (scenario) {
  //This hook will be executed after each scenarios
  if (scenario.result.status =="failed") {
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png")
  }
});

// After(async function (scenario: any) {
//   if (scenario.result.status = Status.Failed) {
//     const screenshot = await browser.takeScreenshot();
//     //const img = Buffer.alloc(screenShot.length, screenShot, 'base64');
//     scenario.attach(screenshot, "image/png");
//   }
// });

