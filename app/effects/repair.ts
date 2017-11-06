import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import { AppState } from "../reducers/index";
import { RepairActions } from "../actions/index";
import { RoomRepairsService } from "../shared/repair/room-repairs.service";

@Injectable()
export class RepairEffects {
    constructor(
        private update$: Actions,
        private repairActions: RepairActions,
        private svc: RoomRepairsService
    ) {}

    @Effect() loadRepairs$ = this.update$
        .ofType(RepairActions.LOAD_REPAIRS)
        .map(options => options.payload)
        .switchMap(options => {
            return this.svc.getRepairsByRoom(options.roomId, options.daysBefore);
        })
        .map(repairs => this.repairActions.loadRepairsSuccess(repairs));
}