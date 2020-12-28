import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class LoginPageObjects {
    welcomeMsg: ElementFinder;

    constructor() {
        this.welcomeMsg = element(by.xpath("//*[contains(text(),'Welcome to Petclinic')]"));

    }
}