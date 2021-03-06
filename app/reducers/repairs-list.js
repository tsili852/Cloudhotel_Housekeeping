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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwYWlycy1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwYWlycy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQWlEO0FBUWpELElBQU0sWUFBWSxHQUFvQjtJQUNsQyxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRUYsa0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDaEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxxQkFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxLQUFLLHFCQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUN0QyxJQUFNLFNBQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRS9CLE1BQU0sQ0FBQztnQkFDSCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsU0FBTzthQUNuQixDQUFBO1FBQ0wsQ0FBQztRQUNELFNBQVMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQztBQUNyRCxRQUFBLFVBQVUsR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQztBQUN2RCxRQUFBLE9BQU8sR0FBRyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVwYWlyIH0gZnJvbSBcIi4uL3NoYXJlZC9yZXBhaXIvcmVwYWlyXCI7XHJcbmltcG9ydCB7IFJlcGFpckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXBhaXJMaXN0U3RhdGUge1xyXG4gICAgbG9hZGVkOiBib29sZWFuO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHJlcGFpcnM6IFJlcGFpcltdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlcGFpckxpc3RTdGF0ZSA9IHtcclxuICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlcGFpcnM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogUmVwYWlyTGlzdFN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFJlcGFpckFjdGlvbnMuTE9BRF9SRVBBSVJTOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSZXBhaXJBY3Rpb25zLkxPQURfUkVQQUlSU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcGFpcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlcGFpcnM6IHJlcGFpcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2FkZWQgPSAoc3RhdGU6IFJlcGFpckxpc3RTdGF0ZSkgPT4gc3RhdGUubG9hZGVkO1xyXG5leHBvcnQgY29uc3QgZ2V0TG9hZGluZyA9IChzdGF0ZTogUmVwYWlyTGlzdFN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nO1xyXG5leHBvcnQgY29uc3QgcmVwYWlycyA9IChzdGF0ZTogUmVwYWlyTGlzdFN0YXRlKSA9PiBzdGF0ZS5yZXBhaXJzOyJdfQ==