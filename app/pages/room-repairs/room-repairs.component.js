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
var change_repair_description_modal_1 = require("../../components/change-repair-description-modal/change-repair-description-modal");
var http_1 = require("@angular/http");
var config_1 = require("../../shared/config");
// import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
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
        _this.todays = new Date();
        _this.startIcon = String.fromCharCode(0xf04b);
        _this.changeIcon = String.fromCharCode(0xf040);
        _this.endIcon = String.fromCharCode(0xf14a);
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
    RoomRepairsComponent.prototype.onChange = function (repairID, description) {
        var _this = this;
        this.createChangeModalView(this.room.RoomID, repairID, description)
            .then(function () {
            _this.store.dispatch(_this.repairActions.loadRepairs(_this.room.RoomID, _this.daysBefore));
        })
            .catch(function (err) {
            _this.handleError(err);
        });
        // TNSFancyAlert.showInfo("Change the description", "Just type anythinng and hit save", "Save");                
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
    RoomRepairsComponent.prototype.createChangeModalView = function (roomNumber, repairId, description) {
        var options = {
            viewContainerRef: this.vcRef,
            context: {
                roomNumber: roomNumber,
                repairId: repairId,
                description: description
            },
            fullscreen: false,
        };
        return this.modalService.showModal(change_repair_description_modal_1.ChangeRepairDescriptionModalComponent, options);
    };
    RoomRepairsComponent.prototype.handleError = function (error) {
        alert("[Room Repairs] Error: " + error);
        console.dir(error);
    };
    RoomRepairsComponent = __decorate([
        core_1.Component({
            selector: "room-repairs",
            templateUrl: "pages/room-repairs/room-repairs.html",
            entryComponents: [add_repair_modal_1.AddRepairModalComponent, change_repair_description_modal_1.ChangeRepairDescriptionModalComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLG9JQUF5STtBQUN6SSxzQ0FBOEM7QUFDOUMsOENBQTZDO0FBQzdDLGdGQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UscUJBQXFCLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDbkcsK0NBQWdEO0FBVWhEO0lBQTBDLHdDQUFVO0lBV2hELDhCQUFvQixnQkFBa0MsRUFDMUMsS0FBcUIsRUFDckIsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxJQUFZLEVBQ1osS0FBc0IsRUFDdEIsYUFBNEIsRUFDNUIsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsSUFBVSxFQUNWLGlCQUFvQztRQVhoRCxZQVlJLGtCQUFNLGlCQUFpQixDQUFDLFNBVzNCO1FBdkJtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBWSxHQUFaLFlBQVksQ0FB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QUMsK0NBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0Fhd0MseUJBQWdCO1lBQ25DLHVCQUFjO1lBQ2YsV0FBSTtZQUNHLDBCQUFXO1lBQ0QsK0NBQXFCO1lBQ3RDLGFBQU07WUFDTCxhQUFLO1lBQ0cscUJBQWE7WUFDZCxpQ0FBa0I7WUFDekIsdUJBQWdCO1lBQ2pCLFdBQUk7WUFDUyx3QkFBaUI7T0F0QnZDLG9CQUFvQixDQThKaEM7SUFBRCwyQkFBQztDQUFBLEFBOUpELENBQTBDLHdCQUFVLEdBOEpuRDtBQTlKWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb21cIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXBhaXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3JlcGFpci9yZXBhaXJcIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW5MaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuLWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJlcGFpckFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWxcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWwvY2hhbmdlLXJlcGFpci1kZXNjcmlwdGlvbi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuLy8gaW1wb3J0IHsgVE5TRmFuY3lBbGVydCwgVE5TRmFuY3lBbGVydEJ1dHRvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xyXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicm9vbS1yZXBhaXJzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yb29tLXJlcGFpcnMvcm9vbS1yZXBhaXJzLmh0bWxcIixcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0FkZFJlcGFpck1vZGFsQ29tcG9uZW50LCBDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy1jb21tb24uY3NzXCIsIFwicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtUZWNobml0aWFuTGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVJlcGFpcnNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNlbGVjdGVkTmF2QnV0dG9uOiBudW1iZXIgPSAyO1xyXG4gICAgcm9vbTogUm9vbTtcclxuICAgIHJlcGFpcnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIGlzTG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIGRheXNCZWZvcmUgPSAzMDtcclxuICAgIHRvZGF5czogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBzdGFydEljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7XHJcbiAgICBjaGFuZ2VJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNDApO1xyXG4gICAgZW5kSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTRhKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGVjaG5pdGlhbkxpc3RTZXJ2aWNlOiBUZWNobml0aWFuTGlzdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgcmVwYWlyQWN0aW9uczogUmVwYWlyQWN0aW9ucyxcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgSnNvblJvb20gPSBwYXJhbXNbJ3Jvb20nXTtcclxuICAgICAgICAgICAgdGhpcy5yb29tID0gPFJvb20+SlNPTi5wYXJzZShKc29uUm9vbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBhaXJzID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFJlcGFpcnMpO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFJlcGFpcnNMb2FkaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5yZXBhaXJzLnN1YnNjcmliZShyZXBhaXJzID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHJlcGFpcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25BZGRBbm5vdW5jZW1lbnQoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RlY2gtcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGVuZGluZ1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROYXZCdXR0b24gPSAxO1xyXG4gICAgICAgIHRoaXMuZGF5c0JlZm9yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BbGxTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTmF2QnV0dG9uID0gMjtcclxuICAgICAgICB0aGlzLmRheXNCZWZvcmUgPSAzMDtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFkZEFubm91bmNlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsVmlldyh0aGlzLnJvb20uUm9vbUlEKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UocmVwYWlySUQ6IG51bWJlciwgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbmdlTW9kYWxWaWV3KHRoaXMucm9vbS5Sb29tSUQsIHJlcGFpcklELCBkZXNjcmlwdGlvbilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFROU0ZhbmN5QWxlcnQuc2hvd0luZm8oXCJDaGFuZ2UgdGhlIGRlc2NyaXB0aW9uXCIsIFwiSnVzdCB0eXBlIGFueXRoaW5uZyBhbmQgaGl0IHNhdmVcIiwgXCJTYXZlXCIpOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KHJlcGFpcklEOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaG90ZWxzbjogQ29uZmlnLmhvdGVsU04sXHJcbiAgICAgICAgICAgIHJlcGFpcmlkOiByZXBhaXJJRCxcclxuICAgICAgICAgICAgbWFpbnRlbmFuY2VpZDogbnVsbCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogbnVsbCxcclxuICAgICAgICAgICAgc3RhcnR0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBlbmR0aW1lOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyAnUmVwYWlyJyxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaXhlZChyZXBhaXJJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxyXG4gICAgICAgICAgICByZXBhaXJpZDogcmVwYWlySUQsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbnVsbCxcclxuICAgICAgICAgICAgZW5kdGltZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ1JlcGFpcicsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTW9kYWxWaWV3KHJvb21OdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICAgIGNvbnRleHQ6IHtyb29tTnVtYmVyOiByb29tTnVtYmVyfSxcclxuICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLCAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEFkZFJlcGFpck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNoYW5nZU1vZGFsVmlldyhyb29tTnVtYmVyOiBudW1iZXIsIHJlcGFpcklkOiBudW1iZXIsIGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICAgcm9vbU51bWJlcjogcm9vbU51bWJlcixcclxuICAgICAgICAgICAgICByZXBhaXJJZDogcmVwYWlySWQsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBhbGVydChcIltSb29tIFJlcGFpcnNdIEVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=