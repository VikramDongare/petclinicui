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
const vetPage_1 = require("../pageObjects/vetPage");
const protractor_1 = require("protractor");
const expect = require('chai').expect;
let ec = protractor_1.ExpectedConditions;
let vets = new vetPage_1.VetPage();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
cucumber_1.Given('User is on veterinarians page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vets.navigateToVetPage();
        yield protractor_1.browser.wait(ec.visibilityOf(vets.pageName), 20000, 'Taking too long to load');
        let pageTitle = yield vets.pageName.getText();
        yield expect(pageTitle).to.equal('Veterinarians');
    });
});
cucumber_1.Then('User should see total numbers of radiology from veterinarians Specialties', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vets.verifyRadiologyCount();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmV0ZXJpbmFyaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy92ZXRlcmluYXJpYW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCwyQ0FBNkQ7QUFDN0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxJQUFJLEVBQUUsR0FBRywrQkFBa0IsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUN6QixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLGdCQUFLLENBQUMsK0JBQStCLEVBQUU7O1FBQ25DLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNyRixJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDJFQUEyRSxFQUFFOztRQUM5RSxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==