import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Room } from "../../shared/room/room";
import { RoomService } from '../../shared/room/room.service';
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
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
import * as fromRoot from "../../reducers/index"

@Component({
    selector: "tech-rooms",
    templateUrl: "pages/tech-rooms/tech-rooms.html",
    styleUrls: ["pages/tech-rooms/tech-rooms-common.css", "pages/tech-rooms/tech-rooms.css"],
    providers: [TechnitianListService]
})
export class TechRoomsComponent extends DrawerPage implements OnInit {
    rooms: Observable<any>;
    isLoading: Observable<boolean>;
    skipRooms: number = 0;
    takeRooms: number = 20;
    selectedNavButton = 1;
    daysBefore = 0;
    
    selected: number;
    roomsList: Array<Room> = [];
    rooom = "";
    technitian: Technitian;
    isClean: boolean = false;

    constructor(private routerExtensions: RouterExtensions,
        private page: Page,
        private roomService: RoomService,
        private technitianListService: TechnitianListService,
        private zone: NgZone,
        private store: Store<AppState>,
        private roomActions: RoomActions,
        private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        
        this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));

        this.rooms = store.select(fromRoot.getRooms);
        this.isLoading = store.select(fromRoot.getRoomsLoading);
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
        // this.rooms = this.roomService.getAllRooms();

        // let techId = applicationSettings.getString("activeTechnitianId");
        // if (techId) {
        //     this.technitian = this.technitianListService.getFromId(techId);
        // } else {
        //     this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
        // }
    }

    changeTechnitian() {
        applicationSettings.setString("activeTechnitian", "");
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    }

    onRepairsSelected() {
        this.selectedNavButton = 1;
        this.daysBefore = 0;
        this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    }

    onAllSelected() {
        this.selectedNavButton = 2;
        this.daysBefore = 30;
        this.store.dispatch(this.roomActions.loadRooms(this.skipRooms, this.takeRooms, this.daysBefore));
    }

    onItemSelected(args) {
        this.routerExtensions.navigate(["/room-repairs"]);
    }

    // public onSwipeCellStarted(args: ListViewEventData) {
    //     var swipeLimits = args.data.swipeLimits;
    //     swipeLimits.threshold = 60 * layout.getDisplayDensity();
    //     swipeLimits.left = 90 * layout.getDisplayDensity();
    //     swipeLimits.right = 80 * layout.getDisplayDensity();
    //     this.selected = args.index;
    // }

    // public onLeave() {
    //     let radListView = <RadListView>frameModule.topmost().currentPage.getViewById("radlistview");
    //     this.zone.run(() => {
    //         this.roomsList[this.selected].status = 0;
    //     });

    //     radListView.notifySwipeToExecuteFinished();
    // }

    // public onEnter() {
    //     let radListView = <RadListView>frameModule.topmost().currentPage.getViewById("radlistview");
    //     this.zone.run(() => {
    //         this.roomsList[this.selected].status = 1;
    //     });
    //     radListView.notifySwipeToExecuteFinished();
    // }
}