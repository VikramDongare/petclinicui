import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class NewOwnerPageObject {
    firstName: ElementFinder;
    lastName: ElementFinder;
    address: ElementFinder;
    city: ElementFinder;
    telephone: ElementFinder;
    addOwnerButton: ElementFinder;
    ownerListTbl: ElementFinder;
    ownerTblHeader: ElementFinder;
    ownerInfo: ElementFinder;
    petName: ElementFinder;
    petBdate: ElementFinder;
    petType: ElementFinder;
    constructor() {
        this.firstName = element(by.xpath("//*[@id='firstName']"));
        this.lastName = element(by.xpath("//*[@id='lastName']"));
        this.address = element(by.xpath("//*[@id='address']"));
        this.city = element(by.xpath("//*[@id='city']"));
        this.telephone = element(by.xpath("//*[@id='telephone']"));
        this.addOwnerButton = element(by.xpath("//*[contains(text(),'Add Owner')]"));
        this.ownerListTbl = element(by.xpath("//*[@class='table table-striped']/tbody"));
        this.ownerTblHeader = element(by.xpath("//*[@class='table table-striped']/thead/tr"));
        this.ownerInfo = element(by.xpath("//*[contains(text(),'Owner Information')]"));
        this.petName=element(by.xpath("//*[@class='dl-horizontal']/dd[1]"));
        this.petBdate=element(by.xpath("//*[@class='dl-horizontal']/dd[2]"));
        this.petType=element(by.xpath("//*[@class='dl-horizontal']/dd[3]"));


    }
}
