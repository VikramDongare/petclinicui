"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOwnerPageObject = void 0;
const protractor_1 = require("protractor");
class newOwnerPageObject {
    constructor() {
        this.FirstName = protractor_1.element(protractor_1.by.xpath("//*[@id='firstName']"));
        this.LastName = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.Address = protractor_1.element(protractor_1.by.xpath("//*[@id='address']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//*[@id='city']"));
        this.Telephone = protractor_1.element(protractor_1.by.xpath("//*[@id='telephone']"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Owner')]"));
        this.ownerListTbl = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
        this.ownerTblHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/thead/tr"));
        this.ownerInfo = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Owner Information')]"));
        this.petName = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[1]"));
        this.petBdate = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[2]"));
        this.petType = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[3]"));
    }
}
exports.newOwnerPageObject = newOwnerPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL25ld093bmVyUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsa0JBQWtCO0lBYTNCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFHeEUsQ0FBQztDQUNKO0FBN0JELGdEQTZCQyJ9