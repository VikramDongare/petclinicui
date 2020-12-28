import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class HomePageObjects {
    homeMenu: ElementFinder;
    owners: ElementFinder;
    petTypes: ElementFinder;
    specialties: ElementFinder;
    allSubMenu: ElementFinder;
    addNewSubMenu: ElementFinder;
    ownerList: ElementFinder;
    pageName: ElementFinder;
    addOwnerButton: ElementFinder;
    veterinarians: ElementFinder;

    constructor() {
        this.homeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.petTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.allSubMenu = element(by.linkText("ALL"));
        this.addNewSubMenu = element(by.linkText("ADD NEW"));
        this.ownerList = element(by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.pageName = element(by.xpath("//*[@class='container xd-container']/h2"));
        this.addOwnerButton = element(by.xpath("//*[@class='btn btn-default']"));
        this.veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));

    }


}