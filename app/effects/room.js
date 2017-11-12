"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var index_1 = require("../actions/index");
var room_service_1 = require("../shared/room/room.service");
var RoomEffects = /** @class */ (function () {
    function RoomEffects(update$, roomActions, svc, roomService) {
        var _this = this;
        this.update$ = update$;
        this.roomActions = roomActions;
        this.svc = svc;
        this.roomService = roomService;
        this.loadRooms$ = this.update$
            .ofType(index_1.RoomActions.LOAD_ROOMS)
            .map(function (options) { return options.payload; })
            .switchMap(function (options) {
            return _this.svc.getAllRooms(options.daysBefore);
        })
            .map(function (rooms) { return _this.roomActions.loadRoomsSuccess(rooms); });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoomEffects.prototype, "loadRooms$", void 0);
    RoomEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            index_1.RoomActions,
            room_service_1.RoomService,
            room_service_1.RoomService])
    ], RoomEffects);
    return RoomEffects;
}());
exports.RoomEffects = RoomEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBR2hELDBDQUErQztBQUMvQyw0REFBMEQ7QUFHMUQ7SUFDSSxxQkFDWSxPQUFnQixFQUNoQixXQUF3QixFQUN4QixHQUFnQixFQUNoQixXQUF3QjtRQUpwQyxpQkFLSTtRQUpRLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUcxQixlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDOUIsTUFBTSxDQUFDLG1CQUFXLENBQUMsVUFBVSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQVJ6RCxDQUFDO0lBRU07UUFBVCxnQkFBTSxFQUFFOzttREFNbUQ7SUFkbkQsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdZLGlCQUFPO1lBQ0gsbUJBQVc7WUFDbkIsMEJBQVc7WUFDSCwwQkFBVztPQUwzQixXQUFXLENBZXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcbmltcG9ydCB7IFJvb21BY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9vbUVmZmVjdHMge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVwZGF0ZSQ6IEFjdGlvbnMsXG4gICAgICAgIHByaXZhdGUgcm9vbUFjdGlvbnM6IFJvb21BY3Rpb25zLFxuICAgICAgICBwcml2YXRlIHN2YzogUm9vbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgQEVmZmVjdCgpIGxvYWRSb29tcyQgPSB0aGlzLnVwZGF0ZSRcbiAgICAgICAgLm9mVHlwZShSb29tQWN0aW9ucy5MT0FEX1JPT01TKVxuICAgICAgICAubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKG9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ZjLmdldEFsbFJvb21zKG9wdGlvbnMuZGF5c0JlZm9yZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAocm9vbXMgPT4gdGhpcy5yb29tQWN0aW9ucy5sb2FkUm9vbXNTdWNjZXNzKHJvb21zKSk7XG59Il19