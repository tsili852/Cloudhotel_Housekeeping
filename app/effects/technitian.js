"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var technitian_1 = require("../actions/technitian");
var technitian_list_service_1 = require("../shared/technitian/technitian-list.service");
var TechnitianEffects = /** @class */ (function () {
    function TechnitianEffects(update$, technitianActions, svc) {
        var _this = this;
        this.update$ = update$;
        this.technitianActions = technitianActions;
        this.svc = svc;
        this.loadTechnitians$ = this.update$
            .ofType(technitian_1.TechnitianActions.LOAD_TECHNITIANS)
            .map(function (options) { return options.payload; })
            .switchMap(function (options) {
            return _this.svc.getTechnitians();
        })
            .map(function (technitians) { return _this.technitianActions.loadTechnitiansSuccess(technitians); });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], TechnitianEffects.prototype, "loadTechnitians$", void 0);
    TechnitianEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            technitian_1.TechnitianActions,
            technitian_list_service_1.TechnitianListService])
    ], TechnitianEffects);
    return TechnitianEffects;
}());
exports.TechnitianEffects = TechnitianEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlY2huaXRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBR2hELG9EQUEwRDtBQUMxRCx3RkFBcUY7QUFHckY7SUFDSSwyQkFDWSxPQUFnQixFQUNoQixpQkFBb0MsRUFDcEMsR0FBMEI7UUFIdEMsaUJBSUk7UUFIUSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsUUFBRyxHQUFILEdBQUcsQ0FBdUI7UUFHNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDcEMsTUFBTSxDQUFDLDhCQUFpQixDQUFDLGdCQUFnQixDQUFDO2FBQzFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztJQVJqRixDQUFDO0lBRU07UUFBVCxnQkFBTSxFQUFFOzsrREFNMkU7SUFiM0UsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBR1ksaUJBQU87WUFDRyw4QkFBaUI7WUFDL0IsK0NBQXFCO09BSjdCLGlCQUFpQixDQWM3QjtJQUFELHdCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL3RlY2huaXRpYW5cIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC90ZWNobml0aWFuL3RlY2huaXRpYW4tbGlzdC5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuRWZmZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVwZGF0ZSQ6IEFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSB0ZWNobml0aWFuQWN0aW9uczogVGVjaG5pdGlhbkFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBzdmM6IFRlY2huaXRpYW5MaXN0U2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIEBFZmZlY3QoKSBsb2FkVGVjaG5pdGlhbnMkID0gdGhpcy51cGRhdGUkXHJcbiAgICAgICAgLm9mVHlwZShUZWNobml0aWFuQWN0aW9ucy5MT0FEX1RFQ0hOSVRJQU5TKVxyXG4gICAgICAgIC5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnBheWxvYWQpXHJcbiAgICAgICAgLnN3aXRjaE1hcChvcHRpb25zID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ZjLmdldFRlY2huaXRpYW5zKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKHRlY2huaXRpYW5zID0+IHRoaXMudGVjaG5pdGlhbkFjdGlvbnMubG9hZFRlY2huaXRpYW5zU3VjY2Vzcyh0ZWNobml0aWFucykpO1xyXG59Il19