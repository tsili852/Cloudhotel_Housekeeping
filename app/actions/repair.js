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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwYWlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwYWlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBQUE7SUFnQkEsQ0FBQztzQkFoQlksYUFBYTtJQUV0QixtQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLFVBQVU7UUFDMUIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGVBQWEsQ0FBQyxZQUFZO1lBQ2hDLE9BQU8sRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFDO1NBQ2hDLENBQUE7SUFDTCxDQUFDO0lBR0QsMENBQWtCLEdBQWxCLFVBQW1CLE9BQU87UUFDdEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGVBQWEsQ0FBQyxvQkFBb0I7WUFDeEMsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQTtJQUNMLENBQUM7SUFkTSwwQkFBWSxHQUFHLHVCQUF1QixDQUFDO0lBUXZDLGtDQUFvQixHQUFHLCtCQUErQixDQUFDO0lBVHJELGFBQWE7UUFEekIsaUJBQVUsRUFBRTtPQUNBLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7O0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBSZXBhaXIgfSBmcm9tIFwiLi4vc2hhcmVkL3JlcGFpci9yZXBhaXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcGFpckFjdGlvbnMge1xuICAgIHN0YXRpYyBMT0FEX1JFUEFJUlMgPSAnW1JlcGFpcl0gTG9hZCBSZXBhaXJzJztcbiAgICBsb2FkUmVwYWlycyhyb29tSWQsIGRheXNCZWZvcmUpOiBBY3Rpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUmVwYWlyQWN0aW9ucy5MT0FEX1JFUEFJUlMsXG4gICAgICAgICAgICBwYXlsb2FkOiB7cm9vbUlkLCBkYXlzQmVmb3JlfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIExPQURfUkVQQUlSU19TVUNDRVNTID0gJ1tSZXBhaXJdIExvYWQgUmVwYWlycyBTdWNjZXNzJztcbiAgICBsb2FkUmVwYWlyc1N1Y2Nlc3MocmVwYWlycyk6IEFjdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBSZXBhaXJBY3Rpb25zLkxPQURfUkVQQUlSU19TVUNDRVNTLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVwYWlyc1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==