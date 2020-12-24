import { Given, When, Then } from "cucumber";
import { VetPageObj } from "../pageObjects/vetObj";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { by } from "protractor";

const expect = global['chai'].expect;

let homeObj = new HomePageObjects();
let vetObj = new VetPageObj();

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

Given('User is on homepage and able to see veterinarians menu', async function () {
    let veterinarians = await homeObj.veterinarians.getAttribute("innerText");
    await expect("VETERINARIANS").to.equal(veterinarians);

});
When('User clicks on veterinarians tab', async function () {
    await homeObj.veterinarians.click();
});
Then('ALL and ADD NEW veterinarians sub-menus should be displayed', async function () {
    let firstMenu = await homeObj.allSubMenu.getText();
    await expect("ALL").to.equal(firstMenu);
    await console.log("first drop-down sub-menu is : " + firstMenu);

    let secondMenu = await homeObj.addNewSubMenu.getText();
    await expect("ADD NEW").to.equal(secondMenu);
    await console.log("second drop-down sub-menu is : " + secondMenu);
});
Given('User is on Veterinarians tab', async function () {
    let veterinarians = await homeObj.veterinarians.getAttribute("innerText");
    await console.log(" Tab name is : " + veterinarians);
    await expect("VETERINARIANS").to.equal(veterinarians);
});
Then('Veterinarians list should be displayed', async function () {
    let page = await homeObj.PageName.getText();
    await console.log(" page name is : " + page);
    await expect("Veterinarians").to.equal(page);
});

Given('User is on veterinarians page', async function () {
    let page = await homeObj.PageName.getText();
    await expect("Veterinarians").to.equal(page);
});
Then('User should see total numbers of radiology from veterinarians Specialties', async function () {
    let specialties = "radiology";
    let spec = 0;
    await vetObj.vetListTbl.all(by.tagName("tr")).all(by.tagName("td")).each(async function (item) {
        await item!.getText().then(async function (text) {
            //await console.log(text);
            if (text.indexOf(specialties) >= 0) {
                spec = await spec + 1;
                await console.log("Total number of", specialties, "=", spec);
            }
        });
    });
});