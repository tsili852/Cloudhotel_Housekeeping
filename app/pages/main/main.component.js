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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixnQ0FBK0I7QUFFL0Isc0RBQStEO0FBSy9ELDhDQUE0QztBQUM1Qyw0RUFBMEU7QUFPMUU7SUFBbUMsaUNBQVU7SUFDekMsdUJBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1Ysb0JBQTBDLEVBQzFDLGlCQUFvQztRQUhoRCxZQUlJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7SUFFaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQXRCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1NBQ25FLENBQUM7eUNBRXdDLHlCQUFnQjtZQUNwQyxXQUFJO1lBQ1ksNENBQW9CO1lBQ3ZCLHdCQUFpQjtPQUp2QyxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsQ0FBbUMsd0JBQVUsR0F1QjVDO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibWFpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWFpbi9tYWluLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWFpbi9tYWluLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tYWluL21haW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRIb3RlbFNOKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcmVjb25maWd1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWlkU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJtYWlkc1wiKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haWRzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZWNobml0aWFuc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn0iXX0=