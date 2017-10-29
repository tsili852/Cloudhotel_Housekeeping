import { Component } from "@angular/core";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import { Color } from "color";
import { RouterExtensions } from 'nativescript-angular/router';
import * as imageSource from 'image-source';

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {
  }
}