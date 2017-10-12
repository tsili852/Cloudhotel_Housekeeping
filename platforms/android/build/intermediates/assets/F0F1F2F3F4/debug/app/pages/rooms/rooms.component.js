"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
var room_service_1 = require("../../shared/room/room.service");
var maid_list_service_1 = require("../../shared/maid/maid-list.service");
var drawer_page_1 = require("../drawer.page");
var utils_1 = require("tns-core-modules/utils/utils");
var frameModule = require("tns-core-modules/ui/frame");
var RoomsComponent = (function (_super) {
    __extends(RoomsComponent, _super);
    function RoomsComponent(routerExtensions, page, roomService, maidListService, zone, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.roomService = roomService;
        _this.maidListService = maidListService;
        _this.zone = zone;
        _this.changeDetectorRef = changeDetectorRef;
        _this.roomsList = [];
        _this.rooom = "";
        _this.isClean = false;
        return _this;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        this.roomsList = this.roomService.getAllRooms();
        this.roomsList[2].status = 1;
        var maidId = applicationSettings.getString("activeMaidId");
        if (maidId) {
            this.maid = this.maidListService.getFromId(maidId);
        }
        else {
            this.routerExtensions.navigate(["/maids"], { clearHistory: true });
        }
    };
    RoomsComponent.prototype.changeMaid = function () {
        applicationSettings.setString("activeMaidId", "");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    };
    RoomsComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = 60 * utils_1.layout.getDisplayDensity();
        swipeLimits.left = 90 * utils_1.layout.getDisplayDensity();
        swipeLimits.right = 80 * utils_1.layout.getDisplayDensity();
        this.selected = args.index;
    };
    RoomsComponent.prototype.onLeave = function () {
        var _this = this;
        var radListView = frameModule.topmost().currentPage.getViewById("radlistview");
        this.zone.run(function () {
            _this.roomsList[_this.selected].status = 0;
        });
        radListView.notifySwipeToExecuteFinished();
    };
    RoomsComponent.prototype.onEnter = function () {
        var _this = this;
        var radListView = frameModule.topmost().currentPage.getViewById("radlistview");
        this.zone.run(function () {
            _this.roomsList[_this.selected].status = 1;
        });
        radListView.notifySwipeToExecuteFinished();
    };
    return RoomsComponent;
}(drawer_page_1.DrawerPage));
RoomsComponent = __decorate([
    core_1.Component({
        selector: "rooms",
        templateUrl: "pages/rooms/rooms.html",
        styleUrls: ["pages/rooms/rooms-common.css", "pages/rooms/rooms.css"],
        providers: [room_service_1.RoomService, maid_list_service_1.MaidListService]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        page_1.Page,
        room_service_1.RoomService,
        maid_list_service_1.MaidListService,
        core_1.NgZone,
        core_1.ChangeDetectorRef])
], RoomsComponent);
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFRekQsSUFBYSxjQUFjO0lBQVMsa0NBQVU7SUFPMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1RLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUGUsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVmhELGVBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBQzVCLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxhQUFPLEdBQVksS0FBSyxDQUFDOztJQVNyQixDQUFDO0lBRUwsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSwyQ0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsY0FBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsY0FBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsY0FBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQ0FBTyxHQUFkO1FBQUEsaUJBT0M7UUFORyxJQUFJLFdBQVcsR0FBaUIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLGdDQUFPLEdBQWQ7UUFBQSxpQkFNQztRQUxHLElBQUksV0FBVyxHQUFpQixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBM0RELENBQW9DLHdCQUFVLEdBMkQ3QztBQTNEWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1FBQ3BFLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsbUNBQWUsQ0FBQztLQUM1QyxDQUFDO3FDQVF3Qyx5QkFBZ0I7UUFDcEMsV0FBSTtRQUNHLDBCQUFXO1FBQ1AsbUNBQWU7UUFDMUIsYUFBTTtRQUNPLHdCQUFpQjtHQVp2QyxjQUFjLENBMkQxQjtBQTNEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haWQvbWFpZFwiO1xyXG5pbXBvcnQgeyBNYWlkTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWFpZC9tYWlkLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyb29tc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcm9vbXMvcm9vbXMuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yb29tcy9yb29tcy1jb21tb24uY3NzXCIsIFwicGFnZXMvcm9vbXMvcm9vbXMuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbUm9vbVNlcnZpY2UsIE1haWRMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb21zQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzZWxlY3RlZDogbnVtYmVyO1xyXG4gICAgcm9vbXNMaXN0OiBBcnJheTxSb29tPiA9IFtdO1xyXG4gICAgcm9vb20gPSBcIlwiO1xyXG4gICAgbWFpZDogTWFpZDtcclxuICAgIGlzQ2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgbWFpZExpc3RTZXJ2aWNlOiBNYWlkTGlzdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QgPSB0aGlzLnJvb21TZXJ2aWNlLmdldEFsbFJvb21zKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0WzJdLnN0YXR1cyA9IDE7XHJcblxyXG4gICAgICAgIGxldCBtYWlkSWQgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiKTtcclxuICAgICAgICBpZiAobWFpZElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpZCA9IHRoaXMubWFpZExpc3RTZXJ2aWNlLmdldEZyb21JZChtYWlkSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpZHNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNYWlkKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpZHNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gNjAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gOTAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IDgwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGFyZ3MuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVhdmUoKSB7XHJcbiAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PiBmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKTtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PiBmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKTtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcbiAgICB9XHJcbn0iXX0=