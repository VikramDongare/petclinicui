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
const newOwnerPage_1 = require("../pageObjects/newOwnerPage");
const homePage_1 = require("../pageObjects/homePage");
const protractor_1 = require("protractor");
const log = require("../logConfig/logging").default;
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
const expect = require('chai').expect;
let ec = protractor_1.ExpectedConditions;
let home = new homePage_1.HomePage();
let newOwner = new newOwnerPage_1.NewOwnerPage();
cucumber_1.Given('User is on petclininc home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield home.navigateToHomePage();
        let title = yield home.pageTitle.getText();
        yield expect(title).to.equal('Welcome to Petclinic');
    });
});
cucumber_1.When('User clicks on owners tab and selects Add New dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield home.navigateToNewOwnerPage();
    });
});
cucumber_1.When('User enter valid {string} {string} {string} {string} {string}', function (First_Name, Last_Name, Address, City, Telephone) {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwner.addNewOwner({ First_Name, Last_Name, Address, City, Telephone });
        yield expect(true).to.equal(true);
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be saved', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwner.navigateToOwnersPage();
        yield protractor_1.browser.refresh();
        yield newOwner.verifyOwnersEntry();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsOERBQTJEO0FBQzNELHNEQUFtRDtBQUNuRCwyQ0FBeUQ7QUFDekQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXBELElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxJQUFJLEVBQUUsR0FBRywrQkFBa0IsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUVsQyxnQkFBSyxDQUFDLGlDQUFpQyxFQUFFOztRQUNyQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyw2REFBNkQsRUFBRTs7UUFDaEUsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLCtEQUErRCxFQUFFLFVBQWdCLFVBQWUsRUFBRSxTQUFjLEVBQUUsT0FBWSxFQUFFLElBQVMsRUFBRSxTQUFjOztRQUMxSixNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsd0VBQXdFLEVBQUU7O1FBQzNFLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9