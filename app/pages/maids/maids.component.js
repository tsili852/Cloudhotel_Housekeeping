"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
var maid_list_service_1 = require("../../shared/maid/maid-list.service");
var drawer_page_1 = require("../drawer.page");
var MaidsComponent = /** @class */ (function (_super) {
    __extends(MaidsComponent, _super);
    function MaidsComponent(routerExtensions, page, maidListService, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.maidListService = maidListService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.maidsList = [];
        _this.maid = "";
        return _this;
    }
    MaidsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        this.maidsList = this.maidListService.load();
    };
    MaidsComponent.prototype.onMaidTap = function (args) {
        var maid = this.maidsList[args.index];
        applicationSettings.setString("activeMaidId", maid.id);
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
    };
    MaidsComponent.prototype.onMaidTapInside = function (id) {
        applicationSettings.setString("activeMaidId", id);
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
    };
    MaidsComponent = __decorate([
        core_1.Component({
            selector: "maids",
            templateUrl: "pages/maids/maids.html",
            styleUrls: ["pages/maids/maids-common.css", "pages/maids/maids.css"],
            providers: [maid_list_service_1.MaidListService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            maid_list_service_1.MaidListService,
            core_1.ChangeDetectorRef])
    ], MaidsComponent);
    return MaidsComponent;
}(drawer_page_1.DrawerPage));
exports.MaidsComponent = MaidsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLHlFQUFzRTtBQUd0RSw4Q0FBNEM7QUFRNUM7SUFBb0Msa0NBQVU7SUFJMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBSGhELFlBSVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFMZSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU5oRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixVQUFJLEdBQUcsRUFBRSxDQUFDOztJQU9OLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXpCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1lBQ3BFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDL0IsQ0FBQzt5Q0FLd0MseUJBQWdCO1lBQ3BDLFdBQUk7WUFDTyxtQ0FBZTtZQUNiLHdCQUFpQjtPQVB2QyxjQUFjLENBMEIxQjtJQUFELHFCQUFDO0NBQUEsQUExQkQsQ0FBb0Msd0JBQVUsR0EwQjdDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgTWFpZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWFpZC9tYWlkXCI7XHJcbmltcG9ydCB7IE1haWRMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tYWlkL21haWQtbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWFpZHNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haWRzL21haWRzLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWFpZHMvbWFpZHMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL21haWRzL21haWRzLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW01haWRMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haWRzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtYWlkc0xpc3Q6IEFycmF5PE1haWQ+ID0gW107XHJcbiAgICBtYWlkID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBtYWlkTGlzdFNlcnZpY2U6IE1haWRMaXN0U2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QgPSB0aGlzLm1haWRMaXN0U2VydmljZS5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYWlkVGFwKGFyZ3MpIHtcclxuICAgICAgICBsZXQgbWFpZCA9IHRoaXMubWFpZHNMaXN0W2FyZ3MuaW5kZXhdO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIsIG1haWQuaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWFpZFRhcEluc2lkZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIiwgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59Il19