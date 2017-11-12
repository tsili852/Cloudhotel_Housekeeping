import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Page } from "ui/page";
import { Color } from "color";
import { RouterExtensions } from "nativescript-angular/router";
import * as applicationSettings from "tns-core-modules/application-settings";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { DrawerPage } from "../drawer.page";
import { ConfigurationService } from "../../shared/configuration.service";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { MaintenanceTask, MaintenanceTaskService } from "../../shared/maintenance-task/index";

@Component({
    selector: "settings",
    templateUrl: "pages/settings/settings.html",
    styleUrls: ["pages/settings/settings-common.css", "pages/settings/settings.css"]
})
export class SettingsComponent extends DrawerPage implements OnInit {
    sampleText = "NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no WebViews—resulting in native-like performance and UX.NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by Telerik.\n\n\n NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.";
    content: String = "";
    wrenchIcon = String.fromCharCode(0xf0ad);

    mTasksObs: Observable<any>;
    mTasksList: Array<MaintenanceTask>;

    constructor(
        private routerExtensions: RouterExtensions, 
        private page: Page, 
        private configurationService: ConfigurationService,
        private changeDetectorRef: ChangeDetectorRef,
        private mtaskService: MaintenanceTaskService,
        private fonticon: TNSFontIconService
    ) { 
        super(changeDetectorRef); 

        this.mTasksObs = this.mtaskService.getMaintenanceTasks();
        
        this.mTasksObs.subscribe(tasks => {
            this.mTasksList = tasks;
        })
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
        this.content = this.sampleText;
    }

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
}
}
