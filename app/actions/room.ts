import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { Room } from "../shared/room/room";

@Injectable()
export class RoomActions {
    static LOAD_ROOMS = '[Room] Load Rooms';
    loadRooms(skip, take, daysBefore): Action {
        return {
            type: RoomActions.LOAD_ROOMS,
            payload: {skip, take, daysBefore}
        };
    }

    static LOAD_ROOMS_SUCCESS = '[Room] Load Romms Success';
    loadRoomsSuccess(rooms): Action {
        return {
            type: RoomActions.LOAD_ROOMS_SUCCESS,
            payload: rooms
        }
    }
}