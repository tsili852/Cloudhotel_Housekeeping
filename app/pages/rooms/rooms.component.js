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
var RoomsComponent = /** @class */ (function (_super) {
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
        this.rooms = this.roomService.getAllRooms(30);
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
            if (room.Number === id) {
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
            if (room.Number === id) {
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
            if (room.Number === id) {
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
    return RoomsComponent;
}(drawer_page_1.DrawerPage));
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFTekQ7SUFBb0Msa0NBQVU7SUFRMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1JLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFTekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FB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QUM7WUFDcEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxtQ0FBZSxDQUFDO1NBQzVDLENBQUM7eUNBU3dDLHlCQUFnQjtZQUNwQyxXQUFJO1lBQ0csMEJBQVc7WUFDUCxtQ0FBZTtZQUMxQixhQUFNO1lBQ08sd0JBQWlCO09BYnZDLGNBQWMsQ0E2RzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdHRCxDQUFvQyx3QkFBVSxHQTZHN0M7QUE3R1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb21cIjtcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlJztcbmltcG9ydCB7IE1haWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haWQvbWFpZFwiO1xuaW1wb3J0IHsgTWFpZExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21haWQvbWFpZC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyb29tc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb21zL3Jvb21zLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb21zL3Jvb21zLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9yb29tcy9yb29tcy5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbUm9vbVNlcnZpY2UsIE1haWRMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUm9vbXNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByb29tczogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHNlbGVjdGVkOiBudW1iZXI7XG4gICAgcm9vbXNMaXN0OiBBcnJheTxSb29tPiA9IFtdO1xuICAgIHJvb29tID0gXCJcIjtcbiAgICBtYWlkOiBNYWlkO1xuICAgIGlzQ2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvb21TZXJ2aWNlOiBSb29tU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtYWlkTGlzdFNlcnZpY2U6IE1haWRMaXN0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb21zID0gdGhpcy5yb29tU2VydmljZS5nZXRBbGxSb29tcygzMCk7XG5cbiAgICAgICAgdGhpcy5yb29tc0xpc3RbMl0uc3RhdHVzID0gMTtcblxuICAgICAgICBsZXQgbWFpZElkID0gYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIik7XG4gICAgICAgIGlmIChtYWlkSWQpIHtcbiAgICAgICAgICAgIHRoaXMubWFpZCA9IHRoaXMubWFpZExpc3RTZXJ2aWNlLmdldEZyb21JZChtYWlkSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VNYWlkKCkge1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiLCBcIlwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IDYwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSA5MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IDgwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBhcmdzLmluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKCkge1xuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICB9XG5cbiAgICAvLyBiYXRocm9vbUNsZWFuZWQocm9vbU51bWJlcjogc3RyaW5nKSB7XG4gICAgLy8gICAgIGFsZXJ0KFwiQmF0aHJvb20gaW4gcm9vbSA6IFwiICsgcm9vbU51bWJlcik7XG4gICAgLy8gfVxuXG4gICAgYmF0aHJvb21TdGF0dXNDaGFuZ2UoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvb21zTGlzdC5mb3JFYWNoKChyb29tOiBSb29tKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9vbS5OdW1iZXIgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLmJhdGhyb29tX3N0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLmJhdGhyb29tX3N0YXR1cyA9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLmJhdGhyb29tX3N0YXR1cyA9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmVkU3RhdHVzQ2hhbmdlKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvb20uTnVtYmVyID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vbS5iZWRfc3RhdHVzID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmVkX3N0YXR1cyA9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLmJlZF9zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvd2Vsc1N0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm9vbXNMaXN0LmZvckVhY2goKHJvb206IFJvb20pID0+IHtcbiAgICAgICAgICAgIGlmIChyb29tLk51bWJlciA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb20udG93ZWxzX3N0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLnRvd2Vsc19zdGF0dXMgPSAzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS50b3dlbHNfc3RhdHVzID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19