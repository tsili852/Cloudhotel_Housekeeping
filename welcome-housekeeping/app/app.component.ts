import { Component } from "@angular/core";
import { TnsSideDrawer } from "nativescript-sidedrawer";
import { Color } from "color";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {
    TnsSideDrawer.build({
      templates: [{
          title: 'Wifi Configuration',
          androidIcon: 'ic_wifi_white_24dp',
          iosIcon: 'ic_wifi_white'
      },{
          title: 'Send to module',
          androidIcon: 'ic_send_white_24dp',
          iosIcon: 'ic_send_white'
      }],
      title: 'Calling System',
      backgroundColor: new Color("#4E2C52"),
      headerBackgroundColor: new Color("#7c607f"),
      context: this,
      listener: (index) => {
          switch(index) {
              case 0:
                  this.routerExtensions.navigate(["/configuration"], { clearHistory: true });
                  break;
              case 1:
                  this.routerExtensions.navigate(["/"], { clearHistory: true });
                  break;
          }
      }
    })
  }
}