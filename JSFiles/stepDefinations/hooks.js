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
const userData_1 = require("../testdata/userData");
cucumber_1.BeforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed beforeAll scenarios
        yield protractor_1.browser.get(userData_1.default.appUrl);
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios
        //browser.manage().window().maximize();  given in conf file 
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        //This hook will be executed after each scenarios
        if (scenario.result.status == "failed") {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
// After(async function (scenario: any) {
//   if (scenario.result.status = Status.Failed) {
//     const screenshot = await browser.takeScreenshot();
//     //const img = Buffer.alloc(screenShot.length, screenShot, 'base64');
//     scenario.attach(screenshot, "image/png");
//   }
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEQ7QUFDNUQsMkNBQXFDO0FBQ3JDLG1EQUE0QztBQUc1QyxvQkFBUyxDQUFDOztRQUNSLGlEQUFpRDtRQUNqRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUM7O1FBQ0wsOENBQThDO1FBQzlDLDREQUE0RDtJQUM5RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixpREFBaUQ7UUFDakQsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRyxRQUFRLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1NBQ25DO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQseURBQXlEO0FBQ3pELDJFQUEyRTtBQUMzRSxnREFBZ0Q7QUFDaEQsTUFBTTtBQUNOLE1BQU0ifQ==