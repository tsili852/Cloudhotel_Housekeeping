"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
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
    MaidsComponent.prototype.onMaidTap = function (args) {
        var maid = this.maidsList[args.index];
        applicationSettings.setString("activeMaidId", maid.id);
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
    };
    MaidsComponent.prototype.onMaidTapInside = function (id) {
        applicationSettings.setString("activeMaidId", id);
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLHlFQUFzRTtBQUd0RSw4Q0FBNEM7QUFRNUMsSUFBYSxjQUFjO0lBQVMsa0NBQVU7SUFJMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBSGhELFlBSVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFMZSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQU5oRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixVQUFJLEdBQUcsRUFBRSxDQUFDOztJQU9OLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFvQyx3QkFBVSxHQTBCN0M7QUExQlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztRQUNwRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQy9CLENBQUM7cUNBS3dDLHlCQUFnQjtRQUNwQyxXQUFJO1FBQ08sbUNBQWU7UUFDYix3QkFBaUI7R0FQdkMsY0FBYyxDQTBCMUI7QUExQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBNYWlkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tYWlkL21haWRcIjtcclxuaW1wb3J0IHsgTWFpZExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21haWQvbWFpZC1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtYWlkc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWFpZHMvbWFpZHMuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tYWlkcy9tYWlkcy1jb21tb24uY3NzXCIsIFwicGFnZXMvbWFpZHMvbWFpZHMuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbTWFpZExpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpZHNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1haWRzTGlzdDogQXJyYXk8TWFpZD4gPSBbXTtcclxuICAgIG1haWQgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgICAgICBwcml2YXRlIG1haWRMaXN0U2VydmljZTogTWFpZExpc3RTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1haWRzTGlzdCA9IHRoaXMubWFpZExpc3RTZXJ2aWNlLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1haWRUYXAoYXJncykge1xyXG4gICAgICAgIGxldCBtYWlkID0gdGhpcy5tYWlkc0xpc3RbYXJncy5pbmRleF07XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIiwgbWFpZC5pZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYWlkVGFwSW5zaWRlKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiLCBpZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn0iXX0=