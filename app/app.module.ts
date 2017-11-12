import { NgModule, LOCALE_ID } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { DropDownModule } from "nativescript-drop-down/angular";
import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MomentModule } from "angular2-moment";
import { NgArrayPipesModule } from "angular-pipes";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import reducer from "./reducers/index";
import { RoomActions, RepairActions, TechnitianActions } from "./actions/index";
import { RoomEffects, RepairEffects, TechnitianEffects } from "./effects";
import { RoomService } from "./shared/room/room.service";
import { RoomRepairsService } from "./shared/repair/room-repairs.service";
import { TechnitianListService } from "./shared/technitian/technitian-list.service";
import { AddRepairModalComponent } from "./components/add-repair-modal/add-repair-modal";
import { ConfigurationService } from "./shared/configuration.service";
import { ChangeRepairDescriptionModalComponent } from "./components/change-repair-description-modal/change-repair-description-modal";
import { MaintenanceTaskService } from "./shared/maintenance-task/maintenance-task.service";

export const EFFECTS = [
  EffectsModule.run(RoomEffects),
  EffectsModule.run(RepairEffects),
  EffectsModule.run(TechnitianEffects)
];

@NgModule({
  entryComponents: [AddRepairModalComponent, ChangeRepairDescriptionModalComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    DropDownModule,
    MomentModule,
    NgArrayPipesModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    EFFECTS
  ],
  declarations: [
    AppComponent,
    DrawerComponent,
    AddRepairModalComponent,
    ChangeRepairDescriptionModalComponent,
    ...navigatableComponents
  ],
  providers: [TechnitianActions, 
    TechnitianListService, 
    RoomActions, 
    RoomService, 
    RepairActions, 
    RoomRepairsService, 
    MaintenanceTaskService,
    ConfigurationService,
    {provide: LOCALE_ID, useValue:"el-GR"}],
  bootstrap: [AppComponent]
})
export class AppModule {}