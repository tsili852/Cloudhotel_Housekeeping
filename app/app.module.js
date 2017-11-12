"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var drawer_component_1 = require("./components/drawer/drawer.component");
var angular_2 = require("nativescript-pro-ui/sidedrawer/angular");
var angular_3 = require("nativescript-drop-down/angular");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var angular2_moment_1 = require("angular2-moment");
var angular_pipes_1 = require("angular-pipes");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./reducers/index");
var index_2 = require("./actions/index");
var effects_2 = require("./effects");
var room_service_1 = require("./shared/room/room.service");
var room_repairs_service_1 = require("./shared/repair/room-repairs.service");
var technitian_list_service_1 = require("./shared/technitian/technitian-list.service");
var add_repair_modal_1 = require("./components/add-repair-modal/add-repair-modal");
var configuration_service_1 = require("./shared/configuration.service");
var change_repair_description_modal_1 = require("./components/change-repair-description-modal/change-repair-description-modal");
var maintenance_task_service_1 = require("./shared/maintenance-task/maintenance-task.service");
exports.EFFECTS = [
    effects_1.EffectsModule.run(effects_2.RoomEffects),
    effects_1.EffectsModule.run(effects_2.RepairEffects),
    effects_1.EffectsModule.run(effects_2.TechnitianEffects)
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            entryComponents: [add_repair_modal_1.AddRepairModalComponent, change_repair_description_modal_1.ChangeRepairDescriptionModalComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_3.DropDownModule,
                angular2_moment_1.MomentModule,
                angular_pipes_1.NgArrayPipesModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                store_1.StoreModule.provideStore(index_1.default),
                exports.EFFECTS
            ],
            declarations: [
                app_component_1.AppComponent,
                drawer_component_1.DrawerComponent,
                add_repair_modal_1.AddRepairModalComponent,
                change_repair_description_modal_1.ChangeRepairDescriptionModalComponent
            ].concat(app_routing_1.navigatableComponents),
            providers: [index_2.TechnitianActions,
                technitian_list_service_1.TechnitianListService,
                index_2.RoomActions,
                room_service_1.RoomService,
                index_2.RepairActions,
                room_repairs_service_1.RoomRepairsService,
                maintenance_task_service_1.MaintenanceTaskService,
                configuration_service_1.ConfigurationService,
                { provide: core_1.LOCALE_ID, useValue: "el-GR" }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRix5RUFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLDBEQUFnRTtBQUNoRSxxQ0FBaUQ7QUFDakQseUNBQThDO0FBQzlDLG1EQUErQztBQUMvQywrQ0FBbUQ7QUFFbkQsaURBQStDO0FBQy9DLDZDQUE4RDtBQUM5RCwwQ0FBdUM7QUFDdkMseUNBQWdGO0FBQ2hGLHFDQUEwRTtBQUMxRSwyREFBeUQ7QUFDekQsNkVBQTBFO0FBQzFFLHVGQUFvRjtBQUNwRixtRkFBeUY7QUFDekYsd0VBQXNFO0FBQ3RFLGdJQUFxSTtBQUNySSwrRkFBNEY7QUFFL0UsUUFBQSxPQUFPLEdBQUc7SUFDckIsdUJBQWEsQ0FBQyxHQUFHLENBQUMscUJBQVcsQ0FBQztJQUM5Qix1QkFBYSxDQUFDLEdBQUcsQ0FBQyx1QkFBYSxDQUFDO0lBQ2hDLHVCQUFhLENBQUMsR0FBRyxDQUFDLDJCQUFpQixDQUFDO0NBQ3JDLENBQUM7QUFvQ0Y7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQWxDckIsZUFBUSxDQUFDO1lBQ1IsZUFBZSxFQUFFLENBQUMsMENBQXVCLEVBQUUsdUVBQXFDLENBQUM7WUFDakYsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7Z0JBQzlCLHdCQUFjO2dCQUNkLDhCQUFZO2dCQUNaLGtDQUFrQjtnQkFDbEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLG1CQUFXLENBQUMsWUFBWSxDQUFDLGVBQU8sQ0FBQztnQkFDakMsZUFBTzthQUNSO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiwwQ0FBdUI7Z0JBQ3ZCLHVFQUFxQztxQkFDbEMsbUNBQXFCLENBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQWlCO2dCQUMzQiwrQ0FBcUI7Z0JBQ3JCLG1CQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHFCQUFhO2dCQUNiLHlDQUFrQjtnQkFDbEIsaURBQXNCO2dCQUN0Qiw0Q0FBb0I7Z0JBQ3BCLEVBQUMsT0FBTyxFQUFFLGdCQUFTLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBQyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBMT0NBTEVfSUQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUsIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tIFwiYW5ndWxhcjItbW9tZW50XCI7XHJcbmltcG9ydCB7IE5nQXJyYXlQaXBlc01vZHVsZSB9IGZyb20gXCJhbmd1bGFyLXBpcGVzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbUFjdGlvbnMsIFJlcGFpckFjdGlvbnMsIFRlY2huaXRpYW5BY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb29tRWZmZWN0cywgUmVwYWlyRWZmZWN0cywgVGVjaG5pdGlhbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21SZXBhaXJzU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9yZXBhaXIvcm9vbS1yZXBhaXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbFwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hhbmdlLXJlcGFpci1kZXNjcmlwdGlvbi1tb2RhbC9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCB7IE1haW50ZW5hbmNlVGFza1NlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvbWFpbnRlbmFuY2UtdGFzay9tYWludGVuYW5jZS10YXNrLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFRkZFQ1RTID0gW1xyXG4gIEVmZmVjdHNNb2R1bGUucnVuKFJvb21FZmZlY3RzKSxcclxuICBFZmZlY3RzTW9kdWxlLnJ1bihSZXBhaXJFZmZlY3RzKSxcclxuICBFZmZlY3RzTW9kdWxlLnJ1bihUZWNobml0aWFuRWZmZWN0cylcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkUmVwYWlyTW9kYWxDb21wb25lbnQsIENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICBEcm9wRG93bk1vZHVsZSxcclxuICAgIE1vbWVudE1vZHVsZSxcclxuICAgIE5nQXJyYXlQaXBlc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUocmVkdWNlciksXHJcbiAgICBFRkZFQ1RTXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIERyYXdlckNvbXBvbmVudCxcclxuICAgIEFkZFJlcGFpck1vZGFsQ29tcG9uZW50LFxyXG4gICAgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCxcclxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkFjdGlvbnMsIFxyXG4gICAgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlLCBcclxuICAgIFJvb21BY3Rpb25zLCBcclxuICAgIFJvb21TZXJ2aWNlLCBcclxuICAgIFJlcGFpckFjdGlvbnMsIFxyXG4gICAgUm9vbVJlcGFpcnNTZXJ2aWNlLCBcclxuICAgIE1haW50ZW5hbmNlVGFza1NlcnZpY2UsXHJcbiAgICBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHtwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOlwiZWwtR1JcIn1dLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==