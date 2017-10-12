import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Room } from "../../shared/room/room";
import { RoomService } from '../../shared/room/room.service';
import { Maid } from "../../shared/maid/maid";
import { MaidListService } from '../../shared/maid/maid-list.service';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";
import { ListViewEventData, RadListView } from 'nativescript-pro-ui/listview';
import { layout } from "tns-core-modules/utils/utils";
import * as frameModule from "tns-core-modules/ui/frame";

@Component({
    selector: "rooms",
    templateUrl: "pages/rooms/rooms.html",
    styleUrls: ["pages/rooms/rooms-common.css", "pages/rooms/rooms.css"],
    providers: [RoomService, MaidListService]
})
export class RoomsComponent extends DrawerPage implements OnInit {
    selected: number;
    roomsList: Array<Room> = [];
    rooom = "";
    maid: Maid;
    isClean: boolean = false;

    constructor(private routerExtensions: RouterExtensions, 
        private page: Page, 
        private roomService: RoomService, 
        private maidListService: MaidListService,
        private zone: NgZone,
        private changeDetectorRef: ChangeDetectorRef) {
            super(changeDetectorRef);
        }

    ngOnInit() {
        this.page.actionBarHidden = false;
        this.roomsList = this.roomService.getAllRooms();

        this.roomsList[2].status = 1;

        let maidId = applicationSettings.getString("activeMaidId");
        if (maidId) {
            this.maid = this.maidListService.getFromId(maidId);
        } else {
            this.routerExtensions.navigate(["/maids"], { clearHistory: true });
        }
    }

    changeMaid() {
        applicationSettings.setString("activeMaidId", "");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = 60 * layout.getDisplayDensity();
        swipeLimits.left = 90 * layout.getDisplayDensity();
        swipeLimits.right = 80 * layout.getDisplayDensity();
        this.selected = args.index;
    }

    public onLeave() {
        let radListView = <RadListView> frameModule.topmost().currentPage.getViewById("radlistview");
        this.zone.run(() => {
            this.roomsList[this.selected].status = 0;
        });
        
        radListView.notifySwipeToExecuteFinished();
    }

    public onEnter() {
        let radListView = <RadListView> frameModule.topmost().currentPage.getViewById("radlistview");
        this.zone.run(() => {
            this.roomsList[this.selected].status = 1;
        });
        radListView.notifySwipeToExecuteFinished();
    }
}