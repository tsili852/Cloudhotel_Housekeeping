"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var DrawerComponent = (function () {
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
    return DrawerComponent;
}());
DrawerComponent = __decorate([
    core_1.Component({
        selector: 'drawer-content',
        templateUrl: 'components/drawer/drawer.component.html',
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], DrawerComponent);
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBTS9ELElBQWEsZUFBZTtJQUV4Qix5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RCxpQkFBaUI7SUFDckIsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksZUFBZTtJQUozQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUseUNBQXlDO0tBQ3pELENBQUM7cUNBR3dDLHlCQUFnQjtHQUY3QyxlQUFlLENBaUIzQjtBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RyYXdlci1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ib21lKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAvLyBhbGVydChcIkhvbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub01haWRzKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpZHNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9UZWNobml0aWFucygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RlY2huaXRpYW5zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufSJdfQ==