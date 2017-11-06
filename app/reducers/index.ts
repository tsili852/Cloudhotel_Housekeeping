import '@ngrx/core/add/operator/select'
import { createSelector } from "reselect";
import { compose } from "@ngrx/core/compose";
import { combineReducers } from "@ngrx/store";

import roomListReducer, * as fromRoomList from './rooms-list';
import repairListReducer, * as fromRepairList from './repairs-list';
import technitianListReducer, * as fromTechnitianList from './technitian-list'

export interface AppState {
    rooms: fromRoomList.RoomListState;
    repairs: fromRepairList.RepairListState;
    technitians: fromTechnitianList.TechnitianListState;
};

export default compose(combineReducers)({
    rooms: roomListReducer,
    repairs: repairListReducer,
    technitians: technitianListReducer
});

export const getRoomsState = (state: AppState) => state.rooms;
export const getRepairsState = (state: AppState) => state.repairs;
export const getTechnitiansState = (state: AppState) => state.technitians;

export const getRepairsLoading = createSelector(getRepairsState, fromRepairList.getLoading);
export const getRepairsLoaded = createSelector(getRepairsState, fromRepairList.getLoaded);
export const getRepairs = createSelector(getRepairsState, fromRepairList.repairs);

export const getRoomsLoading = createSelector(getRoomsState, fromRoomList.getLoading);
export const getRoomsLoaded = createSelector(getRoomsState, fromRoomList.getLoaded);
export const getRooms = createSelector(getRoomsState, fromRoomList.rooms);

export const getTechnitiansLoading = createSelector(getTechnitiansState, fromTechnitianList.getLoading);
export const getTechnitiansLoaded = createSelector(getTechnitiansState, fromTechnitianList.getLoaded);
export const getTechnitians = createSelector(getTechnitiansState, fromTechnitianList.technitians);