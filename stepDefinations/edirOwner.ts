import { Given, When, Then } from "cucumber";
import { element, by } from "protractor";
import { EditOwnerObj } from "../pageObjects/editOwnerObj";
import { browser } from "protractor";
const expect = global['chai'].expect;
let editOwnObj = new EditOwnerObj();

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

When('User clicks on first owner name to check owner information', async function () {
    let text = await editOwnObj.firstOwner.getText();
    await console.log("text : " + text);
});
When('User clicks on Add Visit button', async function () {
    await editOwnObj.addVisit.click();
});
When('User selects date from calendar', async function () {
    await editOwnObj.date.click();
    let month = "12 2019";
    let date = "20";
    while (true) {
        let currentMonth = await editOwnObj.month.getText();
        await console.log("Month : " + currentMonth);

        if (month == currentMonth) {
            break;
        }
        else {
            await editOwnObj.previousMnth.click();
            //await editOwnObj.nextMnth.click();
        }
    }
    await element(by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
});

