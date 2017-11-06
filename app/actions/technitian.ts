import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { Technitian } from "../shared/technitian/technitian";

@Injectable()
export class TechnitianActions {
    static LOAD_TECHNITIANS = '[Technitian] Load Technitians';
    loadTechnitians(): Action {
        return {
            type: TechnitianActions.LOAD_TECHNITIANS
        }
    }

    static LOAD_TECHNITIANS_SUCCESS = '[Technitian] Load Technitians Success';
    loadTechnitiansSuccess(technitians): Action {
        return {
            type: TechnitianActions.LOAD_TECHNITIANS_SUCCESS,
            payload: technitians
        }
    }
}