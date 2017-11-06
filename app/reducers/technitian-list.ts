import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Technitian } from "../shared/technitian/technitian";
import { TechnitianActions } from "../actions/technitian";

export interface TechnitianListState {
    loaded: boolean;
    loading: boolean;
    technitians: Technitian[];
}

const initialState: TechnitianListState = {
    loaded: false,
    loading: false,
    technitians: []
};

export default (state = initialState, action: Action): TechnitianListState => {
    switch (action.type) {
        case TechnitianActions.LOAD_TECHNITIANS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case TechnitianActions.LOAD_TECHNITIANS_SUCCESS: {
            const technitians = action.payload;

            return {
                loaded: true,
                loading: false,
                technitians: technitians
            }
        }
        default: {
            return state;
        }            
    }
}

export const getLoaded = (state: TechnitianListState) => state.loaded;
export const getLoading = (state: TechnitianListState) => state.loading;
export const technitians = (state: TechnitianListState) => state.technitians;