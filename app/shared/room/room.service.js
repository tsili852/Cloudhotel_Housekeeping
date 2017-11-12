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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNEVBQTBFO0FBTzFFLG9DQUFtQztBQUduQztJQUNJLHFCQUFvQixJQUFVLEVBQVUsb0JBQTBDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQUV0RixpQ0FBVyxHQUFYLFVBQVksVUFBa0I7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTTtZQUM5QixnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLEdBQUcsY0FBYyxHQUFHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNqSSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixXQUFJLEVBQWdDLDRDQUFvQjtPQUR6RSxXQUFXLENBaUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xuLy8gaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbi8vIGltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuLy8gaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcblxuXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb29tU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICAgIGdldEFsbFJvb21zKGRheXNCZWZvcmU6IG51bWJlcik6IE9ic2VydmFibGU8Um9vbVtdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcbiAgICAgICAgICAgICdHZXRSb29tc0FuZFRhc2tzQXN5bmM/SG90ZWxTTj0nICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRIb3RlbFNOKCkgKyAnJmRheXNCZWZvcmU9JyArIGRheXNCZWZvcmUsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgICAgICAgIFxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufSJdfQ==