"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetList = void 0;
const protractor_1 = require("protractor");
class VetList {
    constructor() {
        this.vetListPgText = protractor_1.element(protractor_1.by.css("h2:nth-child(1)")); //Text
        this.vetTblRow = protractor_1.element.all(protractor_1.by.css(".table table-striped tr"));
        this.vetListTable = protractor_1.element(protractor_1.by.id("vets")); //Table
        this.vetListTableData = protractor_1.element.all(protractor_1.by.id("vets")); //Table data array
        this.editVetBtn = protractor_1.element(protractor_1.by.partialButtonText("Edit Vet"));
        this.delVetBtn = protractor_1.element(protractor_1.by.partialButtonText("Delete Vet"));
    }
    getRowCount() {
        return this.vetListTableData.all(protractor_1.by.css("tr")).count().then(function (num) { return num.valueOf(); });
    }
    getColCount() {
        return this.vetListTableData.all(protractor_1.by.css("th")).count();
    }
}
exports.VetList = VetList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0QWxsUGcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9WZXRBbGxQZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFFNUUsTUFBYSxPQUFPO0lBUWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRyxJQUFHLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FHSjtBQTFCRCwwQkEwQkMifQ==