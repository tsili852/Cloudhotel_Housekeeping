"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
var initialState = {
    loaded: false,
    loading: false,
    repairs: []
};
exports.default = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case index_1.RepairActions.LOAD_REPAIRS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case index_1.RepairActions.LOAD_REPAIRS_SUCCESS: {
            var repairs_1 = action.payload;
            return {
                loaded: true,
                loading: false,
                repairs: repairs_1
            };
        }
        default: {
            return state;
        }
    }
};
exports.getLoaded = function (state) { return state.loaded; };
exports.getLoading = function (state) { return state.loading; };
exports.repairs = function (state) { return state.repairs; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwYWlycy1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwYWlycy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQWlEO0FBUWpELElBQU0sWUFBWSxHQUFvQjtJQUNsQyxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRUYsa0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDaEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxxQkFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxLQUFLLHFCQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUN0QyxJQUFNLFNBQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRS9CLE1BQU0sQ0FBQztnQkFDSCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsU0FBTzthQUNuQixDQUFBO1FBQ0wsQ0FBQztRQUNELFNBQVMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQztBQUNyRCxRQUFBLFVBQVUsR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQztBQUN2RCxRQUFBLE9BQU8sR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XG5pbXBvcnQgeyBSZXBhaXJBY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSZXBhaXJMaXN0U3RhdGUge1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIHJlcGFpcnM6IFJlcGFpcltdO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlcGFpckxpc3RTdGF0ZSA9IHtcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHJlcGFpcnM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogUmVwYWlyTGlzdFN0YXRlID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUmVwYWlyQWN0aW9ucy5MT0FEX1JFUEFJUlM6IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgUmVwYWlyQWN0aW9ucy5MT0FEX1JFUEFJUlNfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgcmVwYWlycyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXBhaXJzOiByZXBhaXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TG9hZGVkID0gKHN0YXRlOiBSZXBhaXJMaXN0U3RhdGUpID0+IHN0YXRlLmxvYWRlZDtcbmV4cG9ydCBjb25zdCBnZXRMb2FkaW5nID0gKHN0YXRlOiBSZXBhaXJMaXN0U3RhdGUpID0+IHN0YXRlLmxvYWRpbmc7XG5leHBvcnQgY29uc3QgcmVwYWlycyA9IChzdGF0ZTogUmVwYWlyTGlzdFN0YXRlKSA9PiBzdGF0ZS5yZXBhaXJzOyJdfQ==