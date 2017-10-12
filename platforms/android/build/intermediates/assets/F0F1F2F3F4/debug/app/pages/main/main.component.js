"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var drawer_page_1 = require("../drawer.page");
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(routerExtensions, page, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    MainComponent.prototype.maidSelected = function () {
        // alert("maids");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    };
    MainComponent.prototype.technitiansSelected = function () {
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    };
    return MainComponent;
}(drawer_page_1.DrawerPage));
MainComponent = __decorate([
    core_1.Component({
        selector: "main",
        templateUrl: "pages/main/main.html",
        styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixnQ0FBK0I7QUFFL0Isc0RBQStEO0FBSy9ELDhDQUE0QztBQU81QyxJQUFhLGFBQWE7SUFBUyxpQ0FBVTtJQUN6Qyx1QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVSxFQUFVLGlCQUFvQztRQUF4SCxZQUNJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7SUFFeEgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBbUMsd0JBQVUsR0FpQjVDO0FBakJZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDbkUsQ0FBQztxQ0FFd0MseUJBQWdCLEVBQWdCLFdBQUksRUFBNkIsd0JBQWlCO0dBRC9HLGFBQWEsQ0FpQnpCO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW4vbWFpbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL21haW4vbWFpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbWFpbi9tYWluLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtYWlkU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJtYWlkc1wiKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haWRzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZWNobml0aWFuc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaG5pdGlhbnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59Il19