import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { Repair } from "../shared/repair/repair";

@Injectable()
export class RepairActions {
    static LOAD_REPAIRS = '[Repair] Load Repairs';
    loadRepairs(roomId, daysBefore): Action {
        return {
            type: RepairActions.LOAD_REPAIRS,
            payload: {roomId, daysBefore}
        }
    }

    static LOAD_REPAIRS_SUCCESS = '[Repair] Load Repairs Success';
    loadRepairsSuccess(repairs): Action {
        return {
            type: RepairActions.LOAD_REPAIRS_SUCCESS,
            payload: repairs
        }
    }
}