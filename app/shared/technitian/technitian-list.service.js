"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var config_1 = require("../config");
var TechnitianListService = /** @class */ (function () {
    function TechnitianListService(http) {
        this.http = http;
    }
    TechnitianListService.prototype.getTechnitians = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.apiUrl +
            'GetTechnicians?HotelSN=' + config_1.Config.hotelSN, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleErrors(error); });
    };
    TechnitianListService.prototype.handleErrors = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw(error);
    };
    TechnitianListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TechnitianListService);
    return TechnitianListService;
}());
exports.TechnitianListService = TechnitianListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWNobml0aWFuLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsNkJBQWtDO0FBR2xDLG9DQUFtQztBQUduQztJQUNJLCtCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsOENBQWMsR0FBZDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTTtZQUM5Qix5QkFBeUIsR0FBRyxlQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2hFLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBaEJRLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi90ZWNobml0aWFuXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuTGlzdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldFRlY2huaXRpYW5zKCk6IE9ic2VydmFibGU8VGVjaG5pdGlhbltdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcbiAgICAgICAgICAgICdHZXRUZWNobmljaWFucz9Ib3RlbFNOPScgKyBDb25maWcuaG90ZWxTTiwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcikpO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufSJdfQ==