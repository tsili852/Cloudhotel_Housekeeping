import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Room } from "../shared/room/room";
import { RoomActions } from "../actions/index";

export interface RoomListState {
    loaded: boolean;
    loading: boolean;
    rooms: Room[];
}

const initialState: RoomListState = {
    loaded: false,
    loading: false,
    rooms: []
};

export default (state = initialState, action: Action): RoomListState => {
    switch (action.type) {
        case RoomActions.LOAD_ROOMS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case RoomActions.LOAD_ROOMS_SUCCESS: {
            const rooms = action.payload;

            return {
                loaded: true,
                loading: false,
                rooms: rooms
            }
        }
        default: {
            return state;
        }            
    }
}

export const getLoaded = (state: RoomListState) => state.loaded;
export const getLoading = (state: RoomListState) => state.loading;
export const rooms = (state: RoomListState) => state.rooms;