"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var index_1 = require("../actions/index");
var room_repairs_service_1 = require("../shared/repair/room-repairs.service");
var RepairEffects = /** @class */ (function () {
    function RepairEffects(update$, repairActions, svc) {
        var _this = this;
        this.update$ = update$;
        this.repairActions = repairActions;
        this.svc = svc;
        this.loadRepairs$ = this.update$
            .ofType(index_1.RepairActions.LOAD_REPAIRS)
            .map(function (options) { return options.payload; })
            .switchMap(function (options) {
            return _this.svc.getRepairsByRoom(options.roomId, options.daysBefore);
        })
            .map(function (repairs) { return _this.repairActions.loadRepairsSuccess(repairs); });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RepairEffects.prototype, "loadRepairs$", void 0);
    RepairEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            index_1.RepairActions,
            room_repairs_service_1.RoomRepairsService])
    ], RepairEffects);
    return RepairEffects;
}());
exports.RepairEffects = RepairEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwYWlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwYWlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUFnRDtBQUdoRCwwQ0FBaUQ7QUFDakQsOEVBQTJFO0FBRzNFO0lBQ0ksdUJBQ1ksT0FBZ0IsRUFDaEIsYUFBNEIsRUFDNUIsR0FBdUI7UUFIbkMsaUJBSUk7UUFIUSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQW9CO1FBR3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDaEMsTUFBTSxDQUFDLHFCQUFhLENBQUMsWUFBWSxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7SUFSakUsQ0FBQztJQUVNO1FBQVQsZ0JBQU0sRUFBRTs7dURBTTJEO0lBYjNELGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHWSxpQkFBTztZQUNELHFCQUFhO1lBQ3ZCLHlDQUFrQjtPQUoxQixhQUFhLENBY3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcbmltcG9ydCB7IFJlcGFpckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xuaW1wb3J0IHsgUm9vbVJlcGFpcnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9yZXBhaXIvcm9vbS1yZXBhaXJzLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcGFpckVmZmVjdHMge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVwZGF0ZSQ6IEFjdGlvbnMsXG4gICAgICAgIHByaXZhdGUgcmVwYWlyQWN0aW9uczogUmVwYWlyQWN0aW9ucyxcbiAgICAgICAgcHJpdmF0ZSBzdmM6IFJvb21SZXBhaXJzU2VydmljZVxuICAgICkge31cblxuICAgIEBFZmZlY3QoKSBsb2FkUmVwYWlycyQgPSB0aGlzLnVwZGF0ZSRcbiAgICAgICAgLm9mVHlwZShSZXBhaXJBY3Rpb25zLkxPQURfUkVQQUlSUylcbiAgICAgICAgLm1hcChvcHRpb25zID0+IG9wdGlvbnMucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChvcHRpb25zID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN2Yy5nZXRSZXBhaXJzQnlSb29tKG9wdGlvbnMucm9vbUlkLCBvcHRpb25zLmRheXNCZWZvcmUpO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKHJlcGFpcnMgPT4gdGhpcy5yZXBhaXJBY3Rpb25zLmxvYWRSZXBhaXJzU3VjY2VzcyhyZXBhaXJzKSk7XG59Il19