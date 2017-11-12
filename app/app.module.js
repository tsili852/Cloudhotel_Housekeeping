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
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
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
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css'
                }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRix5RUFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLDBEQUFnRTtBQUNoRSxxQ0FBaUQ7QUFDakQseUNBQThDO0FBQzlDLG1EQUErQztBQUMvQywrQ0FBbUQ7QUFDbkQsdUVBQThEO0FBRTlELGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFDOUQsMENBQXVDO0FBQ3ZDLHlDQUFnRjtBQUNoRixxQ0FBMEU7QUFDMUUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQUMxRSx1RkFBb0Y7QUFDcEYsbUZBQXlGO0FBQ3pGLHdFQUFzRTtBQUN0RSxnSUFBcUk7QUFDckksK0ZBQTRGO0FBRS9FLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLHVCQUFhLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUM7SUFDOUIsdUJBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQWEsQ0FBQztJQUNoQyx1QkFBYSxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQztDQUNyQyxDQUFDO0FBdUNGO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFyQ3JCLGVBQVEsQ0FBQztZQUNSLGVBQWUsRUFBRSxDQUFDLDBDQUF1QixFQUFFLHVFQUFxQyxDQUFDO1lBQ2pGLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5Qix3QkFBYztnQkFDZCw4QkFBWTtnQkFDWixrQ0FBa0I7Z0JBQ2xCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDM0IsSUFBSSxFQUFFLDJCQUEyQjtpQkFDakMsQ0FBQztnQkFDQSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztnQkFDeEMsbUJBQVcsQ0FBQyxZQUFZLENBQUMsZUFBTyxDQUFDO2dCQUNqQyxlQUFPO2FBQ1I7WUFDRCxZQUFZO2dCQUNWLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLDBDQUF1QjtnQkFDdkIsdUVBQXFDO3FCQUNsQyxtQ0FBcUIsQ0FDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBaUI7Z0JBQzNCLCtDQUFxQjtnQkFDckIsbUJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gscUJBQWE7Z0JBQ2IseUNBQWtCO2dCQUNsQixpREFBc0I7Z0JBQ3RCLDRDQUFvQjtnQkFDcEIsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFDLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSBcImFuZ3VsYXIyLW1vbWVudFwiO1xuaW1wb3J0IHsgTmdBcnJheVBpcGVzTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItcGlwZXNcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb25cIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcbmltcG9ydCB7IFJvb21BY3Rpb25zLCBSZXBhaXJBY3Rpb25zLCBUZWNobml0aWFuQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnMvaW5kZXhcIjtcbmltcG9ydCB7IFJvb21FZmZlY3RzLCBSZXBhaXJFZmZlY3RzLCBUZWNobml0aWFuRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHNcIjtcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb29tUmVwYWlyc1NlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvcmVwYWlyL3Jvb20tcmVwYWlycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUZWNobml0aWFuTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdGVjaG5pdGlhbi90ZWNobml0aWFuLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbFwiO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGFuZ2VSZXBhaXJEZXNjcmlwdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaGFuZ2UtcmVwYWlyLWRlc2NyaXB0aW9uLW1vZGFsL2NoYW5nZS1yZXBhaXItZGVzY3JpcHRpb24tbW9kYWxcIjtcbmltcG9ydCB7IE1haW50ZW5hbmNlVGFza1NlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvbWFpbnRlbmFuY2UtdGFzay9tYWludGVuYW5jZS10YXNrLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IEVGRkVDVFMgPSBbXG4gIEVmZmVjdHNNb2R1bGUucnVuKFJvb21FZmZlY3RzKSxcbiAgRWZmZWN0c01vZHVsZS5ydW4oUmVwYWlyRWZmZWN0cyksXG4gIEVmZmVjdHNNb2R1bGUucnVuKFRlY2huaXRpYW5FZmZlY3RzKVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkUmVwYWlyTW9kYWxDb21wb25lbnQsIENoYW5nZVJlcGFpckRlc2NyaXB0aW9uTW9kYWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIERyb3BEb3duTW9kdWxlLFxuICAgIE1vbWVudE1vZHVsZSxcbiAgICBOZ0FycmF5UGlwZXNNb2R1bGUsXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG5cdFx0XHQnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcydcblx0XHR9KSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VyKSxcbiAgICBFRkZFQ1RTXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBEcmF3ZXJDb21wb25lbnQsXG4gICAgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQsXG4gICAgQ2hhbmdlUmVwYWlyRGVzY3JpcHRpb25Nb2RhbENvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVGVjaG5pdGlhbkFjdGlvbnMsIFxuICAgIFRlY2huaXRpYW5MaXN0U2VydmljZSwgXG4gICAgUm9vbUFjdGlvbnMsIFxuICAgIFJvb21TZXJ2aWNlLCBcbiAgICBSZXBhaXJBY3Rpb25zLCBcbiAgICBSb29tUmVwYWlyc1NlcnZpY2UsIFxuICAgIE1haW50ZW5hbmNlVGFza1NlcnZpY2UsXG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAge3Byb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6XCJlbC1HUlwifV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19