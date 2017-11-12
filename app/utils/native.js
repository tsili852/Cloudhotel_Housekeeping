"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platform = require("platform");
var color_1 = require("color");
var android = application.android;
var StatusBar = /** @class */ (function () {
    function StatusBar() {
    }
    StatusBar.setColor = function (hexcode) {
        if (android) {
            android.on(application.AndroidApplication.activityCreatedEvent, function () {
                if (platform.device.sdkVersion >= '21') {
                    var window_1 = application.android.startActivity.getWindow();
                    window_1.setStatusBarColor(new color_1.Color(hexcode).android);
                }
            });
        }
    };
    return StatusBar;
}());
exports.StatusBar = StatusBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBQzNDLG1DQUFxQztBQUNyQywrQkFBNEI7QUFFNUIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUVwQztJQUFBO0lBY0EsQ0FBQztJQVpVLGtCQUFRLEdBQWYsVUFBZ0IsT0FBZTtRQUUzQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUU7Z0JBRTVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksUUFBTSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMzRCxRQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7Q29sb3J9IGZyb20gJ2NvbG9yJztcblxuY29uc3QgYW5kcm9pZCA9IGFwcGxpY2F0aW9uLmFuZHJvaWQ7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIge1xuXG4gICAgc3RhdGljIHNldENvbG9yKGhleGNvZGU6IHN0cmluZyk6dm9pZCB7XG5cbiAgICAgICAgaWYgKGFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5Q3JlYXRlZEV2ZW50LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocGxhdGZvcm0uZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZG93ID0gYXBwbGljYXRpb24uYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IobmV3IENvbG9yKGhleGNvZGUpLmFuZHJvaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==