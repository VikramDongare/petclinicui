import { Given, When, Then } from "cucumber";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ExpectedConditions } from "protractor";
import testdata from "../testdata/userData";

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

const expect = global['chai'].expect;
let ec = ExpectedConditions;
let homeObj = new HomePageObjects();
let newOwnerObj = new newOwnerPageObject();

Given('User is on New Owner page', async function () {
    let pagename = await homeObj.PageName.getText();
    await expect('New Owner').to.equal(pagename);
    await console.log("page name is : " + pagename);
});
When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    await newOwnerObj.FirstName.sendKeys(testdata.userData.OwnerData.FirstName);
    await newOwnerObj.LastName.sendKeys(testdata.userData.OwnerData.LastName);
    await newOwnerObj.Address.sendKeys(testdata.userData.OwnerData.Address);
    await newOwnerObj.City.sendKeys(testdata.userData.OwnerData.City);
    await newOwnerObj.Telephone.sendKeys(testdata.userData.OwnerData.Telephone);
});
When('User clicks on Add Owner button on New Owner page', async function () {
    await newOwnerObj.AddOwnerButton.click();
});
Then('User should be navigate on Owners page and added owner should be displayed at last', async function () {
    await browser.wait(ec.visibilityOf(homeObj.PageName), 20000, 'Taking too long to load');
    let pagename = await homeObj.PageName.getText();
    await console.log("page name is : " + pagename);
    await browser.refresh();
    await browser.wait(ec.visibilityOf(newOwnerObj.ownerListTbl), 20000, 'Taking too long to load');
    let ownerDetails = await newOwnerObj.ownerListTbl.all(by.tagName("tr")).last();
    await browser.actions().mouseMove(ownerDetails).perform();
    let ownerName = await ownerDetails.getText();
    await browser.wait(ec.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
    await console.log("Recently added owner details : " + ownerName);
    await expect(testdata.userData.OwnerData.ownerDetails).to.equal(ownerName);

});
When('User clicks on existing owner name', async function () {
    let count = await newOwnerObj.ownerListTbl.all(by.tagName("tr")).count();
    await console.log(count);
    for (let i = 1; i <= count; i++) {
        let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
        console.log(owners);
        if (owners == "Peter McTavish") {
            await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
            break;
        }
    }

});
Then('Pets details like Name,Birth Date,Type should be displayed', async function () {
    await newOwnerObj.petName.getText().then(async function (petName) {
        await console.log("PetName is :" + petName);
        await expect(testdata.userData.petDetails.Name).to.equal(petName);
    });
    testdata.userData.petDetails.Name
    await newOwnerObj.petBdate.getText().then(async function (petBDate) {
        console.log("Pet Birthdate:" + petBDate);
        await expect(testdata.userData.petDetails.BirhDate).to.equal(petBDate);
    });

    await newOwnerObj.petType.getText().then(async function (petType) {
        console.log("Pet Type:" + petType);
        await expect(testdata.userData.petDetails.Type).to.equal(petType);
    });

});