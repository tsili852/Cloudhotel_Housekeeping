"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platform = require("platform");
var color_1 = require("color");
var android = application.android;
var StatusBar = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBQzNDLG1DQUFxQztBQUNyQywrQkFBNEI7QUFFNUIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUVwQztJQUFBO0lBY0EsQ0FBQztJQVpVLGtCQUFRLEdBQWYsVUFBZ0IsT0FBZTtRQUUzQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUU7Z0JBRTVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksUUFBTSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMzRCxRQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICdjb2xvcic7XHJcblxyXG5jb25zdCBhbmRyb2lkID0gYXBwbGljYXRpb24uYW5kcm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIge1xyXG5cclxuICAgIHN0YXRpYyBzZXRDb2xvcihoZXhjb2RlOiBzdHJpbmcpOnZvaWQge1xyXG5cclxuICAgICAgICBpZiAoYW5kcm9pZCkge1xyXG4gICAgICAgICAgICBhbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUNyZWF0ZWRFdmVudCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IobmV3IENvbG9yKGhleGNvZGUpLmFuZHJvaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=