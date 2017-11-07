import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Observable } from 'rxjs/Observable';
import { AppState } from "../../reducers/index";
import { Store } from "@ngrx/store";

import { TechnitianActions } from "../../actions";
import { AddRepairModal } from '../../shared/add-repair-modal/add-repair-modal';
import { Technitian } from "../../shared/technitian/technitian";
import { MaintenanceTask, MaintenanceTaskService } from "../../shared/maintenance-task/index";
import * as fromRoot from "../../reducers/index"
import { Http, Headers } from "@angular/http";
import { Config } from "../../shared/config";

@Component({
    selector: "add-repair-modal",
    templateUrl: "components/add-repair-modal/add-repair-modal.html"
})
export class AddRepairModalComponent implements OnInit {
    modal: AddRepairModal;
    roomNumber: number;
    technitiansObs: Observable<any>;
    mTasksObs: Observable<any>;
    technitiansList: Array<Technitian>;
    mTasksList: Array<MaintenanceTask>;
    selectedTechnitianIndex: number = 0;
    technitiansNames: Array<string>;
    selectedMTaskIndex: number = 0;
    mTasksNames: Array<string>;

    constructor(private params: ModalDialogParams,
        private page: Page,
        private http: Http,
        private store: Store<AppState>,
        private mtaskService: MaintenanceTaskService,
        private technitianActions: TechnitianActions) {

        this.modal = new AddRepairModal();
        this.modal.description = "";
        this.roomNumber = params.context.roomNumber;

        this.store.dispatch(this.technitianActions.loadTechnitians());

        this.technitiansObs = store.select(fromRoot.getTechnitians);
        this.technitiansObs
            .subscribe(techs => {
                this.technitiansList = techs;
                this.technitiansNames = new Array<string>();
                techs.forEach(tech => {
                    this.technitiansNames.push(tech.Name);
                });
            })

        this.mTasksObs = this.mtaskService.getMaintenanceTasks();

        this.mTasksObs.subscribe(tasks => {
                this.mTasksList = tasks;
                this.mTasksNames = new Array<string>();
                tasks.forEach(t => {
                    this.mTasksNames.push(t.Name);
                })
            })

        this.page.on("unloaded", () => {
            this.params.closeCallback();
        });
    }

    ngOnInit() {

    }

    onSaveAnnouncement() {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body = JSON.stringify({
            hotelsn: Config.hotelSN,
            roomid: this.roomNumber,
            maintenanceid: this.mTasksList[this.selectedMTaskIndex].MaintenanceTaskID,
            description: this.modal.description,
            whoreported: 16,
            technicianid: this.technitiansList[this.selectedTechnitianIndex].TechnitianID
        });

        this.http.post(Config.apiUrl + 'Announcement',
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