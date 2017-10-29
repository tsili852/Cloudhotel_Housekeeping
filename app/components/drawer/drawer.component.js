"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    DrawerComponent.prototype.goHome = function () {
        this.routerExtensions.navigate(["/"], { clearHistory: true });
        // alert("Home");
    };
    DrawerComponent.prototype.goToMaids = function () {
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    };
    DrawerComponent.prototype.goToTechnitians = function () {
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    };
    DrawerComponent = __decorate([
        core_1.Component({
            selector: 'drawer-content',
            templateUrl: 'components/drawer/drawer.component.html',
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], DrawerComponent);
    return DrawerComponent;
}());
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBTS9EO0lBRUkseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsaUJBQWlCO0lBQ3JCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBaEJRLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHlDQUF5QztTQUN6RCxDQUFDO3lDQUd3Qyx5QkFBZ0I7T0FGN0MsZUFBZSxDQWlCM0I7SUFBRCxzQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHJhd2VyLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBnb0hvbWUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIC8vIGFsZXJ0KFwiSG9tZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTWFpZHMoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1RlY2huaXRpYW5zKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaG5pdGlhbnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59Il19