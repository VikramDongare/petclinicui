import { Given, When, Then } from "cucumber";
import { VetPage } from "../pageObjects/vetPage";
import { HomePage } from "../pageObjects/homePage";
import { ExpectedConditions, by, browser } from "protractor";
const expect = require('chai').expect;
let ec = ExpectedConditions;
let vets = new VetPage();
let home = new HomePage();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

Given('User is on veterinarians page', async function () {
    await home.navigateToVetPage();
    await browser.wait(ec.visibilityOf(vets.pageName), 20000, 'Taking too long to load');
    let pageTitle = await vets.pageName.getText();
    await expect(pageTitle).to.equal('Veterinarians');
});
Then('User should see total numbers of radiology from veterinarians Specialties', async function () {
    await vets.verifyRadiologyCount();
});
