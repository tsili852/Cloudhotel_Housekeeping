"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_component_1 = require("./pages/main/main.component");
var maids_component_1 = require("./pages/maids/maids.component");
var technitians_component_1 = require("./pages/technitians/technitians.component");
var rooms_component_1 = require("./pages/rooms/rooms.component");
exports.routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent },
    { path: "maids", component: maids_component_1.MaidsComponent },
    { path: "technitians", component: technitians_component_1.TechnitiansComponent },
    { path: "rooms", component: rooms_component_1.RoomsComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    maids_component_1.MaidsComponent,
    technitians_component_1.TechnitiansComponent,
    rooms_component_1.RoomsComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFDL0QsbUZBQWlGO0FBQ2pGLGlFQUErRDtBQUVsRCxRQUFBLE1BQU0sR0FBRztJQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ2xELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Q0FDN0MsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDakMsOEJBQWE7SUFDYixnQ0FBYztJQUNkLDRDQUFvQjtJQUNwQixnQ0FBYztDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1haWRzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFpZHMvbWFpZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXRpYW5zQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZWNobml0aWFucy90ZWNobml0aWFucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb29tc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Jvb21zL3Jvb21zLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86XCIvbWFpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwifSxcclxuICB7IHBhdGg6IFwibWFpblwiLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwibWFpZHNcIiwgY29tcG9uZW50OiBNYWlkc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJ0ZWNobml0aWFuc1wiLCBjb21wb25lbnQ6IFRlY2huaXRpYW5zQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcInJvb21zXCIsIGNvbXBvbmVudDogUm9vbXNDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIE1haW5Db21wb25lbnQsXHJcbiAgICBNYWlkc0NvbXBvbmVudCxcclxuICAgIFRlY2huaXRpYW5zQ29tcG9uZW50LFxyXG4gICAgUm9vbXNDb21wb25lbnRcclxuXTsiXX0=