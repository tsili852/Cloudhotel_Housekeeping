"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoomActions = /** @class */ (function () {
    function RoomActions() {
    }
    RoomActions_1 = RoomActions;
    RoomActions.prototype.loadRooms = function (skip, take) {
        return {
            type: RoomActions_1.LOAD_ROOMS,
            payload: { skip: skip, take: take }
        };
    };
    RoomActions.prototype.loadRoomsSuccess = function (rooms) {
        return {
            type: RoomActions_1.LOAD_ROOMS_SUCCESS,
            payload: rooms
        };
    };
    RoomActions.LOAD_ROOMS = '[Room] Load Rooms';
    RoomActions.LOAD_ROOMS_SUCCESS = '[Room] Load Romms Success';
    RoomActions = RoomActions_1 = __decorate([
        core_1.Injectable()
    ], RoomActions);
    return RoomActions;
    var RoomActions_1;
}());
exports.RoomActions = RoomActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQWdCQSxDQUFDO29CQWhCWSxXQUFXO0lBRXBCLCtCQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsSUFBSTtRQUNoQixNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsYUFBVyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEVBQUMsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUM7U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFHRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztRQUNsQixNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsYUFBVyxDQUFDLGtCQUFrQjtZQUNwQyxPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQWRNLHNCQUFVLEdBQUcsbUJBQW1CLENBQUM7SUFRakMsOEJBQWtCLEdBQUcsMkJBQTJCLENBQUM7SUFUL0MsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQWdCdkI7SUFBRCxrQkFBQzs7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9vbUFjdGlvbnMge1xyXG4gICAgc3RhdGljIExPQURfUk9PTVMgPSAnW1Jvb21dIExvYWQgUm9vbXMnO1xyXG4gICAgbG9hZFJvb21zKHNraXAsIHRha2UpOiBBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFJvb21BY3Rpb25zLkxPQURfUk9PTVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtza2lwLCB0YWtlfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIExPQURfUk9PTVNfU1VDQ0VTUyA9ICdbUm9vbV0gTG9hZCBSb21tcyBTdWNjZXNzJztcclxuICAgIGxvYWRSb29tc1N1Y2Nlc3Mocm9vbXMpOiBBY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFJvb21BY3Rpb25zLkxPQURfUk9PTVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogcm9vbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=