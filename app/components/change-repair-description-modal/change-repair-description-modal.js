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
        this.modal.description = params.context.description;
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
            selector: "change-repair-description-modal",
            templateUrl: "components/change-repair-description-modal/change-repair-description-modal.html"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXJlcGFpci1kZXNjcmlwdGlvbi1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCw0RkFBeUY7QUFHekYsc0NBQThDO0FBQzlDLDhDQUE2QztBQU03QztJQUtJLCtDQUFvQixNQUF5QixFQUNqQyxJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXNCLEVBQ3RCLGlCQUFvQztRQUpoRCxpQkFlQztRQWZtQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVDQUFpQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3REFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZEQUFhLEdBQWI7UUFBQSxpQkF1QkM7UUFyQkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ25DLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ25DLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDREQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUExRFEscUNBQXFDO1FBSmpELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLFdBQVcsRUFBRSxpRkFBaUY7U0FDakcsQ0FBQzt5Q0FNOEIsZ0NBQWlCO1lBQzNCLFdBQUk7WUFDSixXQUFJO1lBQ0gsYUFBSztZQUNPLDJCQUFpQjtPQVR2QyxxQ0FBcUMsQ0EyRGpEO0lBQUQsNENBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxzRkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBUZWNobml0aWFuQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBDaGFuZ2VSZXBhaXJNb2RhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jaGFuZ2UtcmVwYWlyLW1vZGFsL2NoYW5nZS1yZXBhaXItbW9kYWwnO1xuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIlxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiY29tcG9uZW50cy9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWwuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1vZGFsOiBDaGFuZ2VSZXBhaXJNb2RhbDtcbiAgICByb29tTnVtYmVyOiBudW1iZXI7XG4gICAgcmVwYWlySWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuQWN0aW9uczogVGVjaG5pdGlhbkFjdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IENoYW5nZVJlcGFpck1vZGFsKCk7XG4gICAgICAgIHRoaXMubW9kYWwuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBwYXJhbXMuY29udGV4dC5yb29tTnVtYmVyO1xuICAgICAgICB0aGlzLnJlcGFpcklkID0gcGFyYW1zLmNvbnRleHQucmVwYWlySWQ7XG4gICAgICAgIHRoaXMubW9kYWwuZGVzY3JpcHRpb24gPSBwYXJhbXMuY29udGV4dC5kZXNjcmlwdGlvbjtcblxuICAgICAgICB0aGlzLnBhZ2Uub24oXCJ1bmxvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgb25TYXZlQ2hhbmdlcygpIHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxuICAgICAgICAgICAgcmVwYWlyaWQ6IHRoaXMucmVwYWlySWQsXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMubW9kYWwuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IG51bGwsXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXG4gICAgICAgICAgICBlbmR0aW1lOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyAnUmVwYWlyJyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=