import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { TextField } from "ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";
import { ConfigurationService } from "../../shared/configuration.service";

@Component({
    selector: "preconfigure",
    templateUrl: "pages/preconfigure/preconfigure.html",
    styleUrls: ["pages/preconfigure/preconfigure-common.css", "pages/preconfigure/preconfigure.css"]
})
export class PreconfigureComponent implements OnInit {

    @ViewChild("hotelsn") hotelsnTF: ElementRef;

    constructor(
        private routerExtensions: RouterExtensions,
        private configurationService: ConfigurationService,
        private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = false;
    }

    onSubmit() {
        let hotelsnTextField = <TextField>this.hotelsnTF.nativeElement;
        let hotelsn = hotelsnTextField.text;

        this.configurationService.setHotelSN(hotelsn);

        this.routerExtensions.navigate(["/main"], { clearHistory: true });
    }
}