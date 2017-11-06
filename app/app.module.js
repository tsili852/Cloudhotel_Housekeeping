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
            entryComponents: [add_repair_modal_1.AddRepairModalComponent],
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
                add_repair_modal_1.AddRepairModalComponent
            ].concat(app_routing_1.navigatableComponents),
            providers: [index_2.TechnitianActions, technitian_list_service_1.TechnitianListService, index_2.RoomActions, room_service_1.RoomService, index_2.RepairActions, room_repairs_service_1.RoomRepairsService, { provide: core_1.LOCALE_ID, useValue: "el-GR" }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRix5RUFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLDBEQUFnRTtBQUNoRSxxQ0FBaUQ7QUFDakQseUNBQThDO0FBRTlDLGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFDOUQsMENBQXVDO0FBQ3ZDLHlDQUFnRjtBQUNoRixxQ0FBMEU7QUFDMUUsMkRBQXlEO0FBQ3pELDZFQUEwRTtBQUMxRSx1RkFBb0Y7QUFDcEYsbUZBQXlGO0FBRTVFLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLHVCQUFhLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUM7SUFDOUIsdUJBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQWEsQ0FBQztJQUNoQyx1QkFBYSxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQztDQUNyQyxDQUFDO0FBeUJGO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF2QnJCLGVBQVEsQ0FBQztZQUNSLGVBQWUsRUFBRSxDQUFDLDBDQUF1QixDQUFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5Qix3QkFBYztnQkFDZCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztnQkFDeEMsbUJBQVcsQ0FBQyxZQUFZLENBQUMsZUFBTyxDQUFDO2dCQUNqQyxlQUFPO2FBQ1I7WUFDRCxZQUFZO2dCQUNWLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLDBDQUF1QjtxQkFDcEIsbUNBQXFCLENBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQWlCLEVBQUUsK0NBQXFCLEVBQUUsbUJBQVcsRUFBRSwwQkFBVyxFQUFFLHFCQUFhLEVBQUUseUNBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFDLENBQUM7WUFDMUosU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbUFjdGlvbnMsIFJlcGFpckFjdGlvbnMsIFRlY2huaXRpYW5BY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb29tRWZmZWN0cywgUmVwYWlyRWZmZWN0cywgVGVjaG5pdGlhbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21SZXBhaXJzU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9yZXBhaXIvcm9vbS1yZXBhaXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3RlY2huaXRpYW4vdGVjaG5pdGlhbi1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZC1yZXBhaXItbW9kYWwvYWRkLXJlcGFpci1tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVGRkVDVFMgPSBbXHJcbiAgRWZmZWN0c01vZHVsZS5ydW4oUm9vbUVmZmVjdHMpLFxyXG4gIEVmZmVjdHNNb2R1bGUucnVuKFJlcGFpckVmZmVjdHMpLFxyXG4gIEVmZmVjdHNNb2R1bGUucnVuKFRlY2huaXRpYW5FZmZlY3RzKVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRSZXBhaXJNb2RhbENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgIERyb3BEb3duTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VyKSxcclxuICAgIEVGRkVDVFNcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgRHJhd2VyQ29tcG9uZW50LFxyXG4gICAgQWRkUmVwYWlyTW9kYWxDb21wb25lbnQsXHJcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1RlY2huaXRpYW5BY3Rpb25zLCBUZWNobml0aWFuTGlzdFNlcnZpY2UsIFJvb21BY3Rpb25zLCBSb29tU2VydmljZSwgUmVwYWlyQWN0aW9ucywgUm9vbVJlcGFpcnNTZXJ2aWNlLCB7cHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTpcImVsLUdSXCJ9XSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge30iXX0=