import { Given, When, Then } from "cucumber";
import { OwnerPage } from "../pageObjects/existingOwnPage";
const log = require("../logConfig/logging").default;
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

const expect = require('chai').expect;
let owner = new OwnerPage();

Given('User is on Owners page', async function () {
    await owner.verifyPageTitle();
});
When('User selects an existing Owner', async function () {
    await owner.selectsExistingOwner();
});
Then('User should be able to see pet details for existing Owner', async function () {
    await owner.verifyPetDetails();
});