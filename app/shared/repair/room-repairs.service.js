"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var config_1 = require("../config");
var RoomRepairsService = /** @class */ (function () {
    function RoomRepairsService(http) {
        this.http = http;
    }
    RoomRepairsService.prototype.getRepairsByRoom = function (roomId, daysBefore) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.apiUrl +
            'GetRepairsForRoomAsync?HotelSN=' + config_1.Config.hotelSN + '&RoomID=' + roomId + '&daysBefore=' + daysBefore, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleErrors(error); });
    };
    RoomRepairsService.prototype.handleErrors = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw(error);
    };
    RoomRepairsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RoomRepairsService);
    return RoomRepairsService;
}());
exports.RoomRepairsService = RoomRepairsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1yZXBhaXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLXJlcGFpcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsNkJBQWtDO0FBR2xDLG9DQUFtQztBQUduQztJQUNJLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsNkNBQWdCLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxVQUFrQjtRQUFuRCxpQkFRQztRQVBHLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU07WUFDOUIsaUNBQWlDLEdBQUcsZUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDNUgsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQlEsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUk7T0FEckIsa0JBQWtCLENBaUI5QjtJQUFELHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4vcmVwYWlyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb29tUmVwYWlyc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldFJlcGFpcnNCeVJvb20ocm9vbUlkOiBudW1iZXIsIGRheXNCZWZvcmU6IG51bWJlcik6IE9ic2VydmFibGU8UmVwYWlyW10+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFxuICAgICAgICAgICAgJ0dldFJlcGFpcnNGb3JSb29tQXN5bmM/SG90ZWxTTj0nICsgQ29uZmlnLmhvdGVsU04gKyAnJlJvb21JRD0nICsgcm9vbUlkICsgJyZkYXlzQmVmb3JlPScgKyBkYXlzQmVmb3JlLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19