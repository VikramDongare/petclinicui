import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/loginPageObjects";
import { HomePageObjects } from "../pageObjects/homePageObjects";
import { browser } from "protractor";

const expect = global['chai'].expect;
let homeObj = new HomePageObjects();
let logObj = new LoginPageObjects();

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

Given('User is on Petclinic home page', async function () {
    await logObj.welcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties', async function () {
    let menu1 = await homeObj.homeMenu.getAttribute("innerText");
    await console.log(" First Menu : " + menu1);
    await expect("HOME").to.equal(menu1);

    let menu2 = await homeObj.owners.getAttribute("innerText");
    await console.log(" Second Menu : " + menu2);
    await expect("OWNERS").to.equal(menu2);

    let menu3 = await homeObj.veterinarians.getAttribute("innerText");
    await console.log(" Third Menu : " + menu3);
    await expect("VETERINARIANS").to.equal(menu3);

    let menu4 = await homeObj.petTypes.getAttribute("innerText");
    await console.log(" Fourth Menu : " + menu4);
    await expect("PET TYPES").to.equal(menu4);

    let menu5 = await homeObj.specialties.getAttribute("innerText");
    await console.log(" Fifth Menu : " + menu5);
    await expect("SPECIALTIES").to.equal(menu5);
});
When('User clicks on owners tab', async function () {
    await homeObj.owners.click();
});
Then('ALL and ADD NEW owners sub-menus should be displayed', async function () {
    let firstMenu = await homeObj.allSubMenu.getText();
    await expect("ALL").to.equal(firstMenu);
    await console.log("first drop-down menu is : " + firstMenu);

    let secondMenu = await homeObj.addNewSubMenu.getText();
    await expect("ADD NEW").to.equal(secondMenu);
    await console.log("second drop-down menu is : " + secondMenu);
});
Given('User is on Owners tab', async function () {
    let Owners = await homeObj.owners.getAttribute("innerText");
    await console.log(" Tab name is : " + Owners);
    await expect("OWNERS").to.equal(Owners);
});
When('User clicks on ALL sub-menu', async function () {
    await homeObj.allSubMenu.click();
    await browser.sleep(2000);
});
Then('Owners list should be displayed', async function () {
    let page = await homeObj.pageName.getText();
    await console.log(" page name is : " + page);

});
Given('User is on All Owners list page', async function () {
    await browser.sleep(3000);
    let pagename = await homeObj.pageName.getText();
    await console.log("page name is : " + pagename);
});
When('User clicks on Add Owner button', async function () {
    await homeObj.addOwnerButton.click();
});
Then('Add New Owner page should be displayed', async function () {
    await homeObj.pageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
    let pagename = await homeObj.pageName.getText();
    await console.log("page name is : " + pagename);
});
When('User clicks on ADD NEW sub-menu', async function () {
    await homeObj.addNewSubMenu.click();
});
Then('New Owner page should get displayed', async function () {
    await homeObj.pageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});