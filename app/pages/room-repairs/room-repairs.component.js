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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLG9JQUF5STtBQUN6SSxzQ0FBOEM7QUFDOUMsOENBQTZDO0FBQzdDLGdGQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UscUJBQXFCLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDbkcsK0NBQWdEO0FBVWhEO0lBQTBDLHdDQUFVO0lBV2hELDhCQUFvQixnQkFBa0MsRUFDMUMsS0FBcUIsRUFDckIsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxJQUFZLEVBQ1osS0FBc0IsRUFDdEIsYUFBNEIsRUFDNUIsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsSUFBVSxFQUNWLGlCQUFvQztRQVhoRCxZQVlJLGtCQUFNLGlCQUFpQixDQUFDLFNBVzNCO1FBdkJtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBWSxHQUFaLFlBQVksQ0FB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QUMsK0NBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0Fhd0MseUJBQWdCO1lBQ25DLHVCQUFjO1lBQ2YsV0FBSTtZQUNHLDBCQUFXO1lBQ0QsK0NBQXFCO1lBQ3RDLGFBQU07WUFDTCxhQUFLO1lBQ0cscUJBQWE7WUFDZCxpQ0FBa0I7WUFDekIsdUJBQWdCO1lBQ2pCLFdBQUk7WUFDUyx3QkFBaUI7T0F0QnZDLG9CQUFvQixDQThKaEM7SUFBRCwyQkFBQztDQUFBLEFBOUpELENBQTBDLHdCQUFVLEdBOEpuRDtBQTlKWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XG5pbXBvcnQgeyBUZWNobml0aWFuIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW5cIjtcbmltcG9ydCB7IFRlY2huaXRpYW5MaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi9kcmF3ZXIucGFnZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBSZXBhaXJBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWxcIjtcbmltcG9ydCB7IENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWxcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcbi8vIGltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJvb20tcmVwYWlyc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuaHRtbFwiLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0FkZFJlcGFpck1vZGFsQ29tcG9uZW50LCBDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1RlY2huaXRpYW5MaXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSb29tUmVwYWlyc0NvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlbGVjdGVkTmF2QnV0dG9uOiBudW1iZXIgPSAyO1xuICAgIHJvb206IFJvb207XG4gICAgcmVwYWlyczogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGlzTG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBkYXlzQmVmb3JlID0gMzA7XG4gICAgdG9kYXlzOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBzdGFydEljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7XG4gICAgY2hhbmdlSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDQwKTtcbiAgICBlbmRJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxNGEpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvb21TZXJ2aWNlOiBSb29tU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuTGlzdFNlcnZpY2U6IFRlY2huaXRpYW5MaXN0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgcHJpdmF0ZSByZXBhaXJBY3Rpb25zOiBSZXBhaXJBY3Rpb25zLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IEpzb25Sb29tID0gcGFyYW1zWydyb29tJ107XG4gICAgICAgICAgICB0aGlzLnJvb20gPSA8Um9vbT5KU09OLnBhcnNlKEpzb25Sb29tKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xuXG4gICAgICAgIHRoaXMucmVwYWlycyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRSZXBhaXJzKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVwYWlyc0xvYWRpbmcpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMucmVwYWlycy5zdWJzY3JpYmUocmVwYWlycyA9PiB7XG4gICAgICAgIC8vICAgICBpZiAocmVwYWlycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMub25BZGRBbm5vdW5jZW1lbnQoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RlY2gtcm9vbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIG9uUGVuZGluZ1NlbGVjdGVkKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTmF2QnV0dG9uID0gMTtcbiAgICAgICAgdGhpcy5kYXlzQmVmb3JlID0gMDtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XG4gICAgfVxuXG4gICAgb25BbGxTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDI7XG4gICAgICAgIHRoaXMuZGF5c0JlZm9yZSA9IDMwO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcbiAgICB9XG5cbiAgICBvbkFkZEFubm91bmNlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFZpZXcodGhpcy5yb29tLlJvb21JRClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHJlcGFpcklEOiBudW1iZXIsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFuZ2VNb2RhbFZpZXcodGhpcy5yb29tLlJvb21JRCwgcmVwYWlySUQsIGRlc2NyaXB0aW9uKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFROU0ZhbmN5QWxlcnQuc2hvd0luZm8oXCJDaGFuZ2UgdGhlIGRlc2NyaXB0aW9uXCIsIFwiSnVzdCB0eXBlIGFueXRoaW5uZyBhbmQgaGl0IHNhdmVcIiwgXCJTYXZlXCIpOyAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBvblN0YXJ0KHJlcGFpcklEOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcbiAgICAgICAgICAgIHJlcGFpcmlkOiByZXBhaXJJRCxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGVuZHRpbWU6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArICdSZXBhaXInLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GaXhlZChyZXBhaXJJRDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaG90ZWxzbjogQ29uZmlnLmhvdGVsU04sXG4gICAgICAgICAgICByZXBhaXJpZDogcmVwYWlySUQsXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXG4gICAgICAgICAgICBlbmR0aW1lOiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyAnUmVwYWlyJyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTW9kYWxWaWV3KHJvb21OdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgIGNvbnRleHQ6IHtyb29tTnVtYmVyOiByb29tTnVtYmVyfSxcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRSZXBhaXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VNb2RhbFZpZXcocm9vbU51bWJlcjogbnVtYmVyLCByZXBhaXJJZDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICByb29tTnVtYmVyOiByb29tTnVtYmVyLFxuICAgICAgICAgICAgICByZXBhaXJJZDogcmVwYWlySWQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoXCJbUm9vbSBSZXBhaXJzXSBFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICB9XG59Il19