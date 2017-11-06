"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RepairActions = /** @class */ (function () {
    function RepairActions() {
    }
    RepairActions_1 = RepairActions;
    RepairActions.prototype.loadRepairs = function (roomId, daysBefore) {
        return {
            type: RepairActions_1.LOAD_REPAIRS,
            payload: { roomId: roomId, daysBefore: daysBefore }
        };
    };
    RepairActions.prototype.loadRepairsSuccess = function (repairs) {
        return {
            type: RepairActions_1.LOAD_REPAIRS_SUCCESS,
            payload: repairs
        };
    };
    RepairActions.LOAD_REPAIRS = '[Repair] Load Repairs';
    RepairActions.LOAD_REPAIRS_SUCCESS = '[Repair] Load Repairs Success';
    RepairActions = RepairActions_1 = __decorate([
        core_1.Injectable()
    ], RepairActions);
    return RepairActions;
    var RepairActions_1;
}());
exports.RepairActions = RepairActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwYWlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwYWlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBQUE7SUFnQkEsQ0FBQztzQkFoQlksYUFBYTtJQUV0QixtQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLFVBQVU7UUFDMUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGVBQWEsQ0FBQyxZQUFZO1lBQ2hDLE9BQU8sRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFDO1NBQ2hDLENBQUE7SUFDTCxDQUFDO0lBR0QsMENBQWtCLEdBQWxCLFVBQW1CLE9BQU87UUFDdEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGVBQWEsQ0FBQyxvQkFBb0I7WUFDeEMsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQTtJQUNMLENBQUM7SUFkTSwwQkFBWSxHQUFHLHVCQUF1QixDQUFDO0lBUXZDLGtDQUFvQixHQUFHLCtCQUErQixDQUFDO0lBVHJELGFBQWE7UUFEekIsaUJBQVUsRUFBRTtPQUNBLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7O0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSZXBhaXIgfSBmcm9tIFwiLi4vc2hhcmVkL3JlcGFpci9yZXBhaXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcGFpckFjdGlvbnMge1xyXG4gICAgc3RhdGljIExPQURfUkVQQUlSUyA9ICdbUmVwYWlyXSBMb2FkIFJlcGFpcnMnO1xyXG4gICAgbG9hZFJlcGFpcnMocm9vbUlkLCBkYXlzQmVmb3JlKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSZXBhaXJBY3Rpb25zLkxPQURfUkVQQUlSUyxcclxuICAgICAgICAgICAgcGF5bG9hZDoge3Jvb21JZCwgZGF5c0JlZm9yZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIExPQURfUkVQQUlSU19TVUNDRVNTID0gJ1tSZXBhaXJdIExvYWQgUmVwYWlycyBTdWNjZXNzJztcclxuICAgIGxvYWRSZXBhaXJzU3VjY2VzcyhyZXBhaXJzKTogQWN0aW9uIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSZXBhaXJBY3Rpb25zLkxPQURfUkVQQUlSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXBhaXJzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19