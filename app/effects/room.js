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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBR2hELDBDQUErQztBQUMvQyw0REFBMEQ7QUFHMUQ7SUFDSSxxQkFDWSxPQUFnQixFQUNoQixXQUF3QixFQUN4QixHQUFnQixFQUNoQixXQUF3QjtRQUpwQyxpQkFLSTtRQUpRLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUcxQixlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDOUIsTUFBTSxDQUFDLG1CQUFXLENBQUMsVUFBVSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQVJ6RCxDQUFDO0lBRU07UUFBVCxnQkFBTSxFQUFFOzttREFNbUQ7SUFkbkQsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdZLGlCQUFPO1lBQ0gsbUJBQVc7WUFDbkIsMEJBQVc7WUFDSCwwQkFBVztPQUwzQixXQUFXLENBZXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvb21FZmZlY3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlJDogQWN0aW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvb21BY3Rpb25zOiBSb29tQWN0aW9ucyxcclxuICAgICAgICBwcml2YXRlIHN2YzogUm9vbVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgICBARWZmZWN0KCkgbG9hZFJvb21zJCA9IHRoaXMudXBkYXRlJFxyXG4gICAgICAgIC5vZlR5cGUoUm9vbUFjdGlvbnMuTE9BRF9ST09NUylcclxuICAgICAgICAubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5wYXlsb2FkKVxyXG4gICAgICAgIC5zd2l0Y2hNYXAob3B0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN2Yy5nZXRBbGxSb29tcyhvcHRpb25zLmRheXNCZWZvcmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcChyb29tcyA9PiB0aGlzLnJvb21BY3Rpb25zLmxvYWRSb29tc1N1Y2Nlc3Mocm9vbXMpKTtcclxufSJdfQ==