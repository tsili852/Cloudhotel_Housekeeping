"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var configuration_service_1 = require("../../shared/configuration.service");
var config_1 = require("../config");
var MaintenanceTaskService = /** @class */ (function () {
    function MaintenanceTaskService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
    }
    MaintenanceTaskService.prototype.getMaintenanceTasks = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.apiUrl +
            'GetMaintenanceTasksAsync?HotelSN=' + this.configurationService.getHotelSN(), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    MaintenanceTaskService.prototype.handleErrors = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw(error);
    };
    MaintenanceTaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, configuration_service_1.ConfigurationService])
    ], MaintenanceTaskService);
    return MaintenanceTaskService;
}());
exports.MaintenanceTaskService = MaintenanceTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnRlbmFuY2UtdGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnRlbmFuY2UtdGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNEVBQTBFO0FBTzFFLG9DQUFtQztBQUduQztJQUNJLGdDQUFvQixJQUFVLEVBQVUsb0JBQTBDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQUV0RixvREFBbUIsR0FBbkI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNO1lBQzlCLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN0RyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQlEsc0JBQXNCO1FBRGxDLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUksRUFBZ0MsNENBQW9CO09BRHpFLHNCQUFzQixDQWlCbEM7SUFBRCw2QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbi8vIGltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IE1haW50ZW5hbmNlVGFzayB9IGZyb20gJy4vbWFpbnRlbmFuY2UtdGFzayc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYWludGVuYW5jZVRhc2tTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgZ2V0TWFpbnRlbmFuY2VUYXNrcygpOiBPYnNlcnZhYmxlPE1haW50ZW5hbmNlVGFza1tdPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFxyXG4gICAgICAgICAgICAnR2V0TWFpbnRlbmFuY2VUYXNrc0FzeW5jP0hvdGVsU049JyArIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuZ2V0SG90ZWxTTigpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgICAgICAgIFxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=