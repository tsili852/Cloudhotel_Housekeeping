"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var drawer_page_1 = require("../drawer.page");
var configuration_service_1 = require("../../shared/configuration.service");
var MainComponent = /** @class */ (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(routerExtensions, page, configurationService, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.configurationService = configurationService;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        if (!this.configurationService.getHotelSN()) {
            this.routerExtensions.navigate(["/preconfigure"], { clearHistory: true });
        }
    };
    MainComponent.prototype.maidSelected = function () {
        // alert("maids");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    };
    MainComponent.prototype.technitiansSelected = function () {
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    };
    MainComponent.prototype.settingsSelected = function () {
        this.routerExtensions.navigate(["settings", { clearHistory: true }]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            templateUrl: "pages/main/main.html",
            styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            configuration_service_1.ConfigurationService,
            core_1.ChangeDetectorRef])
    ], MainComponent);
    return MainComponent;
}(drawer_page_1.DrawerPage));
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixnQ0FBK0I7QUFFL0Isc0RBQStEO0FBSy9ELDhDQUE0QztBQUM1Qyw0RUFBMEU7QUFPMUU7SUFBbUMsaUNBQVU7SUFDekMsdUJBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1Ysb0JBQTBDLEVBQzFDLGlCQUFvQztRQUhoRCxZQUlJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7SUFFaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUExQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNuRSxDQUFDO3lDQUV3Qyx5QkFBZ0I7WUFDcEMsV0FBSTtZQUNZLDRDQUFvQjtZQUN2Qix3QkFBaUI7T0FKdkMsYUFBYSxDQTRCekI7SUFBRCxvQkFBQztDQUFBLEFBNUJELENBQW1DLHdCQUFVLEdBNEI1QztBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1haW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tYWluL21haW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWFpbi9tYWluLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tYWluL21haW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxuICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRIb3RlbFNOKCkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJlY29uZmlndXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1haWRTZWxlY3RlZCgpIHtcbiAgICAgICAgLy8gYWxlcnQoXCJtYWlkc1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGVjaG5pdGlhbnNTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNoLXJvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzZXR0aW5nc1NlbGVjdGVkKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic2V0dGluZ3NcIiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfV0pO1xuICAgIH1cblxufSJdfQ==