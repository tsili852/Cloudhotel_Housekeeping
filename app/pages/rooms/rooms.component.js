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
    // bathroomCleaned(roomNumber: string) {
    //     alert("Bathroom in room : " + roomNumber);
    // }
    RoomsComponent.prototype.bathroomStatusChange = function (id) {
        var _this = this;
        this.roomsList.forEach(function (room) {
            if (room.id === id) {
                _this.zone.run(function () {
                    if (room.bathroom_status == 2) {
                        room.bathroom_status = 3;
                    }
                    else {
                        room.bathroom_status = 2;
                    }
                });
            }
        });
    };
    RoomsComponent.prototype.bedStatusChange = function (id) {
        var _this = this;
        this.roomsList.forEach(function (room) {
            if (room.id === id) {
                _this.zone.run(function () {
                    if (room.bed_status == 2) {
                        room.bed_status = 3;
                    }
                    else {
                        room.bed_status = 2;
                    }
                });
            }
        });
    };
    RoomsComponent.prototype.towelsStatusChange = function (id) {
        var _this = this;
        this.roomsList.forEach(function (room) {
            if (room.id === id) {
                _this.zone.run(function () {
                    if (room.towels_status == 2) {
                        room.towels_status = 3;
                    }
                    else {
                        room.towels_status = 2;
                    }
                });
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFRekQsSUFBYSxjQUFjO0lBQVMsa0NBQVU7SUFPMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1JLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFTekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFD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d0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7UUFDcEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxtQ0FBZSxDQUFDO0tBQzVDLENBQUM7cUNBUXdDLHlCQUFnQjtRQUNwQyxXQUFJO1FBQ0csMEJBQVc7UUFDUCxtQ0FBZTtRQUMxQixhQUFNO1FBQ08sd0JBQWlCO0dBWnZDLGNBQWMsQ0E0RzFCO0FBNUdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWFpZC9tYWlkXCI7XHJcbmltcG9ydCB7IE1haWRMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tYWlkL21haWQtbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJvb21zXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yb29tcy9yb29tcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb21zL3Jvb21zLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9yb29tcy9yb29tcy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtSb29tU2VydmljZSwgTWFpZExpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vbXNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNlbGVjdGVkOiBudW1iZXI7XHJcbiAgICByb29tc0xpc3Q6IEFycmF5PFJvb20+ID0gW107XHJcbiAgICByb29vbSA9IFwiXCI7XHJcbiAgICBtYWlkOiBNYWlkO1xyXG4gICAgaXNDbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtYWlkTGlzdFNlcnZpY2U6IE1haWRMaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QgPSB0aGlzLnJvb21TZXJ2aWNlLmdldEFsbFJvb21zKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0WzJdLnN0YXR1cyA9IDE7XHJcblxyXG4gICAgICAgIGxldCBtYWlkSWQgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiKTtcclxuICAgICAgICBpZiAobWFpZElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpZCA9IHRoaXMubWFpZExpc3RTZXJ2aWNlLmdldEZyb21JZChtYWlkSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpZHNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNYWlkKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpZHNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gNjAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gOTAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IDgwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGFyZ3MuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVhdmUoKSB7XHJcbiAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PmZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpO1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJvb21zTGlzdFt0aGlzLnNlbGVjdGVkXS5zdGF0dXMgPSAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IHJhZExpc3RWaWV3ID0gPFJhZExpc3RWaWV3PmZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpO1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJvb21zTGlzdFt0aGlzLnNlbGVjdGVkXS5zdGF0dXMgPSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiYXRocm9vbUNsZWFuZWQocm9vbU51bWJlcjogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgYWxlcnQoXCJCYXRocm9vbSBpbiByb29tIDogXCIgKyByb29tTnVtYmVyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBiYXRocm9vbVN0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLmJhdGhyb29tX3N0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZFN0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLmJlZF9zdGF0dXMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLmJlZF9zdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS5iZWRfc3RhdHVzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvd2Vsc1N0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLnRvd2Vsc19zdGF0dXMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLnRvd2Vsc19zdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS50b3dlbHNfc3RhdHVzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19