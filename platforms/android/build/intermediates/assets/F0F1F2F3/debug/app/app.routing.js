"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_component_1 = require("./pages/main/main.component");
var maids_component_1 = require("./pages/maids/maids.component");
var technitians_component_1 = require("./pages/technitians/technitians.component");
exports.routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent },
    { path: "maids", component: maids_component_1.MaidsComponent },
    { path: "technitians", component: technitians_component_1.TechnitiansComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    maids_component_1.MaidsComponent,
    technitians_component_1.TechnitiansComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFDL0QsbUZBQWlGO0FBR3BFLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFDbEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO0NBRXpELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLDhCQUFhO0lBQ2IsZ0NBQWM7SUFDZCw0Q0FBb0I7Q0FDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWlkc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21haWRzL21haWRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobml0aWFuc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGVjaG5pdGlhbnMvdGVjaG5pdGlhbnMuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzpcIi9tYWluXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxyXG4gIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJtYWlkc1wiLCBjb21wb25lbnQ6IE1haWRzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcInRlY2huaXRpYW5zXCIsIGNvbXBvbmVudDogVGVjaG5pdGlhbnNDb21wb25lbnQgfVxyXG4gIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIE1haW5Db21wb25lbnQsXHJcbiAgICBNYWlkc0NvbXBvbmVudCxcclxuICAgIFRlY2huaXRpYW5zQ29tcG9uZW50XHJcbl07Il19