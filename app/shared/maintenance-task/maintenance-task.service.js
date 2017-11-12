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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnRlbmFuY2UtdGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnRlbmFuY2UtdGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNEVBQTBFO0FBTzFFLG9DQUFtQztBQUduQztJQUNJLGdDQUFvQixJQUFVLEVBQVUsb0JBQTBDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQUV0RixvREFBbUIsR0FBbkI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNO1lBQzlCLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN0RyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQlEsc0JBQXNCO1FBRGxDLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUksRUFBZ0MsNENBQW9CO09BRHpFLHNCQUFzQixDQWlCbEM7SUFBRCw2QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuLy8gaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5cbmltcG9ydCB7IE1haW50ZW5hbmNlVGFzayB9IGZyb20gJy4vbWFpbnRlbmFuY2UtdGFzayc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFpbnRlbmFuY2VUYXNrU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICAgIGdldE1haW50ZW5hbmNlVGFza3MoKTogT2JzZXJ2YWJsZTxNYWludGVuYW5jZVRhc2tbXT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXG4gICAgICAgICAgICAnR2V0TWFpbnRlbmFuY2VUYXNrc0FzeW5jP0hvdGVsU049JyArIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuZ2V0SG90ZWxTTigpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpICAgICAgICBcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=