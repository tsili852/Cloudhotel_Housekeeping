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
var http_1 = require("@angular/http");
var config_1 = require("../../shared/config");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var fromRoot = require("../../reducers/index");
var RoomRepairsComponent = /** @class */ (function (_super) {
    __extends(RoomRepairsComponent, _super);
    function RoomRepairsComponent(routerExtensions, route, page, roomService, technitianListService, zone, store, repairActions, modalService, vcRef, http, changeDetectorRef) {
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
        _this.http = http;
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
    }
    RoomRepairsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        // this.repairs.subscribe(repairs => {
        //     if (repairs.length == 0) {
        //         this.onAddAnnouncement();
        //     }
        // });
    };
    RoomRepairsComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
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
    RoomRepairsComponent.prototype.onStart = function (repairID) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            hotelsn: config_1.Config.hotelSN,
            repairid: repairID,
            maintenanceid: null,
            description: null,
            technicianid: null,
            starttime: new Date(),
            endtime: null
        });
        this.http.post(config_1.Config.apiUrl + 'Repair', body, { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.store.dispatch(_this.repairActions.loadRepairs(_this.room.RoomID, _this.daysBefore));
            }
        });
    };
    RoomRepairsComponent.prototype.onFixed = function (repairID) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            hotelsn: config_1.Config.hotelSN,
            repairid: repairID,
            maintenanceid: null,
            description: null,
            technicianid: null,
            starttime: null,
            endtime: new Date()
        });
        this.http.post(config_1.Config.apiUrl + 'Repair', body, { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.store.dispatch(_this.repairActions.loadRepairs(_this.room.RoomID, _this.daysBefore));
            }
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
            http_1.Http,
            core_1.ChangeDetectorRef])
    ], RoomRepairsComponent);
    return RoomRepairsComponent;
}(drawer_page_1.DrawerPage));
exports.RoomRepairsComponent = RoomRepairsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLHNDQUE4QztBQUM5Qyw4Q0FBNkM7QUFDN0MsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLCtDQUFnRDtBQVVoRDtJQUEwQyx3Q0FBVTtJQU9oRCw4QkFBb0IsZ0JBQWtDLEVBQzFDLEtBQXFCLEVBQ3JCLElBQVUsRUFDVixXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsSUFBWSxFQUNaLEtBQXNCLEVBQ3RCLGFBQTRCLEVBQzVCLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLElBQVUsRUFDVixpQkFBb0M7UUFYaEQsWUFZSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQVczQjtRQXZCbUIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFdBQUssR0FBTCxLQUFLLENB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d0MseUJBQWdCO1lBQ25DLHVCQUFjO1lBQ2YsV0FBSTtZQUNHLDBCQUFXO1lBQ0QsK0NBQXFCO1lBQ3RDLGFBQU07WUFDTCxhQUFLO1lBQ0cscUJBQWE7WUFDZCxpQ0FBa0I7WUFDekIsdUJBQWdCO1lBQ2pCLFdBQUk7WUFDUyx3QkFBaUI7T0FsQnZDLG9CQUFvQixDQWlJaEM7SUFBRCwyQkFBQztDQUFBLEFBaklELENBQTBDLHdCQUFVLEdBaUluRDtBQWpJWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb21cIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXBhaXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3JlcGFpci9yZXBhaXJcIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW5MaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuLWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJlcGFpckFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWxcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyb29tLXJlcGFpcnNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuaHRtbFwiLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbQWRkUmVwYWlyTW9kYWxDb21wb25lbnRdLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1RlY2huaXRpYW5MaXN0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tUmVwYWlyc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VsZWN0ZWROYXZCdXR0b246IG51bWJlciA9IDI7XHJcbiAgICByb29tOiBSb29tO1xyXG4gICAgcmVwYWlyczogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgaXNMb2FkaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgZGF5c0JlZm9yZSA9IDMwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuTGlzdFNlcnZpY2U6IFRlY2huaXRpYW5MaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSByZXBhaXJBY3Rpb25zOiBSZXBhaXJBY3Rpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBKc29uUm9vbSA9IHBhcmFtc1sncm9vbSddO1xyXG4gICAgICAgICAgICB0aGlzLnJvb20gPSA8Um9vbT5KU09OLnBhcnNlKEpzb25Sb29tKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGFpcnMgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlycyk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlyc0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnJlcGFpcnMuc3Vic2NyaWJlKHJlcGFpcnMgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVwYWlycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkFkZEFubm91bmNlbWVudCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QZW5kaW5nU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXlzQmVmb3JlID0gMDtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFsbFNlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROYXZCdXR0b24gPSAyO1xyXG4gICAgICAgIHRoaXMuZGF5c0JlZm9yZSA9IDMwO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkQW5ub3VuY2VtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWxWaWV3KHRoaXMucm9vbS5Sb29tSUQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KHJlcGFpcklEOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaG90ZWxzbjogQ29uZmlnLmhvdGVsU04sXHJcbiAgICAgICAgICAgIHJlcGFpcmlkOiByZXBhaXJJRCxcclxuICAgICAgICAgICAgbWFpbnRlbmFuY2VpZDogbnVsbCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogbnVsbCxcclxuICAgICAgICAgICAgc3RhcnR0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBlbmR0aW1lOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyAnUmVwYWlyJyxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaXhlZChyZXBhaXJJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxyXG4gICAgICAgICAgICByZXBhaXJpZDogcmVwYWlySUQsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbnVsbCxcclxuICAgICAgICAgICAgZW5kdGltZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ1JlcGFpcicsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTW9kYWxWaWV3KHJvb21OdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgIGNvbnRleHQ6IHtyb29tTnVtYmVyOiByb29tTnVtYmVyfSxcclxuICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLCAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEFkZFJlcGFpck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBhbGVydChcIltSb29tIFJlcGFpcnNdIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=