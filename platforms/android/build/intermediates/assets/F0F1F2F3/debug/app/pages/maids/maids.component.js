"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFJL0QseUVBQXNFO0FBR3RFLDhDQUE0QztBQVE1QyxJQUFhLGNBQWM7SUFBUyxrQ0FBVTtJQUkxQyx3QkFBb0IsZ0JBQWtDLEVBQzFDLElBQVUsRUFDVixlQUFnQyxFQUNoQyxpQkFBb0M7UUFIaEQsWUFJUSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUMzQjtRQUxlLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTmhELGVBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBQzVCLFVBQUksR0FBRyxFQUFFLENBQUM7O0lBT04sQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFmRCxDQUFvQyx3QkFBVSxHQWU3QztBQWZZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7UUFDcEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUMvQixDQUFDO3FDQUt3Qyx5QkFBZ0I7UUFDcEMsV0FBSTtRQUNPLG1DQUFlO1FBQ2Isd0JBQWlCO0dBUHZDLGNBQWMsQ0FlMUI7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1haWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haWQvbWFpZFwiO1xyXG5pbXBvcnQgeyBNYWlkTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWFpZC9tYWlkLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1haWRzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tYWlkcy9tYWlkcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL21haWRzL21haWRzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tYWlkcy9tYWlkcy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtNYWlkTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlkc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbWFpZHNMaXN0OiBBcnJheTxNYWlkPiA9IFtdO1xyXG4gICAgbWFpZCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgICAgIHByaXZhdGUgbWFpZExpc3RTZXJ2aWNlOiBNYWlkTGlzdFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0ID0gdGhpcy5tYWlkTGlzdFNlcnZpY2UubG9hZCgpO1xyXG4gICAgfVxyXG59Il19