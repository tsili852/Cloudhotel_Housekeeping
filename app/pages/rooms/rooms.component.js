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
        this.rooms = this.roomService.getAllRooms();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFTekQ7SUFBb0Msa0NBQVU7SUFRMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1JLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFTekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FB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QUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLG1DQUFlLENBQUM7U0FDNUMsQ0FBQzt5Q0FTd0MseUJBQWdCO1lBQ3BDLFdBQUk7WUFDRywwQkFBVztZQUNQLG1DQUFlO1lBQzFCLGFBQU07WUFDTyx3QkFBaUI7T0FidkMsY0FBYyxDQTZHMUI7SUFBRCxxQkFBQztDQUFBLEFBN0dELENBQW9DLHdCQUFVLEdBNkc3QztBQTdHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haWQvbWFpZFwiO1xyXG5pbXBvcnQgeyBNYWlkTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWFpZC9tYWlkLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicm9vbXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb21zL3Jvb21zLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcm9vbXMvcm9vbXMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3Jvb21zL3Jvb21zLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1Jvb21TZXJ2aWNlLCBNYWlkTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb29tc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcm9vbXM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHNlbGVjdGVkOiBudW1iZXI7XHJcbiAgICByb29tc0xpc3Q6IEFycmF5PFJvb20+ID0gW107XHJcbiAgICByb29vbSA9IFwiXCI7XHJcbiAgICBtYWlkOiBNYWlkO1xyXG4gICAgaXNDbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtYWlkTGlzdFNlcnZpY2U6IE1haWRMaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb29tcyA9IHRoaXMucm9vbVNlcnZpY2UuZ2V0QWxsUm9vbXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3RbMl0uc3RhdHVzID0gMTtcclxuXHJcbiAgICAgICAgbGV0IG1haWRJZCA9IGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWN0aXZlTWFpZElkXCIpO1xyXG4gICAgICAgIGlmIChtYWlkSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWlkID0gdGhpcy5tYWlkTGlzdFNlcnZpY2UuZ2V0RnJvbUlkKG1haWRJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU1haWQoKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSA2MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSA5MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gODAgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gYXJncy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25MZWF2ZSgpIHtcclxuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FbnRlcigpIHtcclxuICAgICAgICBsZXQgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJhdGhyb29tQ2xlYW5lZChyb29tTnVtYmVyOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBhbGVydChcIkJhdGhyb29tIGluIHJvb20gOiBcIiArIHJvb21OdW1iZXIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGJhdGhyb29tU3RhdHVzQ2hhbmdlKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnJvb21zTGlzdC5mb3JFYWNoKChyb29tOiBSb29tKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb29tLk51bWJlciA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tLmJhdGhyb29tX3N0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmF0aHJvb21fc3RhdHVzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZFN0YXR1c0NoYW5nZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb29tc0xpc3QuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5OdW1iZXIgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9vbS5iZWRfc3RhdHVzID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbS5iZWRfc3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20uYmVkX3N0YXR1cyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b3dlbHNTdGF0dXNDaGFuZ2UoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0LmZvckVhY2goKHJvb206IFJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uTnVtYmVyID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb20udG93ZWxzX3N0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20udG93ZWxzX3N0YXR1cyA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLnRvd2Vsc19zdGF0dXMgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=