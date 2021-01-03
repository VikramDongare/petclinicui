import { element, by } from "protractor";
import { HomePage } from "../pageObjects/homePage";
const log = require("../logConfig/logging").default;
let home = new HomePage();

export class VetPage {

    private vetListTbl = element.all(by.css('table.table-striped'));
    public pageName = element(by.css('div .xd-container h2'));

    public async navigateToVetPage() {
        await home.vetTab.click();
        await home.allVetDropdown.click();
    }
    public async verifyRadiologyCount() {
        let specialties = "radiology";
        let spec = 0;
        await this.vetListTbl.all(by.tagName("tr")).all(by.tagName("td")).each(async function (item) {
            await item!.getText().then(async function (text) {
                await log.debug(text);
                if (text.indexOf(specialties) >= 0) {
                    spec = spec + 1;
                    await log.debug("Total number of", specialties, "=", spec);
                }
            })
        })
    }
}