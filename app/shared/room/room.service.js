"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var configuration_service_1 = require("../../shared/configuration.service");
var config_1 = require("../config");
var RoomService = /** @class */ (function () {
    function RoomService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
    }
    RoomService.prototype.getAllRooms = function (daysBefore) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.apiUrl +
            'GetRoomsAndTasksAsync?HotelSN=' + this.configurationService.getHotelSN() + '&daysBefore=' + daysBefore, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    RoomService.prototype.handleErrors = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw(error);
    };
    RoomService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, configuration_service_1.ConfigurationService])
    ], RoomService);
    return RoomService;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNEVBQTBFO0FBTzFFLG9DQUFtQztBQUduQztJQUNJLHFCQUFvQixJQUFVLEVBQVUsb0JBQTBDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQUV0RixpQ0FBVyxHQUFYLFVBQVksVUFBa0I7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTTtZQUM5QixnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLEdBQUcsY0FBYyxHQUFHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNqSSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixXQUFJLEVBQWdDLDRDQUFvQjtPQUR6RSxXQUFXLENBaUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG4vLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuLy8gaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgZ2V0QWxsUm9vbXMoZGF5c0JlZm9yZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxSb29tW10+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXHJcbiAgICAgICAgICAgICdHZXRSb29tc0FuZFRhc2tzQXN5bmM/SG90ZWxTTj0nICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRIb3RlbFNOKCkgKyAnJmRheXNCZWZvcmU9JyArIGRheXNCZWZvcmUsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAgICAgICAgXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==