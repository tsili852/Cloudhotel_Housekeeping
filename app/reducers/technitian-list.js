"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var technitian_1 = require("../actions/technitian");
var initialState = {
    loaded: false,
    loading: false,
    technitians: []
};
exports.default = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case technitian_1.TechnitianActions.LOAD_TECHNITIANS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case technitian_1.TechnitianActions.LOAD_TECHNITIANS_SUCCESS: {
            var technitians_1 = action.payload;
            return {
                loaded: true,
                loading: false,
                technitians: technitians_1
            };
        }
        default: {
            return state;
        }
    }
};
exports.getLoaded = function (state) { return state.loaded; };
exports.getLoading = function (state) { return state.loading; };
exports.technitians = function (state) { return state.technitians; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVjaG5pdGlhbi1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsb0RBQTBEO0FBUTFELElBQU0sWUFBWSxHQUF3QjtJQUN0QyxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsV0FBVyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQztBQUVGLGtCQUFlLFVBQUMsS0FBb0IsRUFBRSxNQUFjO0lBQXBDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQ2hDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssOEJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsS0FBSyw4QkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzlDLElBQU0sYUFBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFbkMsTUFBTSxDQUFDO2dCQUNILE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFdBQVcsRUFBRSxhQUFXO2FBQzNCLENBQUE7UUFDTCxDQUFDO1FBQ0QsU0FBUyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHLFVBQUMsS0FBMEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxDQUFDO0FBQ3pELFFBQUEsVUFBVSxHQUFHLFVBQUMsS0FBMEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDO0FBQzNELFFBQUEsV0FBVyxHQUFHLFVBQUMsS0FBMEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tIFwiLi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhblwiO1xuaW1wb3J0IHsgVGVjaG5pdGlhbkFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy90ZWNobml0aWFuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVjaG5pdGlhbkxpc3RTdGF0ZSB7XG4gICAgbG9hZGVkOiBib29sZWFuO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgdGVjaG5pdGlhbnM6IFRlY2huaXRpYW5bXTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUZWNobml0aWFuTGlzdFN0YXRlID0ge1xuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdGVjaG5pdGlhbnM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogVGVjaG5pdGlhbkxpc3RTdGF0ZSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRlY2huaXRpYW5BY3Rpb25zLkxPQURfVEVDSE5JVElBTlM6IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgVGVjaG5pdGlhbkFjdGlvbnMuTE9BRF9URUNITklUSUFOU19TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zdCB0ZWNobml0aWFucyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZWNobml0aWFuczogdGVjaG5pdGlhbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRMb2FkZWQgPSAoc3RhdGU6IFRlY2huaXRpYW5MaXN0U3RhdGUpID0+IHN0YXRlLmxvYWRlZDtcbmV4cG9ydCBjb25zdCBnZXRMb2FkaW5nID0gKHN0YXRlOiBUZWNobml0aWFuTGlzdFN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nO1xuZXhwb3J0IGNvbnN0IHRlY2huaXRpYW5zID0gKHN0YXRlOiBUZWNobml0aWFuTGlzdFN0YXRlKSA9PiBzdGF0ZS50ZWNobml0aWFuczsiXX0=