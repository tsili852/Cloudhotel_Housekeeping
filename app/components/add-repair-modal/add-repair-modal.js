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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXJlcGFpci1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1yZXBhaXItbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCxtRkFBZ0Y7QUFFaEYsNkRBQThGO0FBQzlGLCtDQUFnRDtBQUNoRCxzQ0FBOEM7QUFDOUMsOENBQTZDO0FBTTdDO0lBWUksaUNBQW9CLE1BQXlCLEVBQ2pDLElBQVUsRUFDVixJQUFVLEVBQ1YsS0FBc0IsRUFDdEIsWUFBb0MsRUFDcEMsaUJBQW9DO1FBTGhELGlCQW9DQztRQXBDbUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCw0QkFBdUIsR0FBVyxDQUFDLENBQUM7UUFFcEMsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBVTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYzthQUNkLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDWixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO1FBRU4sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUN2QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsb0RBQWtCLEdBQWxCO1FBQUEsaUJBc0JDO1FBcEJHLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxlQUFNLENBQUMsT0FBTztZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsaUJBQWlCO1lBQ3pFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDbkMsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZO1NBQ2hGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUN6QyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDcEIsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNmLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBckZRLHVCQUF1QjtRQUpuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbURBQW1EO1NBQ25FLENBQUM7eUNBYThCLGdDQUFpQjtZQUMzQixXQUFJO1lBQ0osV0FBSTtZQUNILGFBQUs7WUFDRSw4QkFBc0I7WUFDakIsMkJBQWlCO09BakJ2Qyx1QkFBdUIsQ0FzRm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVjaG5pdGlhbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRSZXBhaXJNb2RhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWwnO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW5cIjtcclxuaW1wb3J0IHsgTWFpbnRlbmFuY2VUYXNrLCBNYWludGVuYW5jZVRhc2tTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tYWludGVuYW5jZS10YXNrL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiXHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhZGQtcmVwYWlyLW1vZGFsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZFJlcGFpck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1vZGFsOiBBZGRSZXBhaXJNb2RhbDtcclxuICAgIHJvb21OdW1iZXI6IG51bWJlcjtcclxuICAgIHRlY2huaXRpYW5zT2JzOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBtVGFza3NPYnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHRlY2huaXRpYW5zTGlzdDogQXJyYXk8VGVjaG5pdGlhbj47XHJcbiAgICBtVGFza3NMaXN0OiBBcnJheTxNYWludGVuYW5jZVRhc2s+O1xyXG4gICAgc2VsZWN0ZWRUZWNobml0aWFuSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB0ZWNobml0aWFuc05hbWVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgc2VsZWN0ZWRNVGFza0luZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgbVRhc2tzTmFtZXM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgbXRhc2tTZXJ2aWNlOiBNYWludGVuYW5jZVRhc2tTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdGVjaG5pdGlhbkFjdGlvbnM6IFRlY2huaXRpYW5BY3Rpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgQWRkUmVwYWlyTW9kYWwoKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmRlc2NyaXB0aW9uID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBwYXJhbXMuY29udGV4dC5yb29tTnVtYmVyO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMudGVjaG5pdGlhbkFjdGlvbnMubG9hZFRlY2huaXRpYW5zKCkpO1xyXG5cclxuICAgICAgICB0aGlzLnRlY2huaXRpYW5zT2JzID0gc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFRlY2huaXRpYW5zKTtcclxuICAgICAgICB0aGlzLnRlY2huaXRpYW5zT2JzXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGVjaHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZWNobml0aWFuc0xpc3QgPSB0ZWNocztcclxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5pdGlhbnNOYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICB0ZWNocy5mb3JFYWNoKHRlY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVjaG5pdGlhbnNOYW1lcy5wdXNoKHRlY2guTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tVGFza3NPYnMgPSB0aGlzLm10YXNrU2VydmljZS5nZXRNYWludGVuYW5jZVRhc2tzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubVRhc2tzT2JzLnN1YnNjcmliZSh0YXNrcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1UYXNrc0xpc3QgPSB0YXNrcztcclxuICAgICAgICAgICAgICAgIHRoaXMubVRhc2tzTmFtZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1UYXNrc05hbWVzLnB1c2godC5OYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5vbihcInVubG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNhdmVBbm5vdW5jZW1lbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcclxuICAgICAgICAgICAgcm9vbWlkOiB0aGlzLnJvb21OdW1iZXIsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IHRoaXMubVRhc2tzTGlzdFt0aGlzLnNlbGVjdGVkTVRhc2tJbmRleF0uTWFpbnRlbmFuY2VUYXNrSUQsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm1vZGFsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB3aG9yZXBvcnRlZDogMTYsXHJcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogdGhpcy50ZWNobml0aWFuc0xpc3RbdGhpcy5zZWxlY3RlZFRlY2huaXRpYW5JbmRleF0uVGVjaG5pdGlhbklEXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyAnQW5ub3VuY2VtZW50JyxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=