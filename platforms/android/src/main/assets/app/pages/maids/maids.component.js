"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
var maid_list_service_1 = require("../../shared/maid/maid-list.service");
var drawer_page_1 = require("../drawer.page");
var MaidsComponent = (function (_super) {
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
    return MaidsComponent;
}(drawer_page_1.DrawerPage));
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
exports.MaidsComponent = MaidsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLHlFQUFzRTtBQUd0RSw4Q0FBNEM7QUFRNUMsSUFBYSxjQUFjO0lBQVMsa0NBQVU7SUFJMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBSGhELFlBSVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFMZSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU5oRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixVQUFJLEdBQUcsRUFBRSxDQUFDOztJQU9OLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBckJELENBQW9DLHdCQUFVLEdBcUI3QztBQXJCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1FBQ3BFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7S0FDL0IsQ0FBQztxQ0FLd0MseUJBQWdCO1FBQ3BDLFdBQUk7UUFDTyxtQ0FBZTtRQUNiLHdCQUFpQjtHQVB2QyxjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1haWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haWQvbWFpZFwiO1xyXG5pbXBvcnQgeyBNYWlkTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWFpZC9tYWlkLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1haWRzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tYWlkcy9tYWlkcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL21haWRzL21haWRzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tYWlkcy9tYWlkcy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtNYWlkTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlkc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbWFpZHNMaXN0OiBBcnJheTxNYWlkPiA9IFtdO1xyXG4gICAgbWFpZCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgICAgIHByaXZhdGUgbWFpZExpc3RTZXJ2aWNlOiBNYWlkTGlzdFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0ID0gdGhpcy5tYWlkTGlzdFNlcnZpY2UubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWFpZFRhcChhcmdzKSB7XHJcbiAgICAgICAgbGV0IG1haWQgPSB0aGlzLm1haWRzTGlzdFthcmdzLmluZGV4XTtcclxuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiLCBtYWlkLmlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Jvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufSJdfQ==