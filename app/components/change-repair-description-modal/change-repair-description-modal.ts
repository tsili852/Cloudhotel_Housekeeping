import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Observable } from 'rxjs/Observable';
import { AppState } from "../../reducers/index";
import { Store } from "@ngrx/store";

import { TechnitianActions } from "../../actions";
import { ChangeRepairModal } from '../../shared/change-repair-modal/change-repair-modal';
import { Technitian } from "../../shared/technitian/technitian";
import * as fromRoot from "../../reducers/index"
import { Http, Headers } from "@angular/http";
import { Config } from "../../shared/config";

@Component({
    selector: "add-repair-modal",
    templateUrl: "components/add-repair-modal/add-repair-modal.html"
})
export class ChangeRepairDescriptionModalComponent implements OnInit {
    modal: ChangeRepairModal;
    roomNumber: number;
    repairId: number;

    constructor(private params: ModalDialogParams,
        private page: Page,
        private http: Http,
        private store: Store<AppState>,
        private technitianActions: TechnitianActions) {

        this.modal = new ChangeRepairModal();
        this.modal.description = "";
        this.roomNumber = params.context.roomNumber;
        this.repairId = params.context.repairId;

        this.page.on("unloaded", () => {
            this.params.closeCallback();
        });
    }

    ngOnInit() {

    }

    onSaveChanges() {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body = JSON.stringify({
            hotelsn: Config.hotelSN,
            repairid: this.repairId,
            maintenanceid: null,
            description: this.modal.description,
            technicianid: null,
            starttime: null,
            endtime: null
        });

        this.http.post(Config.apiUrl + 'Repair',
            body,
            { headers: headers })
            .subscribe(response => {
                if (response.status == 200) {
                    this.params.closeCallback({status: response.status});
                }         
            });
    }

    onCancel() {
        this.params.closeCallback();
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}