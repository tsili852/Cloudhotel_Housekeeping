import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import {ActivatedRoute} from "@angular/router";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Room } from "../../shared/room/room";
import { RoomService } from '../../shared/room/room.service';
import { Repair } from "../../shared/repair/repair";
import { Technitian } from "../../shared/technitian/technitian";
import { TechnitianListService } from "../../shared/technitian/technitian-list.service";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";
import { ListViewEventData, RadListView } from 'nativescript-pro-ui/listview';
import { layout } from "tns-core-modules/utils/utils";
import * as frameModule from "tns-core-modules/ui/frame";
import { Observable } from 'rxjs/Observable';
import { AppState } from "../../reducers/index";
import { Store } from "@ngrx/store";
import { RepairActions } from "../../actions/index";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { AddRepairModalComponent } from "../../components/add-repair-modal/add-repair-modal";
import { ChangeRepairDescriptionModalComponent } from "../../components/change-repair-description-modal/change-repair-description-modal";
import { Http, Headers } from "@angular/http";
import { Config } from "../../shared/config";
// import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
import * as fromRoot from "../../reducers/index"

@Component({
    selector: "room-repairs",
    templateUrl: "pages/room-repairs/room-repairs.html",
    entryComponents: [AddRepairModalComponent, ChangeRepairDescriptionModalComponent],
    styleUrls: ["pages/room-repairs/room-repairs-common.css", "pages/room-repairs/room-repairs.css"],
    providers: [TechnitianListService]
})

export class RoomRepairsComponent extends DrawerPage implements OnInit {
    selectedNavButton: number = 2;
    room: Room;
    repairs: Observable<any>;
    isLoading: Observable<boolean>;
    daysBefore = 30;

    constructor(private routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private page: Page,
        private roomService: RoomService,
        private technitianListService: TechnitianListService,
        private zone: NgZone,
        private store: Store<AppState>,
        private repairActions: RepairActions,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private http: Http,
        private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);

        this.route.queryParams.subscribe(params => {
            let JsonRoom = params['room'];
            this.room = <Room>JSON.parse(JsonRoom);
        });
        
        store.dispatch(repairActions.loadRepairs(this.room.RoomID, this.daysBefore));

        this.repairs = store.select(fromRoot.getRepairs);
        this.isLoading = store.select(fromRoot.getRepairsLoading);
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
        // this.repairs.subscribe(repairs => {
        //     if (repairs.length == 0) {
        //         this.onAddAnnouncement();
        //     }
        // });
    }

    goBack() {
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    }

    onPendingSelected() {
        this.selectedNavButton = 1;
        this.daysBefore = 0;
        this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
    }

    onAllSelected() {
        this.selectedNavButton = 2;
        this.daysBefore = 30;
        this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
    }

    onAddAnnouncement() {
        this.createModalView(this.room.RoomID)
        .then(() => {
            this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
        })
        .catch((err) => {
            this.handleError(err);
        });
    }

    onChange(repairID: number, description: string) {
        this.createChangeModalView(this.room.RoomID, repairID, description)
        .then(() => {
            this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
        })
        .catch((err) => {
            this.handleError(err);
        });
        // TNSFancyAlert.showInfo("Change the description", "Just type anythinng and hit save", "Save");                
    }

    onStart(repairID: number) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body = JSON.stringify({
            hotelsn: Config.hotelSN,
            repairid: repairID,
            maintenanceid: null,
            description: null,
            technicianid: null,
            starttime: new Date(),
            endtime: null
        });

        this.http.post(Config.apiUrl + 'Repair',
            body,
            { headers: headers })
            .subscribe(response => {
                if (response.status == 200) {
                    this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
                }            
            });
    }

    onFixed(repairID: number) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body = JSON.stringify({
            hotelsn: Config.hotelSN,
            repairid: repairID,
            maintenanceid: null,
            description: null,
            technicianid: null,
            starttime: null,
            endtime: new Date()
        });

        this.http.post(Config.apiUrl + 'Repair',
            body,
            { headers: headers })
            .subscribe(response => {
                if (response.status == 200) {
                    this.store.dispatch(this.repairActions.loadRepairs(this.room.RoomID, this.daysBefore));
                }            
            });
    }

    private createModalView(roomNumber: number): Promise<any> {
        const options: ModalDialogOptions = {
          viewContainerRef: this.vcRef,
          context: {roomNumber: roomNumber},
          fullscreen: false,      
        };
    
        return this.modalService.showModal(AddRepairModalComponent, options);
    }

    private createChangeModalView(roomNumber: number, repairId: number, description: string): Promise<any> {
        const options: ModalDialogOptions = {
          viewContainerRef: this.vcRef,
          context: {
              roomNumber: roomNumber,
              repairId: repairId,
              description: description
            },
          fullscreen: false,      
        };
    
        return this.modalService.showModal(ChangeRepairDescriptionModalComponent, options);
    }

    private handleError(error: any) {
        alert("[Room Repairs] Error: " + error);
        console.dir(error);
    }
}