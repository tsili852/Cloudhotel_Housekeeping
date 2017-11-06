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
        var postParams = 'hotelsn=' + config_1.Config.hotelSN +
            '&roomid=' + this.roomNumber +
            '&description=' + this.modal.description +
            '&whoreported=' + 16;
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
        // .map(response => response.json())
        // .do(response => {
        //     console.log(JSON.stringify(response));
        // })
        // .catch(error => this.handleErrors(error));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXJlcGFpci1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1yZXBhaXItbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBRXRFLGdDQUErQjtBQUMvQiw4Q0FBNkM7QUFFN0MscUNBQW9DO0FBRXBDLHlDQUFrRDtBQUNsRCxtRkFBZ0Y7QUFFaEYsK0NBQWdEO0FBQ2hELHNDQUE4QztBQUM5Qyw4Q0FBNkM7QUFNN0M7SUFPSSxpQ0FBb0IsTUFBeUIsRUFDakMsSUFBVSxFQUNWLElBQVUsRUFDVixLQUFzQixFQUN0QixpQkFBb0M7UUFKaEQsaUJBd0JDO1FBeEJtQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFQaEQsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBU2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVzthQUNYLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDWixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxvREFBa0IsR0FBbEI7UUFBQSxpQkFnQ0M7UUE5QkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxlQUFNLENBQUMsT0FBTztZQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDNUIsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QyxlQUFlLEdBQUcsRUFBRSxDQUFBO1FBRXhCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQ3pDLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQ0FBb0M7UUFDcEMsb0JBQW9CO1FBQ3BCLDZDQUE2QztRQUM3QyxLQUFLO1FBQ0wsNkNBQTZDO0lBQ3JELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsOENBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlFUSx1QkFBdUI7UUFKbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG1EQUFtRDtTQUNuRSxDQUFDO3lDQVE4QixnQ0FBaUI7WUFDM0IsV0FBSTtZQUNKLFdBQUk7WUFDSCxhQUFLO1lBQ08sMkJBQWlCO09BWHZDLHVCQUF1QixDQStFbkM7SUFBRCw4QkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBUZWNobml0aWFuQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEFkZFJlcGFpck1vZGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbCc7XHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIlxyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWRkLXJlcGFpci1tb2RhbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiY29tcG9uZW50cy9hZGQtcmVwYWlyLW1vZGFsL2FkZC1yZXBhaXItbW9kYWwuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRSZXBhaXJNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtb2RhbDogQWRkUmVwYWlyTW9kYWw7XHJcbiAgICByb29tTnVtYmVyOiBudW1iZXI7XHJcbiAgICB0ZWNobml0aWFuczogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgc2VsZWN0ZWRUZWNobml0aWFuSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB0ZWNobml0aWFuc05hbWVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5BY3Rpb25zOiBUZWNobml0aWFuQWN0aW9ucykge1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IEFkZFJlcGFpck1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gcGFyYW1zLmNvbnRleHQucm9vbU51bWJlcjtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLnRlY2huaXRpYW5BY3Rpb25zLmxvYWRUZWNobml0aWFucygpKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZWNobml0aWFucyA9IHN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRUZWNobml0aWFucyk7XHJcbiAgICAgICAgdGhpcy50ZWNobml0aWFuc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRlY2hzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5pdGlhbnNOYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICB0ZWNocy5mb3JFYWNoKHRlY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVjaG5pdGlhbnNOYW1lcy5wdXNoKHRlY2guTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLm9uKFwidW5sb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZUFubm91bmNlbWVudCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IHBvc3RQYXJhbXMgPSAnaG90ZWxzbj0nICsgQ29uZmlnLmhvdGVsU04gK1xyXG4gICAgICAgICAgICAnJnJvb21pZD0nICsgdGhpcy5yb29tTnVtYmVyICtcclxuICAgICAgICAgICAgJyZkZXNjcmlwdGlvbj0nICsgdGhpcy5tb2RhbC5kZXNjcmlwdGlvbiArXHJcbiAgICAgICAgICAgICcmd2hvcmVwb3J0ZWQ9JyArIDE2XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBob3RlbHNuOiBDb25maWcuaG90ZWxTTixcclxuICAgICAgICAgICAgcm9vbWlkOiB0aGlzLnJvb21OdW1iZXIsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm1vZGFsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB3aG9yZXBvcnRlZDogMTYsXHJcbiAgICAgICAgICAgIHRlY2huaWNpYW5pZDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsICsgJ0Fubm91bmNlbWVudCcsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7c3RhdHVzOiByZXNwb25zZS5zdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAvLyAuZG8ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19