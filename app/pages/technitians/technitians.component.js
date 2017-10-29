"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
var technitian_list_service_1 = require("../../shared/technitian/technitian-list.service");
var drawer_page_1 = require("../drawer.page");
var TechnitiansComponent = /** @class */ (function (_super) {
    __extends(TechnitiansComponent, _super);
    function TechnitiansComponent(routerExtensions, page, technitianListService, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.technitianListService = technitianListService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.technitiansList = [];
        _this.technitian = "";
        return _this;
    }
    TechnitiansComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        this.technitiansList = this.technitianListService.load();
    };
    TechnitiansComponent.prototype.onTechnitianTap = function (args) {
        var technitian = this.technitiansList[args.index];
        applicationSettings.setString("activeTechnitianId", technitian.id);
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    };
    TechnitiansComponent.prototype.onTechnitianTapInside = function (id) {
        applicationSettings.setString("activeTechnitianId", id);
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    };
    TechnitiansComponent = __decorate([
        core_1.Component({
            selector: "technitians",
            templateUrl: "pages/technitians/technitians.html",
            styleUrls: ["pages/technitians/technitians-common.css", "pages/technitians/technitians.css"],
            providers: [technitian_list_service_1.TechnitianListService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            technitian_list_service_1.TechnitianListService,
            core_1.ChangeDetectorRef])
    ], TechnitiansComponent);
    return TechnitiansComponent;
}(drawer_page_1.DrawerPage));
exports.TechnitiansComponent = TechnitiansComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVjaG5pdGlhbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFRNUM7SUFBMEMsd0NBQVU7SUFJaEQsOEJBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YscUJBQTRDLEVBQzVDLGlCQUFvQztRQUhoRCxZQUlRLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTGUsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTmhELHFCQUFlLEdBQXNCLEVBQUUsQ0FBQztRQUN4QyxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFPWixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELG9EQUFxQixHQUFyQixVQUFzQixFQUFVO1FBQzVCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBekJRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxtQ0FBbUMsQ0FBQztZQUM1RixTQUFTLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQUt3Qyx5QkFBZ0I7WUFDcEMsV0FBSTtZQUNhLCtDQUFxQjtZQUN6Qix3QkFBaUI7T0FQdkMsb0JBQW9CLENBMEJoQztJQUFELDJCQUFDO0NBQUEsQUExQkQsQ0FBMEMsd0JBQVUsR0EwQm5EO0FBMUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRlY2huaXRpYW5zXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90ZWNobml0aWFucy90ZWNobml0aWFucy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlY2huaXRpYW5zL3RlY2huaXRpYW5zLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy90ZWNobml0aWFucy90ZWNobml0aWFucy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtUZWNobml0aWFuTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGVjaG5pdGlhbnNMaXN0OiBBcnJheTxUZWNobml0aWFuPiA9IFtdO1xyXG4gICAgdGVjaG5pdGlhbiA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgICAgIHByaXZhdGUgdGVjaG5pdGlhbkxpc3RTZXJ2aWNlOiBUZWNobml0aWFuTGlzdFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGVjaG5pdGlhbnNMaXN0ID0gdGhpcy50ZWNobml0aWFuTGlzdFNlcnZpY2UubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGVjaG5pdGlhblRhcChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHRlY2huaXRpYW4gPSB0aGlzLnRlY2huaXRpYW5zTGlzdFthcmdzLmluZGV4XTtcclxuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZVRlY2huaXRpYW5JZFwiLCB0ZWNobml0aWFuLmlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RlY2gtcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGVjaG5pdGlhblRhcEluc2lkZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVUZWNobml0aWFuSWRcIiwgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn0iXX0=