"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageObjects = void 0;
const protractor_1 = require("protractor");
class HomePageObjects {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.allSubMenu = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.addNewSubMenu = protractor_1.element(protractor_1.by.linkText("ADD NEW"));
        this.OwnerList = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default']"));
        this.veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
    }
}
exports.HomePageObjects = HomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvSG9tZVBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLGVBQWU7SUFZeEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztJQUVsRixDQUFDO0NBR0o7QUEzQkQsMENBMkJDIn0=