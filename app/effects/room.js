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
            return _this.svc.getAllRooms();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBR2hELDBDQUErQztBQUMvQyw0REFBMEQ7QUFHMUQ7SUFDSSxxQkFDWSxPQUFnQixFQUNoQixXQUF3QixFQUN4QixHQUFnQixFQUNoQixXQUF3QjtRQUpwQyxpQkFLSTtRQUpRLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUcxQixlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDOUIsTUFBTSxDQUFDLG1CQUFXLENBQUMsVUFBVSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFSekQsQ0FBQztJQUVNO1FBQVQsZ0JBQU0sRUFBRTs7bURBTW1EO0lBZG5ELFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHWSxpQkFBTztZQUNILG1CQUFXO1lBQ25CLDBCQUFXO1lBQ0gsMEJBQVc7T0FMM0IsV0FBVyxDQWV2QjtJQUFELGtCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvb21BY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSb29tRWZmZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVwZGF0ZSQ6IEFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tQWN0aW9uczogUm9vbUFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBzdmM6IFJvb21TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG4gICAgQEVmZmVjdCgpIGxvYWRSb29tcyQgPSB0aGlzLnVwZGF0ZSRcclxuICAgICAgICAub2ZUeXBlKFJvb21BY3Rpb25zLkxPQURfUk9PTVMpXHJcbiAgICAgICAgLm1hcChvcHRpb25zID0+IG9wdGlvbnMucGF5bG9hZClcclxuICAgICAgICAuc3dpdGNoTWFwKG9wdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdmMuZ2V0QWxsUm9vbXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAocm9vbXMgPT4gdGhpcy5yb29tQWN0aW9ucy5sb2FkUm9vbXNTdWNjZXNzKHJvb21zKSk7XHJcbn0iXX0=