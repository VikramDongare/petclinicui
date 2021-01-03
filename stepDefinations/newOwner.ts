import { Given, When, Then } from "cucumber";
import { NewOwnerPage } from "../pageObjects/newOwnerPage";
import { HomePage } from "../pageObjects/homePage";
import { browser, ExpectedConditions } from "protractor";
const log = require("../logConfig/logging").default;

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

const expect = require('chai').expect;
let ec = ExpectedConditions;
let home = new HomePage();
let newOwner = new NewOwnerPage();

Given('User is on petclininc home page', async function () {
    await home.navigateToHomePage();
    let title = await home.pageTitle.getText();
    await expect(title).to.equal('Welcome to Petclinic');
});
When('User clicks on owners tab and selects Add New dropdown menu', async function () {
    await home.navigateToNewOwnerPage();
});
When('User enter valid owners detais as{string} {string} {string} {string} {string}', async function (First_Name: any, Last_Name: any, Address: any, City: any, Telephone: any) {
    await newOwner.addNewOwner({ First_Name, Last_Name, Address, City, Telephone });
    await expect(true).to.equal(true);
});
Then('User should be navigate on Owners page and added owner should be saved', async function () {
    await newOwner.navigateToOwnersPage();
    await browser.refresh();
    await newOwner.verifyOwnersEntry();
});

