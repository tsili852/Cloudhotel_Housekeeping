"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var add_repair_modal_1 = require("../../shared/add-repair-modal/add-repair-modal");
var index_1 = require("../../shared/maintenance-task/index");
var fromRoot = require("../../reducers/index");
var http_1 = require("@angular/http");
var config_1 = require("../../shared/config");
var AddRepairModalComponent = /** @class */ (function () {
    function AddRepairModalComponent(params, page, http, store, mtaskService, technitianActions) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.http = http;
        this.store = store;
        this.mtaskService = mtaskService;
        this.technitianActions = technitianActions;
        this.selectedTechnitianIndex = 0;
        this.selectedMTaskIndex = 0;
        this.modal = new add_repair_modal_1.AddRepairModal();
        this.modal.description = "";
        this.roomNumber = params.context.roomNumber;
        this.store.dispatch(this.technitianActions.loadTechnitians());
        this.technitiansObs = store.select(fromRoot.getTechnitians);
        this.technitiansObs
            .subscribe(function (techs) {
            _this.technitiansList = techs;
            _this.technitiansNames = new Array();
            techs.forEach(function (tech) {
                _this.technitiansNames.push(tech.Name);
            });
        });
        this.mTasksObs = this.mtaskService.getMaintenanceTasks();
        this.mTasksObs.subscribe(function (tasks) {
            _this.mTasksList = tasks;
            _this.mTasksNames = new Array();
            tasks.forEach(function (t) {
                _this.mTasksNames.push(t.Name);
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
            maintenanceid: this.mTasksList[this.selectedMTaskIndex].MaintenanceTaskID,
            description: this.modal.description,
            whoreported: 16,
            technicianid: this.technitiansList[this.selectedTechnitianIndex].TechnitianID
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
            index_1.MaintenanceTaskService,
            actions_1.TechnitianActions])
    ], AddRepairModalComponent);
    return AddRepairModalComponent;
}());
exports.AddRepairModalComponent = AddRepairModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXJlcGFpci1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1yZXBhaXItbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCxtRkFBZ0Y7QUFFaEYsNkRBQThGO0FBQzlGLCtDQUFnRDtBQUNoRCxzQ0FBOEM7QUFDOUMsOENBQTZDO0FBTTdDO0lBWUksaUNBQW9CLE1BQXlCLEVBQ2pDLElBQVUsRUFDVixJQUFVLEVBQ1YsS0FBc0IsRUFDdEIsWUFBb0MsRUFDcEMsaUJBQW9DO1FBTGhELGlCQW9DQztRQXBDbUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCw0QkFBdUIsR0FBVyxDQUFDLENBQUM7UUFFcEMsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBVTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYzthQUNkLFNB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RSw4QkFBc0I7WUFDakIsMkJBQWlCO09BakJ2Qyx1QkFBdUIsQ0FzRm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBUZWNobml0aWFuQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBBZGRSZXBhaXJNb2RhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWwnO1xuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XG5pbXBvcnQgeyBNYWludGVuYW5jZVRhc2ssIE1haW50ZW5hbmNlVGFza1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21haW50ZW5hbmNlLXRhc2svaW5kZXhcIjtcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFkZC1yZXBhaXItbW9kYWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1vZGFsOiBBZGRSZXBhaXJNb2RhbDtcbiAgICByb29tTnVtYmVyOiBudW1iZXI7XG4gICAgdGVjaG5pdGlhbnNPYnM6IE9ic2VydmFibGU8YW55PjtcbiAgICBtVGFza3NPYnM6IE9ic2VydmFibGU8YW55PjtcbiAgICB0ZWNobml0aWFuc0xpc3Q6IEFycmF5PFRlY2huaXRpYW4+O1xuICAgIG1UYXNrc0xpc3Q6IEFycmF5PE1haW50ZW5hbmNlVGFzaz47XG4gICAgc2VsZWN0ZWRUZWNobml0aWFuSW5kZXg6IG51bWJlciA9IDA7XG4gICAgdGVjaG5pdGlhbnNOYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE1UYXNrSW5kZXg6IG51bWJlciA9IDA7XG4gICAgbVRhc2tzTmFtZXM6IEFycmF5PHN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgICAgIHByaXZhdGUgbXRhc2tTZXJ2aWNlOiBNYWludGVuYW5jZVRhc2tTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5BY3Rpb25zOiBUZWNobml0aWFuQWN0aW9ucykge1xuXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgQWRkUmVwYWlyTW9kYWwoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IHBhcmFtcy5jb250ZXh0LnJvb21OdW1iZXI7XG5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnRlY2huaXRpYW5BY3Rpb25zLmxvYWRUZWNobml0aWFucygpKTtcblxuICAgICAgICB0aGlzLnRlY2huaXRpYW5zT2JzID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFRlY2huaXRpYW5zKTtcbiAgICAgICAgdGhpcy50ZWNobml0aWFuc09ic1xuICAgICAgICAgICAgLnN1YnNjcmliZSh0ZWNocyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWNobml0aWFuc0xpc3QgPSB0ZWNocztcbiAgICAgICAgICAgICAgICB0aGlzLnRlY2huaXRpYW5zTmFtZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIHRlY2hzLmZvckVhY2godGVjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVjaG5pdGlhbnNOYW1lcy5wdXNoKHRlY2guTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubVRhc2tzT2JzID0gdGhpcy5tdGFza1NlcnZpY2UuZ2V0TWFpbnRlbmFuY2VUYXNrcygpO1xuXG4gICAgICAgIHRoaXMubVRhc2tzT2JzLnN1YnNjcmliZSh0YXNrcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tVGFza3NMaXN0ID0gdGFza3M7XG4gICAgICAgICAgICAgICAgdGhpcy5tVGFza3NOYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tVGFza3NOYW1lcy5wdXNoKHQuTmFtZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wYWdlLm9uKFwidW5sb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIG9uU2F2ZUFubm91bmNlbWVudCgpIHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGhvdGVsc246IENvbmZpZy5ob3RlbFNOLFxuICAgICAgICAgICAgcm9vbWlkOiB0aGlzLnJvb21OdW1iZXIsXG4gICAgICAgICAgICBtYWludGVuYW5jZWlkOiB0aGlzLm1UYXNrc0xpc3RbdGhpcy5zZWxlY3RlZE1UYXNrSW5kZXhdLk1haW50ZW5hbmNlVGFza0lELFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMubW9kYWwuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB3aG9yZXBvcnRlZDogMTYsXG4gICAgICAgICAgICB0ZWNobmljaWFuaWQ6IHRoaXMudGVjaG5pdGlhbnNMaXN0W3RoaXMuc2VsZWN0ZWRUZWNobml0aWFuSW5kZXhdLlRlY2huaXRpYW5JRFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ0Fubm91bmNlbWVudCcsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19