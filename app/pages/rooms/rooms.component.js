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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFTekQ7SUFBb0Msa0NBQVU7SUFRMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1JLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFTekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FB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QUM7WUFDcEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxtQ0FBZSxDQUFDO1NBQzVDLENBQUM7eUNBU3dDLHlCQUFnQjtZQUNwQyxXQUFJO1lBQ0csMEJBQVc7WUFDUCxtQ0FBZTtZQUMxQixhQUFNO1lBQ08sd0JBQWlCO09BYnZDLGNBQWMsQ0E2RzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdHRCxDQUFvQyx3QkFBVSxHQTZHN0M7QUE3R1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb21cIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWlkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tYWlkL21haWRcIjtcclxuaW1wb3J0IHsgTWFpZExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21haWQvbWFpZC1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJvb21zXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yb29tcy9yb29tcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb21zL3Jvb21zLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9yb29tcy9yb29tcy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtSb29tU2VydmljZSwgTWFpZExpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vbXNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJvb21zOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBzZWxlY3RlZDogbnVtYmVyO1xyXG4gICAgcm9vbXNMaXN0OiBBcnJheTxSb29tPiA9IFtdO1xyXG4gICAgcm9vb20gPSBcIlwiO1xyXG4gICAgbWFpZDogTWFpZDtcclxuICAgIGlzQ2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbWFpZExpc3RTZXJ2aWNlOiBNYWlkTGlzdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9vbXMgPSB0aGlzLnJvb21TZXJ2aWNlLmdldEFsbFJvb21zKDMwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3RbMl0uc3RhdHVzID0gMTtcclxuXHJcbiAgICAgICAgbGV0IG1haWRJZCA9IGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIpO1xyXG4gICAgICAgIGlmIChtYWlkSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWlkID0gdGhpcy5tYWlkTGlzdFNlcnZpY2UuZ2V0RnJvbUlkKG1haWRJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU1haWQoKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSA2MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSA5MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gODAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gYXJncy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25MZWF2ZSgpIHtcclxuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FbnRlcigpIHtcclxuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJhdGhyb29tQ2xlYW5lZChyb29tTnVtYmVyOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBhbGVydChcIkJhdGhyb29tIGluIHJvb20gOiBcIiArIHJvb21OdW1iZXIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGJhdGhyb29tU3RhdHVzQ2hhbmdlKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnJvb21zTGlzdC5mb3JFYWNoKChyb29tOiBSb29tKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb29tLk51bWJlciA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLmJhdGhyb29tX3N0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZFN0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5OdW1iZXIgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9vbS5iZWRfc3RhdHVzID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS5iZWRfc3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmVkX3N0YXR1cyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b3dlbHNTdGF0dXNDaGFuZ2UoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0LmZvckVhY2goKHJvb206IFJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uTnVtYmVyID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb20udG93ZWxzX3N0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20udG93ZWxzX3N0YXR1cyA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLnRvd2Vsc19zdGF0dXMgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=