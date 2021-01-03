import { ExpectedConditions, element, by, browser } from "protractor";
import testdata from "../testdata/userData";
const expect = require('chai').expect;
let ec = ExpectedConditions;
const log = require("../logConfig/logging").default;

export class NewOwnerPage {
    private firstName = element(by.id('firstName'));
    private lastName = element(by.id('lastName'));
    private address = element(by.id('address'));
    private city = element(by.id('city'));
    private telephone = element(by.id('telephone'));
    private addOwnerBtn = element(by.buttonText('Add Owner'));
    private pageName = element(by.css('div .xd-container h2'));
    private ownerListTbl = element(by.css('table.table-striped tbody'));

   public async addNewOwner({ First_Name, Last_Name, Address, City, Telephone }: { First_Name: any; Last_Name: any; Address: any; City: any; Telephone: any; }) {
        await this.firstName.sendKeys(First_Name);
        await this.lastName.sendKeys(Last_Name);
        await this.address.sendKeys(Address);
        await this.city.sendKeys(City);
        await this.telephone.sendKeys(Telephone);
        await this.addOwnerBtn.click();
    };
    public async navigateToOwnersPage() {
        await browser.wait(ec.visibilityOf(this.pageName), 20000, 'Taking too long to load');
        let pagename = await this.pageName.getText();
        await expect(pagename).to.equal('Owners');
    }
    public async verifyOwnersEntry() {
        await browser.wait(ec.visibilityOf(this.ownerListTbl), 20000, 'Taking too long to load');
        let ownerDetails = await this.ownerListTbl.all(by.tagName("tr")).last();
        await browser.actions().mouseMove(ownerDetails).perform();
        let ownerName = await ownerDetails.getText();
        await browser.wait(ec.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
        log.debug("Owner details are :- " + ownerName);
        await expect(testdata.userData.OwnerData.ownerDetails).to.equal(ownerName);
    }

}

