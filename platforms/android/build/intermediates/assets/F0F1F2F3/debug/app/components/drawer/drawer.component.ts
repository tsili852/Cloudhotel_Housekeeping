import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'drawer-content',
    templateUrl: 'components/drawer/drawer.component.html',
})
export class DrawerComponent {

    constructor(private routerExtensions: RouterExtensions) {
    }

    goHome() {
        this.routerExtensions.navigate(["/"], { clearHistory: true });
        // alert("Home");
    }

    goToMaids() {
        this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    }

    goToTechnitians() {
        this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    }
}