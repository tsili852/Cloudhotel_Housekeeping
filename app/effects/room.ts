import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import { AppState } from "../reducers/index";
import { RoomActions } from "../actions/index";
import { RoomService } from "../shared/room/room.service";

@Injectable()
export class RoomEffects {
    constructor(
        private update$: Actions,
        private roomActions: RoomActions,
        private svc: RoomService,
        private roomService: RoomService
    ) {}

    @Effect() loadRooms$ = this.update$
        .ofType(RoomActions.LOAD_ROOMS)
        .map(options => options.payload)
        .switchMap(options => {
            return this.svc.getAllRooms();
        })
        .map(rooms => this.roomActions.loadRoomsSuccess(rooms));
}