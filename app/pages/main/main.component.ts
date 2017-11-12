import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import * as applicationSettings from "tns-core-modules/application-settings";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";
import { ConfigurationService } from "../../shared/configuration.service";

@Component({
    selector: "main",
    templateUrl: "pages/main/main.html",
    styleUrls: ["pages/main/main-common.css", "pages/main/main.css"]
})
export class MainComponent extends DrawerPage implements OnInit {
    constructor(private routerExtensions: RouterExtensions, 
        private page: Page, 
        private configurationService: ConfigurationService,
        private changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
        if (!this.configurationService.getHotelSN()) {
            this.routerExtensions.navigate(["/preconfigure"], { clearHistory: true });
        }
    }

    maidSelected() {
        // alert("maids");
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    }

    technitiansSelected() {
        this.routerExtensions.navigate(["/tech-rooms"], { clearHistory: true });
    }

    settingsSelected() {
        this.routerExtensions.navigate(["settings", { clearHistory: true }]);
    }

}