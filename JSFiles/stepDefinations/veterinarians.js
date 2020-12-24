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
const vetObj_1 = require("../pageObjects/vetObj");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const expect = global['chai'].expect;
let homeObj = new HomePageObjects_1.HomePageObjects();
let vetObj = new vetObj_1.VetPageObj();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
cucumber_1.Given('User is on homepage and able to see veterinarians menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let veterinarians = yield homeObj.veterinarians.getAttribute("innerText");
        yield expect("VETERINARIANS").to.equal(veterinarians);
    });
});
cucumber_1.When('User clicks on veterinarians tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.veterinarians.click();
    });
});
cucumber_1.Then('ALL and ADD NEW veterinarians sub-menus should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstMenu = yield homeObj.allSubMenu.getText();
        yield expect("ALL").to.equal(firstMenu);
        yield console.log("first drop-down sub-menu is : " + firstMenu);
        let secondMenu = yield homeObj.addNewSubMenu.getText();
        yield expect("ADD NEW").to.equal(secondMenu);
        yield console.log("second drop-down sub-menu is : " + secondMenu);
    });
});
cucumber_1.Given('User is on Veterinarians tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let veterinarians = yield homeObj.veterinarians.getAttribute("innerText");
        yield console.log(" Tab name is : " + veterinarians);
        yield expect("VETERINARIANS").to.equal(veterinarians);
    });
});
cucumber_1.Then('Veterinarians list should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let page = yield homeObj.PageName.getText();
        yield console.log(" page name is : " + page);
        yield expect("Veterinarians").to.equal(page);
    });
});
cucumber_1.Given('User is on veterinarians page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let page = yield homeObj.PageName.getText();
        yield expect("Veterinarians").to.equal(page);
    });
});
cucumber_1.Then('User should see total numbers of radiology from veterinarians Specialties', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let specialties = "radiology";
        let spec = 0;
        yield vetObj.vetListTbl.all(protractor_1.by.tagName("tr")).all(protractor_1.by.tagName("td")).each(function (item) {
            return __awaiter(this, void 0, void 0, function* () {
                yield item.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        //await console.log(text);
                        if (text.indexOf(specialties) >= 0) {
                            spec = (yield spec) + 1;
                            yield console.log("Total number of", specialties, "=", spec);
                        }
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmV0ZXJpbmFyaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy92ZXRlcmluYXJpYW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLGtEQUFtRDtBQUNuRCxvRUFBaUU7QUFDakUsMkNBQWdDO0FBRWhDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxtQkFBVSxFQUFFLENBQUM7QUFFOUIsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixnQkFBSyxDQUFDLHdEQUF3RCxFQUFFOztRQUM1RCxJQUFJLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFMUQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRTs7UUFDckMsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsNkRBQTZELEVBQUU7O1FBQ2hFLElBQUksU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1B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