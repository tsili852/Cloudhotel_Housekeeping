"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var drawer_page_1 = require("../drawer.page");
var MainComponent = /** @class */ (function (_super) {
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
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            templateUrl: "pages/main/main.html",
            styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef])
    ], MainComponent);
    return MainComponent;
}(drawer_page_1.DrawerPage));
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixnQ0FBK0I7QUFFL0Isc0RBQStEO0FBSy9ELDhDQUE0QztBQU81QztJQUFtQyxpQ0FBVTtJQUN6Qyx1QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVSxFQUFVLGlCQUFvQztRQUF4SCxZQUNJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7SUFFeEgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFoQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNuRSxDQUFDO3lDQUV3Qyx5QkFBZ0IsRUFBZ0IsV0FBSSxFQUE2Qix3QkFBaUI7T0FEL0csYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELENBQW1DLHdCQUFVLEdBaUI1QztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYWluXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tYWluL21haW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tYWluL21haW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL21haW4vbWFpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbWFpZFNlbGVjdGVkKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KFwibWFpZHNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVjaG5pdGlhbnNTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RlY2gtcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59Il19