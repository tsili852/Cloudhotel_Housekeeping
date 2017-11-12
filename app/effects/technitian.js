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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlY2huaXRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBR2hELG9EQUEwRDtBQUMxRCx3RkFBcUY7QUFHckY7SUFDSSwyQkFDWSxPQUFnQixFQUNoQixpQkFBb0MsRUFDcEMsR0FBMEI7UUFIdEMsaUJBSUk7UUFIUSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsUUFBRyxHQUFILEdBQUcsQ0FBdUI7UUFHNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDcEMsTUFBTSxDQUFDLDhCQUFpQixDQUFDLGdCQUFnQixDQUFDO2FBQzFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztJQVJqRixDQUFDO0lBRU07UUFBVCxnQkFBTSxFQUFFOzsrREFNMkU7SUFiM0UsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBR1ksaUJBQU87WUFDRyw4QkFBaUI7WUFDL0IsK0NBQXFCO09BSjdCLGlCQUFpQixDQWM3QjtJQUFELHdCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xuaW1wb3J0IHsgVGVjaG5pdGlhbkFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy90ZWNobml0aWFuXCI7XG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlY2huaXRpYW5FZmZlY3RzIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1cGRhdGUkOiBBY3Rpb25zLFxuICAgICAgICBwcml2YXRlIHRlY2huaXRpYW5BY3Rpb25zOiBUZWNobml0aWFuQWN0aW9ucyxcbiAgICAgICAgcHJpdmF0ZSBzdmM6IFRlY2huaXRpYW5MaXN0U2VydmljZVxuICAgICkge31cblxuICAgIEBFZmZlY3QoKSBsb2FkVGVjaG5pdGlhbnMkID0gdGhpcy51cGRhdGUkXG4gICAgICAgIC5vZlR5cGUoVGVjaG5pdGlhbkFjdGlvbnMuTE9BRF9URUNITklUSUFOUylcbiAgICAgICAgLm1hcChvcHRpb25zID0+IG9wdGlvbnMucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChvcHRpb25zID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN2Yy5nZXRUZWNobml0aWFucygpO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKHRlY2huaXRpYW5zID0+IHRoaXMudGVjaG5pdGlhbkFjdGlvbnMubG9hZFRlY2huaXRpYW5zU3VjY2Vzcyh0ZWNobml0aWFucykpO1xufSJdfQ==