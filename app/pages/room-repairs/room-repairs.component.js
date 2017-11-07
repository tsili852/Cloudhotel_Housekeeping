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
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
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
    RoomRepairsComponent.prototype.onChange = function (repairID) {
        // this.createChangeModalView(this.room.RoomID, repairID)
        // .then(() => {
        //     this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
        // })
        // .catch((err) => {
        //     this.handleError(err);
        // });
        // TNSFancyAlert.showInfo("Change the description", "Just type anythinng and hit save", "Save");
        var initialValue = null;
        nativescript_fancyalert_1.TNSFancyAlert.showTextField('Enter your name', initialValue, new nativescript_fancyalert_1.TNSFancyAlertButton({ label: 'Save', action: function (value) { console.log("User entered " + value); } }), undefined, undefined, 'User Input?', "Yeah, sure we can.", 'Ok, lots of options.');
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
    RoomRepairsComponent.prototype.createChangeModalView = function (roomNumber, repairId) {
        var options = {
            viewContainerRef: this.vcRef,
            context: {
                roomNumber: roomNumber,
                repairId: repairId
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLHNDQUE4QztBQUM5Qyw4Q0FBNkM7QUFDN0MsbUVBQTZFO0FBQzdFLDZFQUErRTtBQUMvRSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUNuRywrQ0FBZ0Q7QUFVaEQ7SUFBMEMsd0NBQVU7SUFPaEQsOEJBQW9CLGdCQUFrQyxFQUMxQyxLQUFxQixFQUNyQixJQUFVLEVBQ1YsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLElBQVksRUFDWixLQUFzQixFQUN0QixhQUE0QixFQUM1QixZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixJQUFVLEVBQ1YsaUJBQW9DO1FBWGhELFlBWUksa0JBQU0saUJBQWlCLENBQUMsU0FXM0I7UUF2Qm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxXQUFL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b0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSZXBhaXJBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IEFkZFJlcGFpck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRkLXJlcGFpci1tb2RhbC9hZGQtcmVwYWlyLW1vZGFsXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0LCBUTlNGYW5jeUFsZXJ0QnV0dG9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyb29tLXJlcGFpcnNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuaHRtbFwiLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbQWRkUmVwYWlyTW9kYWxDb21wb25lbnRdLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1RlY2huaXRpYW5MaXN0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tUmVwYWlyc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VsZWN0ZWROYXZCdXR0b246IG51bWJlciA9IDI7XHJcbiAgICByb29tOiBSb29tO1xyXG4gICAgcmVwYWlyczogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgaXNMb2FkaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgZGF5c0JlZm9yZSA9IDMwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuTGlzdFNlcnZpY2U6IFRlY2huaXRpYW5MaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSByZXBhaXJBY3Rpb25zOiBSZXBhaXJBY3Rpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBKc29uUm9vbSA9IHBhcmFtc1sncm9vbSddO1xyXG4gICAgICAgICAgICB0aGlzLnJvb20gPSA8Um9vbT5KU09OLnBhcnNlKEpzb25Sb29tKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGFpcnMgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlycyk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlyc0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnJlcGFpcnMuc3Vic2NyaWJlKHJlcGFpcnMgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVwYWlycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkFkZEFubm91bmNlbWVudCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGVjaC1yb29tc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QZW5kaW5nU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXlzQmVmb3JlID0gMDtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFsbFNlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROYXZCdXR0b24gPSAyO1xyXG4gICAgICAgIHRoaXMuZGF5c0JlZm9yZSA9IDMwO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkQW5ub3VuY2VtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWxWaWV3KHRoaXMucm9vbS5Sb29tSUQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShyZXBhaXJJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVDaGFuZ2VNb2RhbFZpZXcodGhpcy5yb29tLlJvb21JRCwgcmVwYWlySUQpXHJcbiAgICAgICAgLy8gLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBUTlNGYW5jeUFsZXJ0LnNob3dJbmZvKFwiQ2hhbmdlIHRoZSBkZXNjcmlwdGlvblwiLCBcIkp1c3QgdHlwZSBhbnl0aGlubmcgYW5kIGhpdCBzYXZlXCIsIFwiU2F2ZVwiKTtcclxuICAgICAgICBsZXQgaW5pdGlhbFZhbHVlID0gbnVsbDtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dUZXh0RmllbGQoJ0VudGVyIHlvdXIgbmFtZScsIGluaXRpYWxWYWx1ZSwgbmV3IFROU0ZhbmN5QWxlcnRCdXR0b24oeyBsYWJlbDogJ1NhdmUnLCBhY3Rpb246ICh2YWx1ZTogYW55KSA9PiB7IGNvbnNvbGUubG9nKGBVc2VyIGVudGVyZWQgJHt2YWx1ZX1gKTt9fSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnVXNlciBJbnB1dD8nLCBgWWVhaCwgc3VyZSB3ZSBjYW4uYCwgJ09rLCBsb3RzIG9mIG9wdGlvbnMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChyZXBhaXJJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxyXG4gICAgICAgICAgICByZXBhaXJpZDogcmVwYWlySUQsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZW5kdGltZTogbnVsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ1JlcGFpcicsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRml4ZWQocmVwYWlySUQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcclxuICAgICAgICAgICAgcmVwYWlyaWQ6IHJlcGFpcklELFxyXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiBudWxsLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgdGVjaG5pY2lhbmlkOiBudWxsLFxyXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGVuZHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArICdSZXBhaXInLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1vZGFsVmlldyhyb29tTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICBjb250ZXh0OiB7cm9vbU51bWJlcjogcm9vbU51bWJlcn0sXHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRSZXBhaXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VNb2RhbFZpZXcocm9vbU51bWJlcjogbnVtYmVyLCByZXBhaXJJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIHJvb21OdW1iZXI6IHJvb21OdW1iZXIsXHJcbiAgICAgICAgICAgICAgcmVwYWlySWQ6IHJlcGFpcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRSZXBhaXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgYWxlcnQoXCJbUm9vbSBSZXBhaXJzXSBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xyXG4gICAgfVxyXG59Il19