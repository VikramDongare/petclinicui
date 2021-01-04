import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
const expect = require('chai').expect;
const log = require("../logConfig/logging").default;
export class HomePage {

    private home = element(by.css('ul.navbar-nav .glyphicon-home'));
    private pageTitle = element(by.css('app-welcome h1'));
    private ownersTab = element(by.css('ul.navbar-nav li.dropdown:nth-child(2)'));
    private vetTab = element(by.css('ul.navbar-nav li.dropdown:nth-child(3)'));
    private addNewDropdown = element(by.css('[href="/petclinic/owners/add"]'));
    private allVetDropdown = element(by.css('[href="/petclinic/vets"]'));


    public async navigateToHomePage() {
        await this.home.click();
    }
    public async navigateToNewOwnerPage() {
        await this.ownersTab.click();
        await this.addNewDropdown.click();
    }
    public async navigateToVetPage() {
        await this.vetTab.click();
        await this.allVetDropdown.click();
    }
    public async verifyTitle() {
        await this.pageTitle.getText().then(async function (title) {
            await log.debug(title);
            await expect(title).to.equal('Welcome to Petclinic');
        })
    }

}