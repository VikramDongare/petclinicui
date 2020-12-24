import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class VetPageObj {

    vetListTbl: ElementArrayFinder;

    constructor() {
        this.vetListTbl = element.all(by.id("vets"));
    }
}