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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLHlFQUFzRTtBQUd0RSw4Q0FBNEM7QUFRNUM7SUFBb0Msa0NBQVU7SUFJMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBSGhELFlBSVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFMZSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU5oRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixVQUFJLEdBQUcsRUFBRSxDQUFDOztJQU9OLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXpCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1lBQ3BFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDL0IsQ0FBQzt5Q0FLd0MseUJBQWdCO1lBQ3BDLFdBQUk7WUFDTyxtQ0FBZTtZQUNiLHdCQUFpQjtPQVB2QyxjQUFjLENBMEIxQjtJQUFELHFCQUFDO0NBQUEsQUExQkQsQ0FBb0Msd0JBQVUsR0EwQjdDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTWFpZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWFpZC9tYWlkXCI7XG5pbXBvcnQgeyBNYWlkTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWFpZC9tYWlkLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1haWRzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWFpZHMvbWFpZHMuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWFpZHMvbWFpZHMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL21haWRzL21haWRzLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtNYWlkTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1haWRzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWFpZHNMaXN0OiBBcnJheTxNYWlkPiA9IFtdO1xuICAgIG1haWQgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcbiAgICAgICAgcHJpdmF0ZSBtYWlkTGlzdFNlcnZpY2U6IE1haWRMaXN0U2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFpZHNMaXN0ID0gdGhpcy5tYWlkTGlzdFNlcnZpY2UubG9hZCgpO1xuICAgIH1cblxuICAgIG9uTWFpZFRhcChhcmdzKSB7XG4gICAgICAgIGxldCBtYWlkID0gdGhpcy5tYWlkc0xpc3RbYXJncy5pbmRleF07XG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIsIG1haWQuaWQpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Jvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBvbk1haWRUYXBJbnNpZGUoaWQ6IHN0cmluZykge1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiLCBpZCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn0iXX0=