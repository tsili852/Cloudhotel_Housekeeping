"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var native_1 = require("./utils/native");
var element_registry_1 = require("nativescript-angular/element-registry");
// setStatusBarColors();
native_1.StatusBar.setColor('#7AB1C6');
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFFNUUsMkNBQXlDO0FBQ3pDLHlDQUEyQztBQUMzQywwRUFBc0U7QUFFdEUsd0JBQXdCO0FBQ3hCLGtCQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLGtDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQUN2RSxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzIH0gZnJvbSBcIi4vdXRpbHMvc3RhdHVzLWJhci11dGlsXCI7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnLi91dGlscy9uYXRpdmUnO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbi8vIHNldFN0YXR1c0JhckNvbG9ycygpO1xyXG5TdGF0dXNCYXIuc2V0Q29sb3IoJyM3QUIxQzYnKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXX0=