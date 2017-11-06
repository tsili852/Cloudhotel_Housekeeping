import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Repair } from "../shared/repair/repair";
import { RepairActions } from "../actions/index";

export interface RepairListState {
    loaded: boolean;
    loading: boolean;
    repairs: Repair[];
}

const initialState: RepairListState = {
    loaded: false,
    loading: false,
    repairs: []
};

export default (state = initialState, action: Action): RepairListState => {
    switch (action.type) {
        case RepairActions.LOAD_REPAIRS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case RepairActions.LOAD_REPAIRS_SUCCESS: {
            const repairs = action.payload;

            return {
                loaded: true,
                loading: false,
                repairs: repairs
            }
        }
        default: {
            return state;
        }            
    }
}

export const getLoaded = (state: RepairListState) => state.loaded;
export const getLoading = (state: RepairListState) => state.loading;
export const repairs = (state: RepairListState) => state.repairs;