"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
var initialState = {
    loaded: false,
    loading: false,
    rooms: []
};
exports.default = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case index_1.RoomActions.LOAD_ROOMS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case index_1.RoomActions.LOAD_ROOMS_SUCCESS: {
            var rooms_1 = action.payload;
            return {
                loaded: true,
                loading: false,
                rooms: rooms_1
            };
        }
        default: {
            return state;
        }
    }
};
exports.getLoaded = function (state) { return state.loaded; };
exports.getLoading = function (state) { return state.loading; };
exports.rooms = function (state) { return state.rooms; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb21zLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwwQ0FBK0M7QUFRL0MsSUFBTSxZQUFZLEdBQWtCO0lBQ2hDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsRUFBRTtDQUNaLENBQUM7QUFFRixrQkFBZSxVQUFDLEtBQW9CLEVBQUUsTUFBYztJQUFwQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUNoQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLG1CQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEtBQUssbUJBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xDLElBQU0sT0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFN0IsTUFBTSxDQUFDO2dCQUNILE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEtBQUssRUFBRSxPQUFLO2FBQ2YsQ0FBQTtRQUNMLENBQUM7UUFDRCxTQUFTLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUM7QUFDbkQsUUFBQSxVQUFVLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUM7QUFDckQsUUFBQSxLQUFLLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xyXG5pbXBvcnQgeyBSb29tQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvb21MaXN0U3RhdGUge1xyXG4gICAgbG9hZGVkOiBib29sZWFuO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIHJvb21zOiBSb29tW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUm9vbUxpc3RTdGF0ZSA9IHtcclxuICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHJvb21zOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFJvb21MaXN0U3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUm9vbUFjdGlvbnMuTE9BRF9ST09NUzoge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUm9vbUFjdGlvbnMuTE9BRF9ST09NU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb21zID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByb29tczogcm9vbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2FkZWQgPSAoc3RhdGU6IFJvb21MaXN0U3RhdGUpID0+IHN0YXRlLmxvYWRlZDtcclxuZXhwb3J0IGNvbnN0IGdldExvYWRpbmcgPSAoc3RhdGU6IFJvb21MaXN0U3RhdGUpID0+IHN0YXRlLmxvYWRpbmc7XHJcbmV4cG9ydCBjb25zdCByb29tcyA9IChzdGF0ZTogUm9vbUxpc3RTdGF0ZSkgPT4gc3RhdGUucm9vbXM7Il19