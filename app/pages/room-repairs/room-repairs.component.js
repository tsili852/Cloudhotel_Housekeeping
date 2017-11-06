"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var room_service_1 = require("../../shared/room/room.service");
var technitian_list_service_1 = require("../../shared/technitian/technitian-list.service");
var drawer_page_1 = require("../drawer.page");
var store_1 = require("@ngrx/store");
var index_1 = require("../../actions/index");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var add_repair_modal_1 = require("../../components/add-repair-modal/add-repair-modal");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var fromRoot = require("../../reducers/index");
var RoomRepairsComponent = /** @class */ (function (_super) {
    __extends(RoomRepairsComponent, _super);
    function RoomRepairsComponent(routerExtensions, route, page, roomService, technitianListService, zone, store, repairActions, modalService, vcRef, changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.route = route;
        _this.page = page;
        _this.roomService = roomService;
        _this.technitianListService = technitianListService;
        _this.zone = zone;
        _this.store = store;
        _this.repairActions = repairActions;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.selectedNavButton = 2;
        _this.daysBefore = 30;
        _this.route.queryParams.subscribe(function (params) {
            var JsonRoom = params['room'];
            _this.room = JSON.parse(JsonRoom);
        });
        store.dispatch(repairActions.loadRepairs(_this.room.RoomID, _this.daysBefore));
        _this.repairs = store.select(fromRoot.getRepairs);
        _this.isLoading = store.select(fromRoot.getRepairsLoading);
        return _this;
        // this.repairs = new Array<Repair>();
        // this.repairs.push({RepairID: 0, Description: "Λάμπα καμένη", TaskName: "", StartAt: null, EndAt: null});
        // this.repairs.push({RepairID: 1, Description: "Καλοριφέρ", TaskName: "", StartAt: new Date(), EndAt: null});
        // this.repairs.push({RepairID: 1, Description: "Πέφτει συνεχώς το ρεύμα", TaskName: "", StartAt: new Date(), EndAt: new Date()});
        // this.repairs.push({RepairID: 1, Description: "Η τηλεόραση δεν δείχνει τίποτα", TaskName: "", StartAt: new Date(), EndAt: new Date()});
        // this.repairs.push({RepairID: 1, Description: "Χερουλι της πόρτας του μπάνιου", TaskName: "", StartAt: new Date(), EndAt: new Date()});
        // this.repairs.push({RepairID: 1, Description: "Το καζανάκι τρέχει", TaskName: "", StartAt: new Date(), EndAt: new Date()});
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
        // this.rooms = store.select(fromRoot.getRooms);
        // this.isLoading = store.select(fromRoot.getRoomsLoading);
    }
    RoomRepairsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    RoomRepairsComponent.prototype.onPendingSelected = function () {
        this.selectedNavButton = 1;
        this.daysBefore = 0;
        this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
    };
    RoomRepairsComponent.prototype.onAllSelected = function () {
        this.selectedNavButton = 2;
        this.daysBefore = 30;
        this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
    };
    RoomRepairsComponent.prototype.onAddAnnouncement = function () {
        var _this = this;
        this.createModalView(this.room.RoomID)
            .then(function () {
            _this.store.dispatch(_this.repairActions.loadRepairs(_this.room.RoomID, _this.daysBefore));
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    RoomRepairsComponent.prototype.createModalView = function (roomNumber) {
        var options = {
            viewContainerRef: this.vcRef,
            context: { roomNumber: roomNumber },
            fullscreen: false,
        };
        return this.modalService.showModal(add_repair_modal_1.AddRepairModalComponent, options);
    };
    RoomRepairsComponent.prototype.handleError = function (error) {
        alert("[Room Repairs] Error: " + error);
        console.dir(error);
    };
    RoomRepairsComponent = __decorate([
        core_1.Component({
            selector: "room-repairs",
            templateUrl: "pages/room-repairs/room-repairs.html",
            entryComponents: [add_repair_modal_1.AddRepairModalComponent],
            styleUrls: ["pages/room-repairs/room-repairs-common.css", "pages/room-repairs/room-repairs.css"],
            providers: [technitian_list_service_1.TechnitianListService]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            page_1.Page,
            room_service_1.RoomService,
            technitian_list_service_1.TechnitianListService,
            core_1.NgZone,
            store_1.Store,
            index_1.RepairActions,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_1.ChangeDetectorRef])
    ], RoomRepairsComponent);
    return RoomRepairsComponent;
}(drawer_page_1.DrawerPage));
exports.RoomRepairsComponent = RoomRepairsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLDZFQUErRTtBQUMvRSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUNuRywrQ0FBZ0Q7QUFVaEQ7SUFBMEMsd0NBQVU7SUFPaEQsOEJBQW9CLGdCQUFrQyxFQUMxQyxLQUFxQixFQUNyQixJQUFVLEVBQ1YsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLElBQVksRUFDWixLQUFzQixFQUN0QixhQUE0QixFQUM1QixZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixpQkFBb0M7UUFWaEQsWUFXSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQXdCM0I7UUFuQ21CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1C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Q0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFuRlEsb0JBQW9CO1FBUmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELGVBQWUsRUFBRSxDQUFDLDBDQUF1QixDQUFDO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLHFDQUFxQyxDQUFDO1lBQ2hHLFNBQVMsRUFBRSxDQUFDLCtDQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBU3dDLHlCQUFnQjtZQUNuQyx1QkFBYztZQUNmLFdBQUk7WUFDRywwQkFBVztZQUNELCtDQUFxQjtZQUN0QyxhQUFNO1lBQ0wsYUFBSztZQUNHLHFCQUFhO1lBQ2QsaUNBQWtCO1lBQ3pCLHVCQUFnQjtZQUNKLHdCQUFpQjtPQWpCdkMsb0JBQW9CLENBb0ZoQztJQUFELDJCQUFDO0NBQUEsQUFwRkQsQ0FBMEMsd0JBQVUsR0FvRm5EO0FBcEZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IFJlcGFpciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcmVwYWlyL3JlcGFpclwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW5cIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW4tbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUmVwYWlyQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBBZGRSZXBhaXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbFwiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicm9vbS1yZXBhaXJzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLmh0bWxcIixcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0FkZFJlcGFpck1vZGFsQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy1jb21tb24uY3NzXCIsIFwicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtUZWNobml0aWFuTGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVJlcGFpcnNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNlbGVjdGVkTmF2QnV0dG9uOiBudW1iZXIgPSAyO1xyXG4gICAgcm9vbTogUm9vbTtcclxuICAgIHJlcGFpcnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIGlzTG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIGRheXNCZWZvcmUgPSAzMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGVjaG5pdGlhbkxpc3RTZXJ2aWNlOiBUZWNobml0aWFuTGlzdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgcmVwYWlyQWN0aW9uczogUmVwYWlyQWN0aW9ucyxcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBKc29uUm9vbSA9IHBhcmFtc1sncm9vbSddO1xyXG4gICAgICAgICAgICB0aGlzLnJvb20gPSA8Um9vbT5KU09OLnBhcnNlKEpzb25Sb29tKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGFpcnMgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlycyk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlyc0xvYWRpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMucmVwYWlycyA9IG5ldyBBcnJheTxSZXBhaXI+KCk7XHJcbiAgICAgICAgLy8gdGhpcy5yZXBhaXJzLnB1c2goe1JlcGFpcklEOiAwLCBEZXNjcmlwdGlvbjogXCLOm86szrzPgM6xIM66zrHOvM6tzr3Ot1wiLCBUYXNrTmFtZTogXCJcIiwgU3RhcnRBdDogbnVsbCwgRW5kQXQ6IG51bGx9KTtcclxuICAgICAgICAvLyB0aGlzLnJlcGFpcnMucHVzaCh7UmVwYWlySUQ6IDEsIERlc2NyaXB0aW9uOiBcIs6azrHOu86/z4HOuc+Gzq3PgVwiLCBUYXNrTmFtZTogXCJcIiwgU3RhcnRBdDogbmV3IERhdGUoKSwgRW5kQXQ6IG51bGx9KTtcclxuICAgICAgICAvLyB0aGlzLnJlcGFpcnMucHVzaCh7UmVwYWlySUQ6IDEsIERlc2NyaXB0aW9uOiBcIs6gzq3Phs+EzrXOuSDPg8+Fzr3Otc+Hz47PgiDPhM6/IM+BzrXPjc68zrFcIiwgVGFza05hbWU6IFwiXCIsIFN0YXJ0QXQ6IG5ldyBEYXRlKCksIEVuZEF0OiBuZXcgRGF0ZSgpfSk7XHJcbiAgICAgICAgLy8gdGhpcy5yZXBhaXJzLnB1c2goe1JlcGFpcklEOiAxLCBEZXNjcmlwdGlvbjogXCLOlyDPhM63zrvOtc+Mz4HOsc+DzrcgzrTOtc69IM60zrXOr8+Hzr3Otc65IM+Ezq/PgM6/z4TOsVwiLCBUYXNrTmFtZTogXCJcIiwgU3RhcnRBdDogbmV3IERhdGUoKSwgRW5kQXQ6IG5ldyBEYXRlKCl9KTtcclxuICAgICAgICAvLyB0aGlzLnJlcGFpcnMucHVzaCh7UmVwYWlySUQ6IDEsIERlc2NyaXB0aW9uOiBcIs6nzrXPgc6/z4XOu865IM+EzrfPgiDPgM+Mz4HPhM6xz4Igz4TOv8+FIM68z4DOrM69zrnOv8+FXCIsIFRhc2tOYW1lOiBcIlwiLCBTdGFydEF0OiBuZXcgRGF0ZSgpLCBFbmRBdDogbmV3IERhdGUoKX0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVwYWlycy5wdXNoKHtSZXBhaXJJRDogMSwgRGVzY3JpcHRpb246IFwizqTOvyDOus6xzrbOsc69zqzOus65IM+Ez4HOrc+HzrXOuVwiLCBUYXNrTmFtZTogXCJcIiwgU3RhcnRBdDogbmV3IERhdGUoKSwgRW5kQXQ6IG5ldyBEYXRlKCl9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJvb21BY3Rpb25zLmxvYWRSb29tcyh0aGlzLnNraXBSb29tcywgdGhpcy50YWtlUm9vbXMsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvb21zID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFJvb21zKTtcclxuICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRSb29tc0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblBlbmRpbmdTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTmF2QnV0dG9uID0gMTtcclxuICAgICAgICB0aGlzLmRheXNCZWZvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDI7XHJcbiAgICAgICAgdGhpcy5kYXlzQmVmb3JlID0gMzA7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRBbm5vdW5jZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFZpZXcodGhpcy5yb29tLlJvb21JRClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTW9kYWxWaWV3KHJvb21OdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgIGNvbnRleHQ6IHtyb29tTnVtYmVyOiByb29tTnVtYmVyfSxcclxuICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLCAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEFkZFJlcGFpck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBhbGVydChcIltSb29tIFJlcGFpcnNdIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=