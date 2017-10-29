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
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./reducers/index");
var index_2 = require("./actions/index");
var effects_2 = require("./effects");
var room_service_1 = require("./shared/room/room.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUISideDrawerModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                store_1.StoreModule.provideStore(index_1.default),
                effects_1.EffectsModule.run(effects_2.RoomEffects)
            ],
            declarations: [
                app_component_1.AppComponent,
                drawer_component_1.DrawerComponent
            ].concat(app_routing_1.navigatableComponents),
            providers: [index_2.RoomActions, room_service_1.RoomService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLGdFQUFvRjtBQUNwRix5RUFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLHFDQUFpRDtBQUNqRCx5Q0FBOEM7QUFFOUMsaURBQStDO0FBQy9DLDZDQUE4RDtBQUM5RCwwQ0FBdUM7QUFDdkMseUNBQThDO0FBQzlDLHFDQUF3QztBQUN4QywyREFBeUQ7QUFzQnpEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFwQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztnQkFDeEMsbUJBQVcsQ0FBQyxZQUFZLENBQUMsZUFBTyxDQUFDO2dCQUNqQyx1QkFBYSxDQUFDLEdBQUcsQ0FBQyxxQkFBVyxDQUFDO2FBQy9CO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtnQkFDWixrQ0FBZTtxQkFDWixtQ0FBcUIsQ0FDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLDBCQUFXLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvb21FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VyKSxcclxuICAgIEVmZmVjdHNNb2R1bGUucnVuKFJvb21FZmZlY3RzKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBEcmF3ZXJDb21wb25lbnQsXHJcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1Jvb21BY3Rpb25zLCBSb29tU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19