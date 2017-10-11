import { Component, OnInit, NgZone, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Technitian } from "../../shared/technitian/technitian";
import { TechnitianListService } from '../../shared/technitian/technitian-list.service';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";

@Component({
    selector: "maids",
    templateUrl: "pages/technitians/technitians.html",
    styleUrls: ["pages/technitians/technitians-common.css", "pages/technitians/technitians.css"],
    providers: [TechnitianListService]
})
export class TechnitiansComponent extends DrawerPage implements OnInit {
    technitiansList: Array<Technitian> = [];
    technitian = "";

    constructor(private routerExtensions: RouterExtensions, 
        private page: Page, 
        private technitianListService: TechnitianListService, 
        private changeDetectorRef: ChangeDetectorRef) {
            super(changeDetectorRef);
        }

    ngOnInit() {
        this.page.actionBarHidden = false;
        this.technitiansList = this.technitianListService.load();
    }
}