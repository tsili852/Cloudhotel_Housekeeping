"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var add_repair_modal_1 = require("../../shared/add-repair-modal/add-repair-modal");
var fromRoot = require("../../reducers/index");
var http_1 = require("@angular/http");
var config_1 = require("../../shared/config");
var AddRepairModalComponent = /** @class */ (function () {
    function AddRepairModalComponent(params, page, http, store, technitianActions) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.http = http;
        this.store = store;
        this.technitianActions = technitianActions;
        this.selectedTechnitianIndex = 0;
        this.modal = new add_repair_modal_1.AddRepairModal();
        this.modal.description = "";
        this.roomNumber = params.context.roomNumber;
        this.store.dispatch(this.technitianActions.loadTechnitians());
        this.technitians = store.select(fromRoot.getTechnitians);
        this.technitians
            .subscribe(function (techs) {
            _this.technitiansNames = new Array();
            techs.forEach(function (tech) {
                _this.technitiansNames.push(tech.Name);
            });
        });
        this.page.on("unloaded", function () {
            _this.params.closeCallback();
        });
    }
    AddRepairModalComponent.prototype.ngOnInit = function () {
    };
    AddRepairModalComponent.prototype.onSaveAnnouncement = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            hotelsn: config_1.Config.hotelSN,
            roomid: this.roomNumber,
            maintenanceid: null,
            description: this.modal.description,
            whoreported: 16,
            technicianid: null
        });
        this.http.post(config_1.Config.apiUrl + 'Announcement', body, { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.params.closeCallback({ status: response.status });
            }
        });
    };
    AddRepairModalComponent.prototype.onCancel = function () {
        this.params.closeCallback();
    };
    AddRepairModalComponent.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    AddRepairModalComponent = __decorate([
        core_1.Component({
            selector: "add-repair-modal",
            templateUrl: "components/add-repair-modal/add-repair-modal.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page,
            http_1.Http,
            store_1.Store,
            actions_1.TechnitianActions])
    ], AddRepairModalComponent);
    return AddRepairModalComponent;
}());
exports.AddRepairModalComponent = AddRepairModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXJlcGFpci1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1yZXBhaXItbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCxtRkFBZ0Y7QUFFaEYsK0NBQWdEO0FBQ2hELHNDQUE4QztBQUM5Qyw4Q0FBNkM7QUFNN0M7SUFPSSxpQ0FBb0IsTUFBeUIsRUFDakMsSUFBVSxFQUNWLElBQVUsRUFDVixLQUFzQixFQUN0QixpQkFBb0M7UUFKaEQsaUJBd0JDO1FBeEJtQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFQaEQsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBU2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVzthQUNYLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDWixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxvREFBa0IsR0FBbEI7UUFBQSxpQkFzQkM7UUFwQkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQ3pDLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDhDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFwRVEsdUJBQXVCO1FBSm5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtREFBbUQ7U0FDbkUsQ0FBQzt5Q0FROEIsZ0NBQWlCO1lBQzNCLFdBQUk7WUFDSixXQUFJO1lBQ0gsYUFBSztZQUNPLDJCQUFpQjtPQVh2Qyx1QkFBdUIsQ0FxRW5DO0lBQUQsOEJBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVjaG5pdGlhbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRSZXBhaXJNb2RhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWwnO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW5cIjtcclxuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFkZC1yZXBhaXItbW9kYWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvYWRkLXJlcGFpci1tb2RhbC9hZGQtcmVwYWlyLW1vZGFsLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbW9kYWw6IEFkZFJlcGFpck1vZGFsO1xyXG4gICAgcm9vbU51bWJlcjogbnVtYmVyO1xyXG4gICAgdGVjaG5pdGlhbnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHNlbGVjdGVkVGVjaG5pdGlhbkluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgdGVjaG5pdGlhbnNOYW1lczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuQWN0aW9uczogVGVjaG5pdGlhbkFjdGlvbnMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBBZGRSZXBhaXJNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMubW9kYWwuZGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IHBhcmFtcy5jb250ZXh0LnJvb21OdW1iZXI7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy50ZWNobml0aWFuQWN0aW9ucy5sb2FkVGVjaG5pdGlhbnMoKSk7XHJcblxyXG4gICAgICAgIHRoaXMudGVjaG5pdGlhbnMgPSBzdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0VGVjaG5pdGlhbnMpO1xyXG4gICAgICAgIHRoaXMudGVjaG5pdGlhbnNcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh0ZWNocyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlY2huaXRpYW5zTmFtZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICAgICAgdGVjaHMuZm9yRWFjaCh0ZWNoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlY2huaXRpYW5zTmFtZXMucHVzaCh0ZWNoLk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5vbihcInVubG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNhdmVBbm5vdW5jZW1lbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcclxuICAgICAgICAgICAgcm9vbWlkOiB0aGlzLnJvb21OdW1iZXIsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm1vZGFsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB3aG9yZXBvcnRlZDogMTYsXHJcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ0Fubm91bmNlbWVudCcsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7c3RhdHVzOiByZXNwb25zZS5zdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19