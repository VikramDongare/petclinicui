import { Config, browser } from "protractor";
let reporter = require('cucumber-html-reporter');
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let ReportDate = yyyy + '-' + mm + '-' + dd;


export let config: Config = {

  allScriptsTimeout: 50000,
  getPageTimeout: 50000,
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities:
  {
    browserName: 'chrome',
    chromeOptions: {
      args: ["--incognito"],
    }
  },
  specs: [
    '../features/newOwner.feature',
    '../features/existingOwner.feature',
    '../features/veterinarians.feature'
  ],

  cucumberOpts: {
    // require step definitions
    //tags: "@POM",
    format: 'json:./cucumberreport.json',
    strict: true,

    require: [
      './stepDefinations/*.js',

    ]
  },

  onPrepare: () => {
    browser.ignoreSynchronization = false;
    browser.driver.manage().window().maximize();
  },
  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      screenshotsDirectory: 'screenshots/',
      storeScreenshots: true,
      output: './Reports/' + ReportDate + '.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.1.0",
        "Test Environment": "test",
        "Browser": "Chrome  87.0.4280.88",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Web App"
      }
    };
    reporter.generate(options);
  }
};
