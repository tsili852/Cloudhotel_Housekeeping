import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
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
import { RoomActions } from "../../actions/index";
// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
import * as fromRoot from "../../reducers/index"

@Component({
    selector: "room-repairs",
    templateUrl: "pages/room-repairs/room-repairs.html",
    styleUrls: ["pages/room-repairs/room-repairs-common.css", "pages/room-repairs/room-repairs.css"],
    providers: [TechnitianListService]
})

export class RoomRepairsComponent extends DrawerPage implements OnInit {
    selectedNavButton: number;
    roomNumber: number = 12;
    repairs: Array<Repair> = [];

    constructor(private routerExtensions: RouterExtensions,
        private page: Page,
        private roomService: RoomService,
        private technitianListService: TechnitianListService,
        private zone: NgZone,
        private store: Store<AppState>,
        private roomActions: RoomActions,
        private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        
        this.repairs = new Array<Repair>();
        this.repairs.push({RepairID: 0, Description: "Λάμπα καμένη", TaskName: "", StartAt: null, EndAt: null});
        this.repairs.push({RepairID: 1, Description: "Καλοριφέρ", TaskName: "", StartAt: new Date(), EndAt: null});
        this.repairs.push({RepairID: 1, Description: "Πέφτει συνεχώς το ρεύμα", TaskName: "", StartAt: new Date(), EndAt: new Date()});

        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));

        // this.rooms = store.select(fromRoot.getRooms);
        // this.isLoading = store.select(fromRoot.getRoomsLoading);
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
    }

    onPendingSelected() {
        this.selectedNavButton = 1;
        // this.daysBefore = 0;
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    }

    onAllSelected() {
        this.selectedNavButton = 2;
        // this.daysBefore = 30;
        // this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    }
}