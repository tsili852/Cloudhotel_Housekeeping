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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlY2huaXRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQWVBLENBQUM7MEJBZlksaUJBQWlCO0lBRTFCLDJDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsbUJBQWlCLENBQUMsZ0JBQWdCO1NBQzNDLENBQUE7SUFDTCxDQUFDO0lBR0Qsa0RBQXNCLEdBQXRCLFVBQXVCLFdBQVc7UUFDOUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLG1CQUFpQixDQUFDLHdCQUF3QjtZQUNoRCxPQUFPLEVBQUUsV0FBVztTQUN2QixDQUFBO0lBQ0wsQ0FBQztJQWJNLGtDQUFnQixHQUFHLCtCQUErQixDQUFDO0lBT25ELDBDQUF3QixHQUFHLHVDQUF1QyxDQUFDO0lBUmpFLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO09BQ0EsaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7O0NBQUEsQUFmRCxJQWVDO0FBZlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gXCIuLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuQWN0aW9ucyB7XHJcbiAgICBzdGF0aWMgTE9BRF9URUNITklUSUFOUyA9ICdbVGVjaG5pdGlhbl0gTG9hZCBUZWNobml0aWFucyc7XHJcbiAgICBsb2FkVGVjaG5pdGlhbnMoKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBUZWNobml0aWFuQWN0aW9ucy5MT0FEX1RFQ0hOSVRJQU5TXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBMT0FEX1RFQ0hOSVRJQU5TX1NVQ0NFU1MgPSAnW1RlY2huaXRpYW5dIExvYWQgVGVjaG5pdGlhbnMgU3VjY2Vzcyc7XHJcbiAgICBsb2FkVGVjaG5pdGlhbnNTdWNjZXNzKHRlY2huaXRpYW5zKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBUZWNobml0aWFuQWN0aW9ucy5MT0FEX1RFQ0hOSVRJQU5TX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRlY2huaXRpYW5zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19