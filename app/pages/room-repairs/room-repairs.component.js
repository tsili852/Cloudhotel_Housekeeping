"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var room_service_1 = require("../../shared/room/room.service");
var technitian_list_service_1 = require("../../shared/technitian/technitian-list.service");
var drawer_page_1 = require("../drawer.page");
var store_1 = require("@ngrx/store");
var index_1 = require("../../actions/index");
var RoomRepairsComponent = /** @class */ (function (_super) {
    __extends(RoomRepairsComponent, _super);
    function RoomRepairsComponent(routerExtensions, page, roomService, technitianListService, zone, store, roomActions, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.roomService = roomService;
        _this.technitianListService = technitianListService;
        _this.zone = zone;
        _this.store = store;
        _this.roomActions = roomActions;
        _this.changeDetectorRef = changeDetectorRef;
        _this.roomNumber = 12;
        _this.repairs = [];
        _this.repairs = new Array();
        _this.repairs.push({ RepairID: 0, Description: "Λάμπα καμένη", TaskName: "", StartAt: null, EndAt: null });
        _this.repairs.push({ RepairID: 1, Description: "Καλοριφέρ", TaskName: "", StartAt: new Date(), EndAt: null });
        _this.repairs.push({ RepairID: 1, Description: "Πέφτει συνεχώς το ρεύμα", TaskName: "", StartAt: new Date(), EndAt: new Date() });
        return _this;
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
        // this.rooms = store.select(fromRoot.getRooms);
        // this.isLoading = store.select(fromRoot.getRoomsLoading);
    }
    RoomRepairsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    RoomRepairsComponent.prototype.onPendingSelected = function () {
        this.selectedNavButton = 1;
        // this.daysBefore = 0;
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    };
    RoomRepairsComponent.prototype.onAllSelected = function () {
        this.selectedNavButton = 2;
        // this.daysBefore = 30;
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    };
    RoomRepairsComponent = __decorate([
        core_1.Component({
            selector: "room-repairs",
            templateUrl: "pages/room-repairs/room-repairs.html",
            styleUrls: ["pages/room-repairs/room-repairs-common.css", "pages/room-repairs/room-repairs.css"],
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
    ], RoomRepairsComponent);
    return RoomRepairsComponent;
}(drawer_page_1.DrawerPage));
exports.RoomRepairsComponent = RoomRepairsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0c7QUFDcEcsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUcvRCwrREFBNkQ7QUFHN0QsMkZBQXdGO0FBR3hGLDhDQUE0QztBQU01QyxxQ0FBb0M7QUFDcEMsNkNBQWtEO0FBWWxEO0lBQTBDLHdDQUFVO0lBS2hELDhCQUFvQixnQkFBa0MsRUFDMUMsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxJQUFZLEVBQ1osS0FBc0IsRUFDdEIsV0FBd0IsRUFDeEIsaUJBQW9DO1FBUGhELFlBUUksa0JBQU0saUJBQWlCLENBQUMsU0FXM0I7UUFuQm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFWaEQsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsYUFBTyxHQUFrQixFQUFFLENBQUM7UUFZeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN4RyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzNHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUM7O1FBRS9ILG9HQUFvRztRQUVwRyxnREFBZ0Q7UUFDaEQsMkRBQTJEO0lBQy9ELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLHVCQUF1QjtRQUN2QixvR0FBb0c7SUFDeEcsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLHdCQUF3QjtRQUN4QixvR0FBb0c7SUFDeEcsQ0FBQztJQXhDUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUUscUNBQXFDLENBQUM7WUFDaEcsU0FBUyxFQUFFLENBQUMsK0NBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FPd0MseUJBQWdCO1lBQ3BDLFdBQUk7WUFDRywwQkFBVztZQUNELCtDQUFxQjtZQUN0QyxhQUFNO1lBQ0wsYUFBSztZQUNDLG1CQUFXO1lBQ0wsd0JBQWlCO09BWnZDLG9CQUFvQixDQXlDaEM7SUFBRCwyQkFBQztDQUFBLEFBekNELENBQTBDLHdCQUFVLEdBeUNuRDtBQXpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4XCI7XHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XHJcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJvb20tcmVwYWlyc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkxpc3RTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21SZXBhaXJzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzZWxlY3RlZE5hdkJ1dHRvbjogbnVtYmVyO1xyXG4gICAgcm9vbU51bWJlcjogbnVtYmVyID0gMTI7XHJcbiAgICByZXBhaXJzOiBBcnJheTxSZXBhaXI+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvb21TZXJ2aWNlOiBSb29tU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5MaXN0U2VydmljZTogVGVjaG5pdGlhbkxpc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgICAgICBwcml2YXRlIHJvb21BY3Rpb25zOiBSb29tQWN0aW9ucyxcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlcGFpcnMgPSBuZXcgQXJyYXk8UmVwYWlyPigpO1xyXG4gICAgICAgIHRoaXMucmVwYWlycy5wdXNoKHtSZXBhaXJJRDogMCwgRGVzY3JpcHRpb246IFwizpvOrM68z4DOsSDOus6xzrzOrc69zrdcIiwgVGFza05hbWU6IFwiXCIsIFN0YXJ0QXQ6IG51bGwsIEVuZEF0OiBudWxsfSk7XHJcbiAgICAgICAgdGhpcy5yZXBhaXJzLnB1c2goe1JlcGFpcklEOiAxLCBEZXNjcmlwdGlvbjogXCLOms6xzrvOv8+BzrnPhs6tz4FcIiwgVGFza05hbWU6IFwiXCIsIFN0YXJ0QXQ6IG5ldyBEYXRlKCksIEVuZEF0OiBudWxsfSk7XHJcbiAgICAgICAgdGhpcy5yZXBhaXJzLnB1c2goe1JlcGFpcklEOiAxLCBEZXNjcmlwdGlvbjogXCLOoM6tz4bPhM61zrkgz4PPhc69zrXPh8+Oz4Igz4TOvyDPgc61z43OvM6xXCIsIFRhc2tOYW1lOiBcIlwiLCBTdGFydEF0OiBuZXcgRGF0ZSgpLCBFbmRBdDogbmV3IERhdGUoKX0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucm9vbUFjdGlvbnMubG9hZFJvb21zKHRoaXMuc2tpcFJvb21zLCB0aGlzLnRha2VSb29tcywgdGhpcy5kYXlzQmVmb3JlKSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucm9vbXMgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Um9vbXMpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFJvb21zTG9hZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGVuZGluZ1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROYXZCdXR0b24gPSAxO1xyXG4gICAgICAgIC8vIHRoaXMuZGF5c0JlZm9yZSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJvb21BY3Rpb25zLmxvYWRSb29tcyh0aGlzLnNraXBSb29tcywgdGhpcy50YWtlUm9vbXMsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDI7XHJcbiAgICAgICAgLy8gdGhpcy5kYXlzQmVmb3JlID0gMzA7XHJcbiAgICAgICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJvb21BY3Rpb25zLmxvYWRSb29tcyh0aGlzLnNraXBSb29tcywgdGhpcy50YWtlUm9vbXMsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG59Il19