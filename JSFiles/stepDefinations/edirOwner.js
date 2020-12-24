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
const protractor_1 = require("protractor");
const editOwnerObj_1 = require("../pageObjects/editOwnerObj");
const expect = global['chai'].expect;
let editOwnObj = new editOwnerObj_1.editOwnerObj();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
cucumber_1.When('User clicks on first owner name to check owner information', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let text = yield editOwnObj.firstOwner.getText();
        yield console.log("text : " + text);
    });
});
cucumber_1.When('User clicks on Add Visit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.addVisit.click();
    });
});
cucumber_1.When('User selects date from calendar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.date.click();
        let month = "12 2019";
        let date = "20";
        while (true) {
            let currentMonth = yield editOwnObj.month.getText();
            yield console.log("Month : " + currentMonth);
            if (month == currentMonth) {
                break;
            }
            else {
                yield editOwnObj.previousMnth.click();
                //await editOwnObj.nextMnth.click();
            }
        }
        yield protractor_1.element(protractor_1.by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpck93bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL2VkaXJPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBeUM7QUFDekMsOERBQTJEO0FBRTNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFFcEMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixlQUFJLENBQUMsNERBQTRELEVBQUU7O1FBQy9ELElBQUksSUFBSSxHQUFHLE1BQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBQ3BDLE1BQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGlDQUFpQyxFQUFFOztRQUNwQyxNQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLElBQUksRUFBRTtZQUNULElBQUksWUFBWSxHQUFHLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBRTdDLElBQUksS0FBSyxJQUFJLFlBQVksRUFBRTtnQkFDdkIsTUFBTTthQUNUO2lCQUNJO2dCQUNELE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdEMsb0NBQW9DO2FBQ3ZDO1NBQ0o7UUFDRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0RyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=