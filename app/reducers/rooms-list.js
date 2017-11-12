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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb21zLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwwQ0FBK0M7QUFRL0MsSUFBTSxZQUFZLEdBQWtCO0lBQ2hDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsRUFBRTtDQUNaLENBQUM7QUFFRixrQkFBZSxVQUFDLEtBQW9CLEVBQUUsTUFBYztJQUFwQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUNoQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLG1CQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEtBQUssbUJBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xDLElBQU0sT0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFN0IsTUFBTSxDQUFDO2dCQUNILE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEtBQUssRUFBRSxPQUFLO2FBQ2YsQ0FBQTtRQUNMLENBQUM7UUFDRCxTQUFTLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUM7QUFDbkQsUUFBQSxVQUFVLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUM7QUFDckQsUUFBQSxLQUFLLEdBQUcsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xuaW1wb3J0IHsgUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb21MaXN0U3RhdGUge1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIHJvb21zOiBSb29tW107XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUm9vbUxpc3RTdGF0ZSA9IHtcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHJvb21zOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFJvb21MaXN0U3RhdGUgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSb29tQWN0aW9ucy5MT0FEX1JPT01TOiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJvb21BY3Rpb25zLkxPQURfUk9PTVNfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3Qgcm9vbXMgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcm9vbXM6IHJvb21zXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TG9hZGVkID0gKHN0YXRlOiBSb29tTGlzdFN0YXRlKSA9PiBzdGF0ZS5sb2FkZWQ7XG5leHBvcnQgY29uc3QgZ2V0TG9hZGluZyA9IChzdGF0ZTogUm9vbUxpc3RTdGF0ZSkgPT4gc3RhdGUubG9hZGluZztcbmV4cG9ydCBjb25zdCByb29tcyA9IChzdGF0ZTogUm9vbUxpc3RTdGF0ZSkgPT4gc3RhdGUucm9vbXM7Il19