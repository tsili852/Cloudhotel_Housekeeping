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
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./reducers/index");
var index_2 = require("./actions/index");
var effects_2 = require("./effects");
var room_service_1 = require("./shared/room/room.service");
var room_repairs_service_1 = require("./shared/repair/room-repairs.service");
var technitian_list_service_1 = require("./shared/technitian/technitian-list.service");
var add_repair_modal_1 = require("./components/add-repair-modal/add-repair-modal");
var change_repair_description_modal_1 = require("./components/change-repair-description-modal/change-repair-description-modal");
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
            providers: [index_2.TechnitianActions, technitian_list_service_1.TechnitianListService, index_2.RoomActions, room_service_1.RoomService, index_2.RepairActions, room_repairs_service_1.RoomRepairsService, { provide: core_1.LOCALE_ID, useValue: "el-GR" }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRix5RUFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLDBEQUFnRTtBQUNoRSxxQ0FBaUQ7QUFDakQseUNBQThDO0FBRTlDLGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFDOUQsMENBQXVDO0FBQ3ZDLHlDQUFnRjtBQUNoRixxQ0FBMEU7QUFDMUUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQUMxRSx1RkFBb0Y7QUFDcEYsbUZBQXlGO0FBQ3pGLGdJQUFxSTtBQUV4SCxRQUFBLE9BQU8sR0FBRztJQUNyQix1QkFBYSxDQUFDLEdBQUcsQ0FBQyxxQkFBVyxDQUFDO0lBQzlCLHVCQUFhLENBQUMsR0FBRyxDQUFDLHVCQUFhLENBQUM7SUFDaEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQWlCLENBQUM7Q0FDckMsQ0FBQztBQTBCRjtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDUixlQUFlLEVBQUUsQ0FBQywwQ0FBdUIsRUFBRSx1RUFBcUMsQ0FBQztZQUNqRixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsaUNBQXdCO2dCQUN4QixzQ0FBNEI7Z0JBQzVCLHdDQUE4QjtnQkFDOUIsd0JBQWM7Z0JBQ2QsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLG1CQUFXLENBQUMsWUFBWSxDQUFDLGVBQU8sQ0FBQztnQkFDakMsZUFBTzthQUNSO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiwwQ0FBdUI7Z0JBQ3ZCLHVFQUFxQztxQkFDbEMsbUNBQXFCLENBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQWlCLEVBQUUsK0NBQXFCLEVBQUUsbUJBQVcsRUFBRSwwQkFBVyxFQUFFLHFCQUFhLEVBQUUseUNBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFDLENBQUM7WUFDMUosU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbUFjdGlvbnMsIFJlcGFpckFjdGlvbnMsIFRlY2huaXRpYW5BY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb29tRWZmZWN0cywgUmVwYWlyRWZmZWN0cywgVGVjaG5pdGlhbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21SZXBhaXJzU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9yZXBhaXIvcm9vbS1yZXBhaXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFRkZFQ1RTID0gW1xyXG4gIEVmZmVjdHNNb2R1bGUucnVuKFJvb21FZmZlY3RzKSxcclxuICBFZmZlY3RzTW9kdWxlLnJ1bihSZXBhaXJFZmZlY3RzKSxcclxuICBFZmZlY3RzTW9kdWxlLnJ1bihUZWNobml0aWFuRWZmZWN0cylcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkUmVwYWlyTW9kYWxDb21wb25lbnQsIENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICBEcm9wRG93bk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUocmVkdWNlciksXHJcbiAgICBFRkZFQ1RTXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIERyYXdlckNvbXBvbmVudCxcclxuICAgIEFkZFJlcGFpck1vZGFsQ29tcG9uZW50LFxyXG4gICAgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCxcclxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkFjdGlvbnMsIFRlY2huaXRpYW5MaXN0U2VydmljZSwgUm9vbUFjdGlvbnMsIFJvb21TZXJ2aWNlLCBSZXBhaXJBY3Rpb25zLCBSb29tUmVwYWlyc1NlcnZpY2UsIHtwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOlwiZWwtR1JcIn1dLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==