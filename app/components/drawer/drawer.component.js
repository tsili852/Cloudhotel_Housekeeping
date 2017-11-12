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
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
    };
    DrawerComponent.prototype.goToTechnitians = function () {
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    };
    DrawerComponent.prototype.goToSettings = function () {
        this.routerExtensions.navigate(["settings", { clearHistory: true }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBTS9EO0lBRUkseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsaUJBQWlCO0lBQ3JCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFwQlEsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUNBQXlDO1NBQ3pELENBQUM7eUNBR3dDLHlCQUFnQjtPQUY3QyxlQUFlLENBcUIzQjtJQUFELHNCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJhd2VyLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIGdvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAvLyBhbGVydChcIkhvbWVcIik7XG4gICAgfVxuXG4gICAgZ29Ub01haWRzKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Jvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBnb1RvVGVjaG5pdGlhbnMoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgZ29Ub1NldHRpbmdzKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic2V0dGluZ3NcIiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfV0pO1xuICAgIH1cbn0iXX0=