"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoomActions = /** @class */ (function () {
    function RoomActions() {
    }
    RoomActions_1 = RoomActions;
    RoomActions.prototype.loadRooms = function (skip, take, daysBefore) {
        return {
            type: RoomActions_1.LOAD_ROOMS,
            payload: { skip: skip, take: take, daysBefore: daysBefore }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQWdCQSxDQUFDO29CQWhCWSxXQUFXO0lBRXBCLCtCQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVU7UUFDNUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGFBQVcsQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFDO1NBQ3BDLENBQUM7SUFDTixDQUFDO0lBR0Qsc0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGFBQVcsQ0FBQyxrQkFBa0I7WUFDcEMsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFkTSxzQkFBVSxHQUFHLG1CQUFtQixDQUFDO0lBUWpDLDhCQUFrQixHQUFHLDJCQUEyQixDQUFDO0lBVC9DLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0FnQnZCO0lBQUQsa0JBQUM7O0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uL3NoYXJlZC9yb29tL3Jvb21cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvb21BY3Rpb25zIHtcclxuICAgIHN0YXRpYyBMT0FEX1JPT01TID0gJ1tSb29tXSBMb2FkIFJvb21zJztcclxuICAgIGxvYWRSb29tcyhza2lwLCB0YWtlLCBkYXlzQmVmb3JlKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSb29tQWN0aW9ucy5MT0FEX1JPT01TLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7c2tpcCwgdGFrZSwgZGF5c0JlZm9yZX1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBMT0FEX1JPT01TX1NVQ0NFU1MgPSAnW1Jvb21dIExvYWQgUm9tbXMgU3VjY2Vzcyc7XHJcbiAgICBsb2FkUm9vbXNTdWNjZXNzKHJvb21zKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSb29tQWN0aW9ucy5MT0FEX1JPT01TX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJvb21zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19