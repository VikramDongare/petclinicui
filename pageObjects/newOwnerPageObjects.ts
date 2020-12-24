import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class newOwnerPageObject {
    FirstName: ElementFinder;
    LastName: ElementFinder;
    Address: ElementFinder;
    City: ElementFinder;
    Telephone: ElementFinder;
    AddOwnerButton: ElementFinder;
    ownerListTbl: ElementFinder;
    ownerTblHeader: ElementFinder;
    ownerInfo: ElementFinder;
    petName: ElementFinder;
    petBdate: ElementFinder;
    petType: ElementFinder;
    constructor() {
        this.FirstName = element(by.xpath("//*[@id='firstName']"));
        this.LastName = element(by.xpath("//*[@id='lastName']"));
        this.Address = element(by.xpath("//*[@id='address']"));
        this.City = element(by.xpath("//*[@id='city']"));
        this.Telephone = element(by.xpath("//*[@id='telephone']"));
        this.AddOwnerButton = element(by.xpath("//*[contains(text(),'Add Owner')]"));
        this.ownerListTbl = element(by.xpath("//*[@class='table table-striped']/tbody"));
        this.ownerTblHeader = element(by.xpath("//*[@class='table table-striped']/thead/tr"));
        this.ownerInfo = element(by.xpath("//*[contains(text(),'Owner Information')]"));
        this.petName=element(by.xpath("//*[@class='dl-horizontal']/dd[1]"));
        this.petBdate=element(by.xpath("//*[@class='dl-horizontal']/dd[2]"));
        this.petType=element(by.xpath("//*[@class='dl-horizontal']/dd[3]"));


    }
}
