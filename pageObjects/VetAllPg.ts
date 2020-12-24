import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class VetList {
    vetListPgText: ElementFinder;
    vetListTable: ElementFinder;
    vetListTableData: ElementArrayFinder;
    editVetBtn: ElementFinder;    
    delVetBtn: ElementFinder;
    vetTblRow:ElementArrayFinder;   

    constructor() {       
        this.vetListPgText = element(by.css("h2:nth-child(1)")); //Text
        this.vetTblRow = element.all(by.css(".table table-striped tr"));
        this.vetListTable = element(by.id("vets")); //Table
        this.vetListTableData = element.all(by.id("vets")); //Table data array
        this.editVetBtn = element(by.partialButtonText("Edit Vet"));
        this.delVetBtn = element(by.partialButtonText("Delete Vet"));
    }

    public getRowCount(){
        return this.vetListTableData.all(by.css("tr")).count().then(function(num){ return num.valueOf();});
    }

    public getColCount(){
        return this.vetListTableData.all(by.css("th")).count();
    }

    
}