import { ExpectedConditions, element, by, browser } from "protractor";
import { NewOwnerPage } from "../pageObjects/newOwnerPage";
import testdata from "../testdata/userData";
const expect = require('chai').expect;
let ec = ExpectedConditions;
const log = require("../logConfig/logging").default;
let newOwner = new NewOwnerPage();

export class OwnerPage {

    private ownerTable = element(by.css('table.table-striped tbody'));
    private ownerInfo = element(by.css('div.xd-container h2:nth-child(1)'));
    private petName = element(by.css('dl.dl-horizontal dd:nth-child(2)'));
    private petBdate = element(by.css('dl.dl-horizontal dd:nth-child(4)'));
    private petType = element(by.css('dl.dl-horizontal dd:nth-child(6)'));
    private pageName = element(by.css('div .xd-container h2'));

    public async verifyPageTitle() {
        await browser.wait(ec.visibilityOf(this.pageName), 20000, 'Taking too long to load');
        let pageTitle = await this.pageName.getText();
        await expect(pageTitle).to.equal('Owners');
    };

    public async selectsExistingOwner() {
        let count = await this.ownerTable.all(by.tagName("tr")).count();
        log.debug("Total Rows in owners Table:- " + count);
        for (let i = 1; i <= count; i++) {
            let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            log.debug(owners);
            if (owners == "Peter McTavish") {
                await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                break;
            }
        }
    }
    public async verifyPetDetails() {
        await this.petName.getText().then(async function (petname) {
            log.debug("PetName is :" + petname);
            await expect(testdata.userData.petDetails.name).to.equal(petname);
        });
        testdata.userData.petDetails.name
        await this.petBdate.getText().then(async function (petBDate) {
            log.debug("Pet Birthdate:" + petBDate);
            await expect(testdata.userData.petDetails.birhDate).to.equal(petBDate);
        });
        await this.petType.getText().then(async function (petTyp) {
            log.debug("Pet Type:" + petTyp);
            await expect(testdata.userData.petDetails.type).to.equal(petTyp);
        });
    }
}