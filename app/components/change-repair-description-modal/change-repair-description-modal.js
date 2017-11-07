"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var change_repair_modal_1 = require("../../shared/change-repair-modal/change-repair-modal");
var http_1 = require("@angular/http");
var config_1 = require("../../shared/config");
var ChangeRepairDescriptionModalComponent = /** @class */ (function () {
    function ChangeRepairDescriptionModalComponent(params, page, http, store, technitianActions) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.http = http;
        this.store = store;
        this.technitianActions = technitianActions;
        this.modal = new change_repair_modal_1.ChangeRepairModal();
        this.modal.description = "";
        this.roomNumber = params.context.roomNumber;
        this.repairId = params.context.repairId;
        this.page.on("unloaded", function () {
            _this.params.closeCallback();
        });
    }
    ChangeRepairDescriptionModalComponent.prototype.ngOnInit = function () {
    };
    ChangeRepairDescriptionModalComponent.prototype.onSaveChanges = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            hotelsn: config_1.Config.hotelSN,
            repairid: this.repairId,
            maintenanceid: null,
            description: this.modal.description,
            technicianid: null,
            starttime: null,
            endtime: null
        });
        this.http.post(config_1.Config.apiUrl + 'Repair', body, { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.params.closeCallback({ status: response.status });
            }
        });
    };
    ChangeRepairDescriptionModalComponent.prototype.onCancel = function () {
        this.params.closeCallback();
    };
    ChangeRepairDescriptionModalComponent.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    ChangeRepairDescriptionModalComponent = __decorate([
        core_1.Component({
            selector: "add-repair-modal",
            templateUrl: "components/add-repair-modal/add-repair-modal.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page,
            http_1.Http,
            store_1.Store,
            actions_1.TechnitianActions])
    ], ChangeRepairDescriptionModalComponent);
    return ChangeRepairDescriptionModalComponent;
}());
exports.ChangeRepairDescriptionModalComponent = ChangeRepairDescriptionModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXJlcGFpci1kZXNjcmlwdGlvbi1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCw0RkFBeUY7QUFHekYsc0NBQThDO0FBQzlDLDhDQUE2QztBQU03QztJQUtJLCtDQUFvQixNQUF5QixFQUNqQyxJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXNCLEVBQ3RCLGlCQUFvQztRQUpoRCxpQkFjQztRQWRtQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVDQUFpQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUV4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3REFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZEQUFhLEdBQWI7UUFBQSxpQkF1QkM7UUFyQkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ25DLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ25DLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDREQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUF6RFEscUNBQXFDO1FBSmpELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtREFBbUQ7U0FDbkUsQ0FBQzt5Q0FNOEIsZ0NBQWlCO1lBQzNCLFdBQUk7WUFDSixXQUFJO1lBQ0gsYUFBSztZQUNPLDJCQUFpQjtPQVR2QyxxQ0FBcUMsQ0EwRGpEO0lBQUQsNENBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSxzRkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVjaG5pdGlhbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VSZXBhaXJNb2RhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGFuZ2UtcmVwYWlyLW1vZGFsL2NoYW5nZS1yZXBhaXItbW9kYWwnO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW5cIjtcclxuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFkZC1yZXBhaXItbW9kYWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvYWRkLXJlcGFpci1tb2RhbC9hZGQtcmVwYWlyLW1vZGFsLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtb2RhbDogQ2hhbmdlUmVwYWlyTW9kYWw7XHJcbiAgICByb29tTnVtYmVyOiBudW1iZXI7XHJcbiAgICByZXBhaXJJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5BY3Rpb25zOiBUZWNobml0aWFuQWN0aW9ucykge1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IENoYW5nZVJlcGFpck1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gcGFyYW1zLmNvbnRleHQucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLnJlcGFpcklkID0gcGFyYW1zLmNvbnRleHQucmVwYWlySWQ7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5vbihcInVubG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNhdmVDaGFuZ2VzKCkge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaG90ZWxzbjogQ29uZmlnLmhvdGVsU04sXHJcbiAgICAgICAgICAgIHJlcGFpcmlkOiB0aGlzLnJlcGFpcklkLFxyXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiBudWxsLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5tb2RhbC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVjaG5pY2lhbmlkOiBudWxsLFxyXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGVuZHRpbWU6IG51bGxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArICdSZXBhaXInLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==