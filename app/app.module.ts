import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import reducer from "./reducers/index";
import { RoomActions } from "./actions/index";
import { RoomEffects } from "./effects";
import { RoomService } from "./shared/room/room.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    EffectsModule.run(RoomEffects)
  ],
  declarations: [
    AppComponent,
    DrawerComponent,
    ...navigatableComponents
  ],
  providers: [RoomActions, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule {}