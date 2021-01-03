import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class HomePage {

    private home = element(by.css('ul.navbar-nav .glyphicon-home'));
    public pageTitle = element(by.css('app-welcome h1'));
    private ownersTab = element(by.css('ul.navbar-nav li.dropdown:nth-child(2)'));
    public vetTab = element(by.css('ul.navbar-nav li.dropdown:nth-child(3)'));
    private addNewDropdown = element(by.css('[href="/petclinic/owners/add"]'));
    public allVetDropdown = element(by.css('[href="/petclinic/vets"]'));


    public async navigateToHomePage() {
        await this.home.click();
    }
    public async navigateToNewOwnerPage() {
        await this.ownersTab.click();
        await this.addNewDropdown.click();
    }

}