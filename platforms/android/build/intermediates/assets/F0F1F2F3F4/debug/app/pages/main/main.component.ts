import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";

@Component({
    selector: "main",
    templateUrl: "pages/main/main.html",
    styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
})
export class MainComponent extends DrawerPage implements OnInit {
    constructor(private routerExtensions: RouterExtensions, private page: Page, private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
    }

    maidSelected() {
        // alert("maids");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    }

    technitiansSelected() {
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    }
}