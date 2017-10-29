import '@ngrx/core/add/operator/select'
import { createSelector } from "reselect";
import { compose } from "@ngrx/core/compose";
import { combineReducers } from "@ngrx/store";

import roomListReducer, * as fromRoomList from './rooms-list';

export interface AppState {
    rooms: fromRoomList.RoomListState;
};

export default compose(combineReducers)({
    rooms: roomListReducer
});

export const getRoomsState = (state: AppState) => state.rooms;

export const getRoomsLoading = createSelector(getRoomsState, fromRoomList.getLoading);
export const getRoomsLoaded = createSelector(getRoomsState, fromRoomList.getLoaded);
export const getRooms = createSelector(getRoomsState, fromRoomList.rooms);