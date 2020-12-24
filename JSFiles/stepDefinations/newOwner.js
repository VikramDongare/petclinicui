"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const newOwnerPageObjects_1 = require("../pageObjects/newOwnerPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const userData_1 = require("../testdata/userData");
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
const expect = global['chai'].expect;
let ec = protractor_1.ExpectedConditions;
let homeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new newOwnerPageObjects_1.newOwnerPageObject();
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield homeObj.PageName.getText();
        yield expect('New Owner').to.equal(pagename);
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User enter valid First Name, Last Name, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.FirstName.sendKeys(userData_1.default.userData.OwnerData.FirstName);
        yield newOwnerObj.LastName.sendKeys(userData_1.default.userData.OwnerData.LastName);
        yield newOwnerObj.Address.sendKeys(userData_1.default.userData.OwnerData.Address);
        yield newOwnerObj.City.sendKeys(userData_1.default.userData.OwnerData.City);
        yield newOwnerObj.Telephone.sendKeys(userData_1.default.userData.OwnerData.Telephone);
    });
});
cucumber_1.When('User clicks on Add Owner button on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.AddOwnerButton.click();
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(ec.visibilityOf(homeObj.PageName), 20000, 'Taking too long to load');
        let pagename = yield homeObj.PageName.getText();
        yield console.log("page name is : " + pagename);
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.wait(ec.visibilityOf(newOwnerObj.ownerListTbl), 20000, 'Taking too long to load');
        let ownerDetails = yield newOwnerObj.ownerListTbl.all(protractor_1.by.tagName("tr")).last();
        yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
        let ownerName = yield ownerDetails.getText();
        yield protractor_1.browser.wait(ec.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
        yield console.log("Recently added owner details : " + ownerName);
        yield expect(userData_1.default.userData.OwnerData.ownerDetails).to.equal(ownerName);
    });
});
cucumber_1.When('User clicks on existing owner name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let count = yield newOwnerObj.ownerListTbl.all(protractor_1.by.tagName("tr")).count();
        yield console.log(count);
        for (let i = 1; i <= count; i++) {
            let owners = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            console.log(owners);
            if (owners == "Peter McTavish") {
                yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                break;
            }
        }
    });
});
cucumber_1.Then('Pets details like Name,Birth Date,Type should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.petName.getText().then(function (petName) {
            return __awaiter(this, void 0, void 0, function* () {
                yield console.log("PetName is :" + petName);
                yield expect(userData_1.default.userData.petDetails.Name).to.equal(petName);
            });
        });
        userData_1.default.userData.petDetails.Name;
        yield newOwnerObj.petBdate.getText().then(function (petBDate) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("Pet Birthdate:" + petBDate);
                yield expect(userData_1.default.userData.petDetails.BirhDate).to.equal(petBDate);
            });
        });
        yield newOwnerObj.petType.getText().then(function (petType) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("Pet Type:" + petType);
                yield expect(userData_1.default.userData.petDetails.Type).to.equal(petType);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNEVBQXdFO0FBQ3hFLG9FQUFpRTtBQUNqRSwyQ0FBc0U7QUFDdEUsbURBQTRDO0FBRTVDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyQyxJQUFJLEVBQUUsR0FBRywrQkFBa0IsQ0FBQztBQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUM7QUFFM0MsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRTs7UUFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsa0VBQWtFLEVBQUU7O1FBQ3JFLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxD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