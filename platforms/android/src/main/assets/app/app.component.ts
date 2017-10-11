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
    // TnsSideDrawer.build({
    //   templates: [{
    //       title: 'Maids',
    //       androidIcon: 'maid',
    //       iosIcon: 'maid'
    //   },{
    //       title: 'Technitians',
    //       androidIcon: 'contractor',
    //       iosIcon: 'contractor'
    //   }],
    //   title: 'Welcome Housekeeping',
    //   textColor: new Color("#000000"),
    //   backgroundColor: new Color("#ffffff"),
    //   headerBackgroundColor: new Color("#006db3"),
    //   context: this,
    //   listener: (index) => {
    //       switch(index) {
    //           case 0:
    //               this.routerExtensions.navigate(["/maids"], { clearHistory: true });
    //               break;
    //           case 1:
    //               this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
    //               break;
    //       }
    //   }
    // })
  }
}