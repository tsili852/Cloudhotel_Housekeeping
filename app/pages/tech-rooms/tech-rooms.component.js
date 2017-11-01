"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var applicationSettings = require("tns-core-modules/application-settings");
var room_service_1 = require("../../shared/room/room.service");
var technitian_list_service_1 = require("../../shared/technitian/technitian-list.service");
var drawer_page_1 = require("../drawer.page");
var store_1 = require("@ngrx/store");
var index_1 = require("../../actions/index");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var fromRoot = require("../../reducers/index");
var TechRoomsComponent = /** @class */ (function (_super) {
    __extends(TechRoomsComponent, _super);
    function TechRoomsComponent(routerExtensions, page, roomService, technitianListService, zone, store, roomActions, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.roomService = roomService;
        _this.technitianListService = technitianListService;
        _this.zone = zone;
        _this.store = store;
        _this.roomActions = roomActions;
        _this.changeDetectorRef = changeDetectorRef;
        _this.skipRooms = 0;
        _this.takeRooms = 20;
        _this.selectedNavButton = 1;
        _this.roomsList = [];
        _this.rooom = "";
        _this.isClean = false;
        _this.store.dispatch(_this.roomActions.loadRooms(_this.skipRooms, _this.takeRooms));
        _this.rooms = store.select(fromRoot.getRooms);
        _this.isLoading = store.select(fromRoot.getRoomsLoading);
        return _this;
    }
    TechRoomsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        // this.rooms = this.roomService.getAllRooms();
        // let techId = applicationSettings.getString("activeTechnitianId");
        // if (techId) {
        //     this.technitian = this.technitianListService.getFromId(techId);
        // } else {
        //     this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
        // }
    };
    TechRoomsComponent.prototype.changeTechnitian = function () {
        applicationSettings.setString("activeTechnitian", "");
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    };
    TechRoomsComponent.prototype.onRepairsSelected = function () {
        this.selectedNavButton = 1;
    };
    TechRoomsComponent.prototype.onAllSelected = function () {
        this.selectedNavButton = 2;
    };
    TechRoomsComponent = __decorate([
        core_1.Component({
            selector: "tech-rooms",
            templateUrl: "pages/tech-rooms/tech-rooms.html",
            styleUrls: ["pages/tech-rooms/tech-rooms-common.css", "pages/tech-rooms/tech-rooms.css"],
            providers: [technitian_list_service_1.TechnitianListService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            room_service_1.RoomService,
            technitian_list_service_1.TechnitianListService,
            core_1.NgZone,
            store_1.Store,
            index_1.RoomActions,
            core_1.ChangeDetectorRef])
    ], TechRoomsComponent);
    return TechRoomsComponent;
}(drawer_page_1.DrawerPage));
exports.TechRoomsComponent = TechRoomsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaC1yb29tcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWNoLXJvb21zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRyxnQ0FBK0I7QUFFL0Isc0RBQStEO0FBRS9ELDJFQUE2RTtBQUU3RSwrREFBNkQ7QUFFN0QsMkZBQXdGO0FBR3hGLDhDQUE0QztBQU01QyxxQ0FBb0M7QUFDcEMsNkNBQWtEO0FBQ2xELDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFDL0UsK0NBQWdEO0FBUWhEO0lBQXdDLHNDQUFVO0lBYTlDLDRCQUFvQixnQkFBa0MsRUFDMUMsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxJQUFZLEVBQ1osS0FBc0IsRUFDdEIsV0FBd0IsRUFDeEIsaUJBQW9DO1FBUGhELFlBUUksa0JBQU0saUJBQWlCLENBQUMsU0FNM0I7UUFkbUIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWpCaEQsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUd0QixlQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsYUFBTyxHQUFZLEtBQUssQ0FBQztRQVlyQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWhGLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7SUFDNUQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsK0NBQStDO1FBRS9DLG9FQUFvRTtRQUNwRSxnQkFBZ0I7UUFDaEIsc0VBQXNFO1FBQ3RFLFdBQVc7UUFDWCxnRkFBZ0Y7UUFDaEYsSUFBSTtJQUNSLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFwRFEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxFQUFFLGlDQUFpQyxDQUFDO1lBQ3hGLFNBQVMsRUFBRSxDQUFDLCtDQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBY3dDLHlCQUFnQjtZQUNwQyxXQUFJO1lBQ0csMEJBQVc7WUFDRCwrQ0FBcUI7WUFDdEMsYUFBTTtZQUNMLGFBQUs7WUFDQyxtQkFBVztZQUNMLHdCQUFpQjtPQXBCdkMsa0JBQWtCLENBZ0Y5QjtJQUFELHlCQUFDO0NBQUEsQUFoRkQsQ0FBd0Msd0JBQVUsR0FnRmpEO0FBaEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XHJcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRlY2gtcm9vbXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RlY2gtcm9vbXMvdGVjaC1yb29tcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3RlY2gtcm9vbXMvdGVjaC1yb29tcy1jb21tb24uY3NzXCIsIFwicGFnZXMvdGVjaC1yb29tcy90ZWNoLXJvb21zLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1RlY2huaXRpYW5MaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlY2hSb29tc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcm9vbXM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIGlzTG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIHNraXBSb29tczogbnVtYmVyID0gMDtcclxuICAgIHRha2VSb29tczogbnVtYmVyID0gMjA7XHJcbiAgICBzZWxlY3RlZE5hdkJ1dHRvbiA9IDE7XHJcbiAgICBcclxuICAgIHNlbGVjdGVkOiBudW1iZXI7XHJcbiAgICByb29tc0xpc3Q6IEFycmF5PFJvb20+ID0gW107XHJcbiAgICByb29vbSA9IFwiXCI7XHJcbiAgICB0ZWNobml0aWFuOiBUZWNobml0aWFuO1xyXG4gICAgaXNDbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuTGlzdFNlcnZpY2U6IFRlY2huaXRpYW5MaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSByb29tQWN0aW9uczogUm9vbUFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJvb21BY3Rpb25zLmxvYWRSb29tcyh0aGlzLnNraXBSb29tcywgdGhpcy50YWtlUm9vbXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb29tcyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRSb29tcyk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Um9vbXNMb2FkaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5yb29tcyA9IHRoaXMucm9vbVNlcnZpY2UuZ2V0QWxsUm9vbXMoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRlY2hJZCA9IGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWN0aXZlVGVjaG5pdGlhbklkXCIpO1xyXG4gICAgICAgIC8vIGlmICh0ZWNoSWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZWNobml0aWFuID0gdGhpcy50ZWNobml0aWFuTGlzdFNlcnZpY2UuZ2V0RnJvbUlkKHRlY2hJZCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNobml0aWFuc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRlY2huaXRpYW4oKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY3RpdmVUZWNobml0aWFuXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaG5pdGlhbnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVwYWlyc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROYXZCdXR0b24gPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgLy8gICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IDYwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAvLyAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDkwICogbGF5b3V0LmdldERpc3BsYXlEZW5zaXR5KCk7XHJcbiAgICAvLyAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSA4MCAqIGxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2VsZWN0ZWQgPSBhcmdzLmluZGV4O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBvbkxlYXZlKCkge1xyXG4gICAgLy8gICAgIGxldCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz5mcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKTtcclxuICAgIC8vICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMDtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgcmFkTGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgLy8gICAgIGxldCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz5mcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJyYWRsaXN0dmlld1wiKTtcclxuICAgIC8vICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yb29tc0xpc3RbdGhpcy5zZWxlY3RlZF0uc3RhdHVzID0gMTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XHJcbiAgICAvLyB9XHJcbn0iXX0=