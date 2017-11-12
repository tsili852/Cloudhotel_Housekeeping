"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var applicationSettings = require("tns-core-modules/application-settings");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
    }
    ConfigurationService.prototype.getHotelSN = function () {
        return applicationSettings.getString('hotelsn');
    };
    ConfigurationService.prototype.setHotelSN = function (hotelSN) {
        applicationSettings.setString('hotelsn', hotelSN);
    };
    ConfigurationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJFQUE2RTtBQUk3RTtJQUNJO0lBQWUsQ0FBQztJQUVoQix5Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBVFEsb0JBQW9CO1FBRGhDLGlCQUFVLEVBQUU7O09BQ0Esb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGdldEhvdGVsU04oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdob3RlbHNuJyk7XG4gICAgfVxuXG4gICAgc2V0SG90ZWxTTihob3RlbFNOOiBzdHJpbmcpIHtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ2hvdGVsc24nLCBob3RlbFNOKVxuICAgIH1cbn0iXX0=