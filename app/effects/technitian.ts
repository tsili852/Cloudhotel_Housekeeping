import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import { AppState } from "../reducers/index";
import { TechnitianActions } from "../actions/technitian";
import { TechnitianListService } from "../shared/technitian/technitian-list.service";

@Injectable()
export class TechnitianEffects {
    constructor(
        private update$: Actions,
        private technitianActions: TechnitianActions,
        private svc: TechnitianListService
    ) {}

    @Effect() loadTechnitians$ = this.update$
        .ofType(TechnitianActions.LOAD_TECHNITIANS)
        .map(options => options.payload)
        .switchMap(options => {
            return this.svc.getTechnitians();
        })
        .map(technitians => this.technitianActions.loadTechnitiansSuccess(technitians));
}