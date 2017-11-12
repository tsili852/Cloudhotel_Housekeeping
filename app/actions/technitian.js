"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TechnitianActions = /** @class */ (function () {
    function TechnitianActions() {
    }
    TechnitianActions_1 = TechnitianActions;
    TechnitianActions.prototype.loadTechnitians = function () {
        return {
            type: TechnitianActions_1.LOAD_TECHNITIANS
        };
    };
    TechnitianActions.prototype.loadTechnitiansSuccess = function (technitians) {
        return {
            type: TechnitianActions_1.LOAD_TECHNITIANS_SUCCESS,
            payload: technitians
        };
    };
    TechnitianActions.LOAD_TECHNITIANS = '[Technitian] Load Technitians';
    TechnitianActions.LOAD_TECHNITIANS_SUCCESS = '[Technitian] Load Technitians Success';
    TechnitianActions = TechnitianActions_1 = __decorate([
        core_1.Injectable()
    ], TechnitianActions);
    return TechnitianActions;
    var TechnitianActions_1;
}());
exports.TechnitianActions = TechnitianActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlY2huaXRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQWVBLENBQUM7MEJBZlksaUJBQWlCO0lBRTFCLDJDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsbUJBQWlCLENBQUMsZ0JBQWdCO1NBQzNDLENBQUE7SUFDTCxDQUFDO0lBR0Qsa0RBQXNCLEdBQXRCLFVBQXVCLFdBQVc7UUFDOUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLG1CQUFpQixDQUFDLHdCQUF3QjtZQUNoRCxPQUFPLEVBQUUsV0FBVztTQUN2QixDQUFBO0lBQ0wsQ0FBQztJQWJNLGtDQUFnQixHQUFHLCtCQUErQixDQUFDO0lBT25ELDBDQUF3QixHQUFHLHVDQUF1QyxDQUFDO0lBUmpFLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO09BQ0EsaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7O0NBQUEsQUFmRCxJQWVDO0FBZlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcblxuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuQWN0aW9ucyB7XG4gICAgc3RhdGljIExPQURfVEVDSE5JVElBTlMgPSAnW1RlY2huaXRpYW5dIExvYWQgVGVjaG5pdGlhbnMnO1xuICAgIGxvYWRUZWNobml0aWFucygpOiBBY3Rpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogVGVjaG5pdGlhbkFjdGlvbnMuTE9BRF9URUNITklUSUFOU1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIExPQURfVEVDSE5JVElBTlNfU1VDQ0VTUyA9ICdbVGVjaG5pdGlhbl0gTG9hZCBUZWNobml0aWFucyBTdWNjZXNzJztcbiAgICBsb2FkVGVjaG5pdGlhbnNTdWNjZXNzKHRlY2huaXRpYW5zKTogQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFRlY2huaXRpYW5BY3Rpb25zLkxPQURfVEVDSE5JVElBTlNfU1VDQ0VTUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHRlY2huaXRpYW5zXG4gICAgICAgIH1cbiAgICB9XG59Il19