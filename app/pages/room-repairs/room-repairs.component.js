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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tcmVwYWlycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0g7QUFDdEgsZ0NBQStCO0FBQy9CLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFHL0MsK0RBQTZEO0FBRzdELDJGQUF3RjtBQUd4Riw4Q0FBNEM7QUFNNUMscUNBQW9DO0FBQ3BDLDZDQUFvRDtBQUNwRCxrRUFBMkY7QUFDM0YsdUZBQTZGO0FBQzdGLG9JQUF5STtBQUN6SSxzQ0FBOEM7QUFDOUMsOENBQTZDO0FBQzdDLGdGQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UscUJBQXFCLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDbkcsK0NBQWdEO0FBVWhEO0lBQTBDLHdDQUFVO0lBT2hELDhCQUFvQixnQkFBa0MsRUFDMUMsS0FBcUIsRUFDckIsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxJQUFZLEVBQ1osS0FBc0IsRUFDdEIsYUFBNEIsRUFDNUIsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsSUFBVSxFQUNWLGlCQUFvQztRQVhoRCxZQVlJLGtCQUFNLGlCQUFpQixDQUFDLFNBVzNCO1FBdkJtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBWSxHQUFaLFlBQVksQ0FB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MkJBQUM7Q0FBQSxBQTFKRCxDQUEwQyx3QkFBVSxHQTBKbkQ7QUExSlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSZXBhaXJBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IEFkZFJlcGFpck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRkLXJlcGFpci1tb2RhbC9hZGQtcmVwYWlyLW1vZGFsXCI7XHJcbmltcG9ydCB7IENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWxcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcbi8vIGltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcclxuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJvb20tcmVwYWlyc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcm9vbS1yZXBhaXJzL3Jvb20tcmVwYWlycy5odG1sXCIsXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtBZGRSZXBhaXJNb2RhbENvbXBvbmVudCwgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudF0sXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3Jvb20tcmVwYWlycy9yb29tLXJlcGFpcnMuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkxpc3RTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21SZXBhaXJzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzZWxlY3RlZE5hdkJ1dHRvbjogbnVtYmVyID0gMjtcclxuICAgIHJvb206IFJvb207XHJcbiAgICByZXBhaXJzOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBpc0xvYWRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBkYXlzQmVmb3JlID0gMzA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvb21TZXJ2aWNlOiBSb29tU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5MaXN0U2VydmljZTogVGVjaG5pdGlhbkxpc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgICAgICBwcml2YXRlIHJlcGFpckFjdGlvbnM6IFJlcGFpckFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IEpzb25Sb29tID0gcGFyYW1zWydyb29tJ107XHJcbiAgICAgICAgICAgIHRoaXMucm9vbSA9IDxSb29tPkpTT04ucGFyc2UoSnNvblJvb20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwYWlycyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRSZXBhaXJzKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRSZXBhaXJzTG9hZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMucmVwYWlycy5zdWJzY3JpYmUocmVwYWlycyA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXBhaXJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9uQWRkQW5ub3VuY2VtZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNoLXJvb21zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBlbmRpbmdTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTmF2QnV0dG9uID0gMTtcclxuICAgICAgICB0aGlzLmRheXNCZWZvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5hdkJ1dHRvbiA9IDI7XHJcbiAgICAgICAgdGhpcy5kYXlzQmVmb3JlID0gMzA7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRBbm5vdW5jZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFZpZXcodGhpcy5yb29tLlJvb21JRClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHJlcGFpcklEOiBudW1iZXIsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYW5nZU1vZGFsVmlldyh0aGlzLnJvb20uUm9vbUlELCByZXBhaXJJRCwgZGVzY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMucmVwYWlyQWN0aW9ucy5sb2FkUmVwYWlycyh0aGlzLnJvb20uUm9vbUlELCB0aGlzLmRheXNCZWZvcmUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUTlNGYW5jeUFsZXJ0LnNob3dJbmZvKFwiQ2hhbmdlIHRoZSBkZXNjcmlwdGlvblwiLCBcIkp1c3QgdHlwZSBhbnl0aGlubmcgYW5kIGhpdCBzYXZlXCIsIFwiU2F2ZVwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChyZXBhaXJJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxyXG4gICAgICAgICAgICByZXBhaXJpZDogcmVwYWlySUQsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZW5kdGltZTogbnVsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ1JlcGFpcicsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnJlcGFpckFjdGlvbnMubG9hZFJlcGFpcnModGhpcy5yb29tLlJvb21JRCwgdGhpcy5kYXlzQmVmb3JlKSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRml4ZWQocmVwYWlySUQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcclxuICAgICAgICAgICAgcmVwYWlyaWQ6IHJlcGFpcklELFxyXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiBudWxsLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgdGVjaG5pY2lhbmlkOiBudWxsLFxyXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGVuZHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArICdSZXBhaXInLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzKHRoaXMucm9vbS5Sb29tSUQsIHRoaXMuZGF5c0JlZm9yZSkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1vZGFsVmlldyhyb29tTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICBjb250ZXh0OiB7cm9vbU51bWJlcjogcm9vbU51bWJlcn0sXHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSwgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRSZXBhaXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VNb2RhbFZpZXcocm9vbU51bWJlcjogbnVtYmVyLCByZXBhaXJJZDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIHJvb21OdW1iZXI6IHJvb21OdW1iZXIsXHJcbiAgICAgICAgICAgICAgcmVwYWlySWQ6IHJlcGFpcklkLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgYWxlcnQoXCJbUm9vbSBSZXBhaXJzXSBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xyXG4gICAgfVxyXG59Il19