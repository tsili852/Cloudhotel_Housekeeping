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
    RoomsComponent.prototype.bathroomCleaned = function (roomNumber) {
        alert("Bathroom in room : " + roomNumber);
    };
    RoomsComponent.prototype.bedCleaned = function (roomNumber) {
        alert("Bed in room : " + roomNumber);
    };
    RoomsComponent.prototype.towelsCleaned = function (roomNumber) {
        alert("Towels in room : " + roomNumber);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9HO0FBQ3BHLGdDQUErQjtBQUUvQixzREFBK0Q7QUFFL0QsMkVBQTZFO0FBRTdFLCtEQUE2RDtBQUU3RCx5RUFBc0U7QUFHdEUsOENBQTRDO0FBRTVDLHNEQUFzRDtBQUN0RCx1REFBeUQ7QUFRekQsSUFBYSxjQUFjO0lBQVMsa0NBQVU7SUFPMUMsd0JBQW9CLGdCQUFrQyxFQUMxQyxJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLGlCQUFvQztRQUxoRCxZQU1RLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBUGUsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVmhELGVBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBQzVCLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxhQUFPLEdBQVksS0FBSyxDQUFDOztJQVNyQixDQUFDO0lBRUwsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMs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Tyx3QkFBaUI7R0FadkMsY0FBYyxDQXVFMUI7QUF2RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb21cIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWlkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tYWlkL21haWRcIjtcclxuaW1wb3J0IHsgTWFpZExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21haWQvbWFpZC1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicm9vbXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb21zL3Jvb21zLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcm9vbXMvcm9vbXMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3Jvb21zL3Jvb21zLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1Jvb21TZXJ2aWNlLCBNYWlkTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb29tc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VsZWN0ZWQ6IG51bWJlcjtcclxuICAgIHJvb21zTGlzdDogQXJyYXk8Um9vbT4gPSBbXTtcclxuICAgIHJvb29tID0gXCJcIjtcclxuICAgIG1haWQ6IE1haWQ7XHJcbiAgICBpc0NsZWFuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIG1haWRMaXN0U2VydmljZTogTWFpZExpc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0ID0gdGhpcy5yb29tU2VydmljZS5nZXRBbGxSb29tcygpO1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zTGlzdFsyXS5zdGF0dXMgPSAxO1xyXG5cclxuICAgICAgICBsZXQgbWFpZElkID0gYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJhY3RpdmVNYWlkSWRcIik7XHJcbiAgICAgICAgaWYgKG1haWRJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1haWQgPSB0aGlzLm1haWRMaXN0U2VydmljZS5nZXRGcm9tSWQobWFpZElkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haWRzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTWFpZCgpIHtcclxuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjdGl2ZU1haWRJZFwiLCBcIlwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haWRzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IDYwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDkwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSA4MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBhcmdzLmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxlYXZlKCkge1xyXG4gICAgICAgIGxldCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz4gZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgICAgIGxldCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz4gZnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0W3RoaXMuc2VsZWN0ZWRdLnN0YXR1cyA9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhdGhyb29tQ2xlYW5lZChyb29tTnVtYmVyOiBzdHJpbmcpIHtcclxuICAgICAgICBhbGVydChcIkJhdGhyb29tIGluIHJvb20gOiBcIiArIHJvb21OdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZENsZWFuZWQocm9vbU51bWJlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgYWxlcnQoXCJCZWQgaW4gcm9vbSA6IFwiICsgcm9vbU51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdG93ZWxzQ2xlYW5lZChyb29tTnVtYmVyOiBzdHJpbmcpIHtcclxuICAgICAgICBhbGVydChcIlRvd2VscyBpbiByb29tIDogXCIgKyByb29tTnVtYmVyKTtcclxuICAgIH1cclxufSJdfQ==