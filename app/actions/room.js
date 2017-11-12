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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQWdCQSxDQUFDO29CQWhCWSxXQUFXO0lBRXBCLCtCQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVU7UUFDNUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGFBQVcsQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFDO1NBQ3BDLENBQUM7SUFDTixDQUFDO0lBR0Qsc0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGFBQVcsQ0FBQyxrQkFBa0I7WUFDcEMsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFkTSxzQkFBVSxHQUFHLG1CQUFtQixDQUFDO0lBUWpDLDhCQUFrQixHQUFHLDJCQUEyQixDQUFDO0lBVC9DLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0FnQnZCO0lBQUQsa0JBQUM7O0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uL3NoYXJlZC9yb29tL3Jvb21cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvb21BY3Rpb25zIHtcbiAgICBzdGF0aWMgTE9BRF9ST09NUyA9ICdbUm9vbV0gTG9hZCBSb29tcyc7XG4gICAgbG9hZFJvb21zKHNraXAsIHRha2UsIGRheXNCZWZvcmUpOiBBY3Rpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUm9vbUFjdGlvbnMuTE9BRF9ST09NUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtza2lwLCB0YWtlLCBkYXlzQmVmb3JlfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBMT0FEX1JPT01TX1NVQ0NFU1MgPSAnW1Jvb21dIExvYWQgUm9tbXMgU3VjY2Vzcyc7XG4gICAgbG9hZFJvb21zU3VjY2Vzcyhyb29tcyk6IEFjdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBSb29tQWN0aW9ucy5MT0FEX1JPT01TX1NVQ0NFU1MsXG4gICAgICAgICAgICBwYXlsb2FkOiByb29tc1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==