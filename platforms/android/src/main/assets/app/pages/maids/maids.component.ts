import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Maid } from "../../shared/maid/maid";
import { MaidListService } from '../../shared/maid/maid-list.service';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";

@Component({
    selector: "maids",
    templateUrl: "pages/maids/maids.html",
    styleUrls: ["pages/maids/maids-common.css", "pages/maids/maids.css"],
    providers: [MaidListService]
})
export class MaidsComponent extends DrawerPage implements OnInit {
    maidsList: Array<Maid> = [];
    maid = "";

    constructor(private routerExtensions: RouterExtensions, 
        private page: Page, 
        private maidListService: MaidListService, 
        private changeDetectorRef: ChangeDetectorRef) {
            super(changeDetectorRef);
        }

    ngOnInit() {
        this.page.actionBarHidden = false;
        this.maidsList = this.maidListService.load();
    }

    activeMaid(id: string) {
        applicationSettings.setString("activeMaidId", id);
        this.routerExtensions.navigate(["/rooms"], { clearHistory: true });
    }
}