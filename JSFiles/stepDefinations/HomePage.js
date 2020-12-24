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
const LoginPageObjects_1 = require("../pageObjects/LoginPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const expect = global['chai'].expect;
let homeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
cucumber_1.Given('User is on Petclinic home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logObj.WelcomeMsg.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let menu1 = yield homeObj.HomeMenu.getAttribute("innerText");
        yield console.log(" First Menu : " + menu1);
        yield expect("HOME").to.equal(menu1);
        let menu2 = yield homeObj.Owners.getAttribute("innerText");
        yield console.log(" Second Menu : " + menu2);
        yield expect("OWNERS").to.equal(menu2);
        let menu3 = yield homeObj.veterinarians.getAttribute("innerText");
        yield console.log(" Third Menu : " + menu3);
        yield expect("VETERINARIANS").to.equal(menu3);
        let menu4 = yield homeObj.PetTypes.getAttribute("innerText");
        yield console.log(" Fourth Menu : " + menu4);
        yield expect("PET TYPES").to.equal(menu4);
        let menu5 = yield homeObj.Specialties.getAttribute("innerText");
        yield console.log(" Fifth Menu : " + menu5);
        yield expect("SPECIALTIES").to.equal(menu5);
    });
});
cucumber_1.When('User clicks on owners tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.Owners.click();
    });
});
cucumber_1.Then('ALL and ADD NEW owners sub-menus should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstMenu = yield homeObj.allSubMenu.getText();
        yield expect("ALL").to.equal(firstMenu);
        yield console.log("first drop-down menu is : " + firstMenu);
        let secondMenu = yield homeObj.addNewSubMenu.getText();
        yield expect("ADD NEW").to.equal(secondMenu);
        yield console.log("second drop-down menu is : " + secondMenu);
    });
});
cucumber_1.Given('User is on Owners tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let Owners = yield homeObj.Owners.getAttribute("innerText");
        yield console.log(" Tab name is : " + Owners);
        yield expect("OWNERS").to.equal(Owners);
    });
});
cucumber_1.When('User clicks on ALL sub-menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.allSubMenu.click();
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Then('Owners list should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let page = yield homeObj.PageName.getText();
        yield console.log(" page name is : " + page);
    });
});
cucumber_1.Given('User is on All Owners list page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        let pagename = yield homeObj.PageName.getText();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User clicks on Add Owner button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.AddOwnerButton.click();
    });
});
cucumber_1.Then('Add New Owner page should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.PageName.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
        let pagename = yield homeObj.PageName.getText();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User clicks on ADD NEW sub-menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.addNewSubMenu.click();
    });
});
cucumber_1.Then('New Owner page should get displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.PageName.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvSG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0VBQW1FO0FBQ25FLG9FQUFpRTtBQUNqRSwyQ0FBcUM7QUFFckMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFcEMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixnQkFBSyxDQUFDLGdDQUFnQyxFQUFFOztRQUNwQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUM3RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHVGQUF1RixFQUFFOztRQUMxRixJQUFJLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxJQUFJLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLElBQUksS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7UUFDOUIsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsc0RBQXNELEVBQUU7O1FBQ3pELElBQUksU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLFVBQVUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkQsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGdCQUFLLENBQUMsdUJBQXVCLEVBQUU7O1FBQzNCLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyw2QkFBNkIsRUFBRTs7UUFDaEMsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDcEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVqRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBQ3BDLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHdDQUF3QyxFQUFFOztRQUMzQyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUM1RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBQ3BDLE1BQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHFDQUFxQyxFQUFFOztRQUN4QyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUM1RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=