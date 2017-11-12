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
        // this.technitiansList = this.technitianListService.load();
    };
    TechnitiansComponent.prototype.onTechnitianTap = function (args) {
        var technitian = this.technitiansList[args.index];
        // applicationSettings.setString("activeTechnitianId", technitian.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVjaG5pdGlhbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFRNUM7SUFBMEMsd0NBQVU7SUFJaEQsOEJBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YscUJBQTRDLEVBQzVDLGlCQUFvQztRQUhoRCxZQUlRLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTGUsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTmhELHFCQUFlLEdBQXNCLEVBQUUsQ0FBQztRQUN4QyxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFPWixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyw0REFBNEQ7SUFDaEUsQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELG9EQUFxQixHQUFyQixVQUFzQixFQUFVO1FBQzVCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBekJRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxtQ0FBbUMsQ0FBQztZQUM1RixTQUFTLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQUt3Qyx5QkFBZ0I7WUFDcEMsV0FBSTtZQUNhLCtDQUFxQjtZQUN6Qix3QkFBaUI7T0FQdkMsb0JBQW9CLENBMEJoQztJQUFELDJCQUFDO0NBQUEsQUExQkQsQ0FBMEMsd0JBQVUsR0EwQm5EO0FBMUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0ZWNobml0aWFuc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RlY2huaXRpYW5zL3RlY2huaXRpYW5zLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlY2huaXRpYW5zL3RlY2huaXRpYW5zLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy90ZWNobml0aWFucy90ZWNobml0aWFucy5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkxpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRlY2huaXRpYW5zTGlzdDogQXJyYXk8VGVjaG5pdGlhbj4gPSBbXTtcbiAgICB0ZWNobml0aWFuID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXG4gICAgICAgIHByaXZhdGUgdGVjaG5pdGlhbkxpc3RTZXJ2aWNlOiBUZWNobml0aWFuTGlzdFNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnRlY2huaXRpYW5zTGlzdCA9IHRoaXMudGVjaG5pdGlhbkxpc3RTZXJ2aWNlLmxvYWQoKTtcbiAgICB9XG5cbiAgICBvblRlY2huaXRpYW5UYXAoYXJncykge1xuICAgICAgICBsZXQgdGVjaG5pdGlhbiA9IHRoaXMudGVjaG5pdGlhbnNMaXN0W2FyZ3MuaW5kZXhdO1xuICAgICAgICAvLyBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZVRlY2huaXRpYW5JZFwiLCB0ZWNobml0aWFuLmlkKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNoLXJvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBvblRlY2huaXRpYW5UYXBJbnNpZGUoaWQ6IHN0cmluZykge1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZVRlY2huaXRpYW5JZFwiLCBpZCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxufSJdfQ==