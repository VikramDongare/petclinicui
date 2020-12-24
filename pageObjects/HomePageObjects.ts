import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class HomePageObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;
    allSubMenu:ElementFinder;
    addNewSubMenu:ElementFinder;
    OwnerList:ElementFinder;
    PageName:ElementFinder;
    AddOwnerButton:ElementFinder;
    veterinarians: ElementFinder;

    constructor() {
        this.HomeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.allSubMenu= element(by.linkText("ALL"));
        this.addNewSubMenu= element(by.linkText("ADD NEW"));
        this.OwnerList=element(by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton=element(by.xpath("//*[@class='btn btn-default']"));
        this.veterinarians= element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
    
    }


}