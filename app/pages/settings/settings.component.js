"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var drawer_page_1 = require("../drawer.page");
var configuration_service_1 = require("../../shared/configuration.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var index_1 = require("../../shared/maintenance-task/index");
var room_1 = require("../../shared/room");
var SettingsComponent = /** @class */ (function (_super) {
    __extends(SettingsComponent, _super);
    function SettingsComponent(routerExtensions, page, configurationService, changeDetectorRef, mtaskService, roomService, fonticon) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.page = page;
        _this.configurationService = configurationService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.mtaskService = mtaskService;
        _this.roomService = roomService;
        _this.fonticon = fonticon;
        _this.sampleText = "NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no WebViews—resulting in native-like performance and UX.NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by Telerik.\n\n\n NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.";
        _this.content = "";
        _this.wrenchIcon = String.fromCharCode(0xf0ad);
        _this.mTasksObs = _this.mtaskService.getMaintenanceTasks();
        _this.mTasksObs.subscribe(function (tasks) {
            _this.mTasksList = tasks;
        });
        return _this;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        this.content = this.sampleText;
    };
    SettingsComponent.prototype.onIndexChanged = function (args) {
        var _this = this;
        var tabView = args.object;
        if (tabView.selectedIndex == 0) {
            this.mTasksObs = this.mtaskService.getMaintenanceTasks();
            this.mTasksObs.subscribe(function (tasks) {
                _this.mTasksList = tasks;
            });
        }
        else {
            this.roomsObs = this.roomService.getAllRooms(10);
            this.roomsObs.subscribe(function (rooms) {
                _this.roomsList = rooms;
            });
        }
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    };
    SettingsComponent.prototype.onAddMTask = function () {
        this.mTasksList.push({
            MaintenanceTaskID: null,
            Name: ''
        });
    };
    SettingsComponent.prototype.onAddRoom = function () {
        this.roomsList.push({
            Agent: null,
            Arrival: new Date(),
            Customer: null,
            Departure: new Date(),
            Number: "",
            Repairs: null,
            RoomID: null,
            RoomType: null,
            status: 0,
            towels_status: 0,
            bathroom_status: 0,
            bed_status: 0
        });
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "settings",
            templateUrl: "pages/settings/settings.html",
            styleUrls: ["pages/settings/settings-common.css", "pages/settings/settings.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            configuration_service_1.ConfigurationService,
            core_1.ChangeDetectorRef,
            index_1.MaintenanceTaskService,
            room_1.RoomService,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], SettingsComponent);
    return SettingsComponent;
}(drawer_page_1.DrawerPage));
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRGO0FBRTVGLGdDQUErQjtBQUUvQixzREFBK0Q7QUFJL0QsOENBQTRDO0FBQzVDLDRFQUEwRTtBQUUxRSx1RUFBK0Q7QUFDL0QsNkRBQThGO0FBQzlGLDBDQUFzRDtBQU90RDtJQUF1QyxxQ0FBVTtJQVc3QywyQkFDWSxnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLG9CQUEwQyxFQUMxQyxpQkFBb0MsRUFDcEMsWUFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsUUFBNEI7UUFQeEMsWUFTSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQU8zQjtRQWZXLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDcEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUSxHQUFSLFFBQVEsQ0FBb0I7UUFqQnhDLGdCQUFVLEdBQUcsMCtCQUEwK0IsQ0FBQztRQUN4L0IsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixnQkFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFtQnJDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRXpELEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUMxQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTs7SUFDTixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVNLDBDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFBMUIsaUJBZ0JDO1FBZkcsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUMxQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUN6QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2pCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxhQUFhLEVBQUUsQ0FBQztZQUNoQixlQUFlLEVBQUUsQ0FBQztZQUNsQixVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDLENBQUE7SUFDTixDQUFDO0lBMUVRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztTQUNuRixDQUFDO3lDQWFnQyx5QkFBZ0I7WUFDNUIsV0FBSTtZQUNZLDRDQUFvQjtZQUN2Qix3QkFBaUI7WUFDdEIsOEJBQXNCO1lBQ3ZCLGtCQUFXO1lBQ2QsOENBQWtCO09BbEIvQixpQkFBaUIsQ0EyRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNFRCxDQUF1Qyx3QkFBVSxHQTJFaEQ7QUEzRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgTWFpbnRlbmFuY2VUYXNrLCBNYWludGVuYW5jZVRhc2tTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tYWludGVuYW5jZS10YXNrL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvb20sIFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInNldHRpbmdzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3NldHRpbmdzL3NldHRpbmdzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzYW1wbGVUZXh0ID0gXCJOYXRpdmVTY3JpcHQgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIG5hdGl2ZSBpT1MgYW5kIEFuZHJvaWQgYXBwcyB1c2luZyBKYXZhU2NyaXB0IGFuZCBDU1MuIE5hdGl2ZVNjcmlwdCByZW5kZXJzIFVJcyB3aXRoIHRoZSBuYXRpdmUgcGxhdGZvcm3igJlzIHJlbmRlcmluZyBlbmdpbmXigJRubyBXZWJWaWV3c+KAlHJlc3VsdGluZyBpbiBuYXRpdmUtbGlrZSBwZXJmb3JtYW5jZSBhbmQgVVguTmF0aXZlU2NyaXB0IHByb3ZpZGVzIGEgYmVzdC1vZi1ib3RoLXdvcmxkcyBkZXZlbG9wbWVudCBleHBlcmllbmNlLiBPdXIgY3Jvc3MtcGxhdGZvcm0gSmF2YVNjcmlwdCBtb2R1bGVzIGdpdmUgeW91IHRoZSBjb252ZW5pZW5jZSBvZiB3cml0aW5nIGlPUyBhbmQgQW5kcm9pZCBhcHBzIGZyb20gYSBzaW5nbGUgSmF2YVNjcmlwdCBjb2RlYmFzZSwgd2hpbGUgb3VyIHJ1bnRpbWVzIGdpdmUgeW91IHRoZSBwb3dlciBvZiBhY2Nlc3NpbmcgbmF0aXZlIEFQSXMsIFNES3MsIGFuZCBmcmFtZXdvcmtzIHdoZW4geW91IG5lZWQgdGhlbeKAlGFsbCB3aXRob3V0IG5lZWRpbmcgdG8gb3BlbiBYY29kZSBvciBBbmRyb2lkIFN0dWRpby4gTmF0aXZlU2NyaXB0IHdhcyBjcmVhdGVkIGFuZCBpcyBzdXBwb3J0ZWQgYnkgVGVsZXJpay5cXG5cXG5cXG4gTmF0aXZlU2NyaXB0IGRvZXNu4oCZdCByZXF1aXJlIEFuZ3VsYXIsIGJ1dCBpdOKAmXMgZXZlbiBiZXR0ZXIgd2hlbiB5b3UgdXNlIGl0LiBZb3UgY2FuIGZ1bGx5IHJldXNlIHNraWxscyBhbmQgY29kZSBmcm9tIHRoZSB3ZWIgdG8gYnVpbGQgYmVhdXRpZnVsLCBoaWdoIHBlcmZvcm1hbmNlIG5hdGl2ZSBtb2JpbGUgYXBwcyB3aXRob3V0IHdlYiB2aWV3cy4gTmF0aXZlU2NyaXB0IGZlYXR1cmVzIGRlZXAgaW50ZWdyYXRpb24gd2l0aCBBbmd1bGFyLCB0aGUgbGF0ZXN0IGFuZCBncmVhdGVzdCAoYW5kIGZhc3Rlc3QpIEFuZ3VsYXIgZnJhbWV3b3JrLiBPcGVuIHNvdXJjZSBhbmQgYmFja2VkIGJ5IFRlbGVyaWsuXCI7XHJcbiAgICBjb250ZW50OiBTdHJpbmcgPSBcIlwiO1xyXG4gICAgd3JlbmNoSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGFkKTtcclxuXHJcbiAgICBtVGFza3NPYnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIG1UYXNrc0xpc3Q6IEFycmF5PE1haW50ZW5hbmNlVGFzaz47XHJcblxyXG4gICAgcm9vbXNPYnM6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHJvb21zTGlzdDogQXJyYXk8Um9vbT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgbXRhc2tTZXJ2aWNlOiBNYWludGVuYW5jZVRhc2tTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxyXG4gICAgKSB7IFxyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTsgXHJcblxyXG4gICAgICAgIHRoaXMubVRhc2tzT2JzID0gdGhpcy5tdGFza1NlcnZpY2UuZ2V0TWFpbnRlbmFuY2VUYXNrcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubVRhc2tzT2JzLnN1YnNjcmliZSh0YXNrcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubVRhc2tzTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuc2FtcGxlVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JbmRleENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHRhYlZpZXcuc2VsZWN0ZWRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubVRhc2tzT2JzID0gdGhpcy5tdGFza1NlcnZpY2UuZ2V0TWFpbnRlbmFuY2VUYXNrcygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5tVGFza3NPYnMuc3Vic2NyaWJlKHRhc2tzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVRhc2tzTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNPYnMgPSB0aGlzLnJvb21TZXJ2aWNlLmdldEFsbFJvb21zKDEwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucm9vbXNPYnMuc3Vic2NyaWJlKHJvb21zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vbXNMaXN0ID0gcm9vbXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaW5kZXggY2hhbmdlZCEgTmV3IGlueGVkOiBcIiArIHRhYlZpZXcuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRNVGFzaygpIHtcclxuICAgICAgICB0aGlzLm1UYXNrc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIE1haW50ZW5hbmNlVGFza0lEOiBudWxsLFxyXG4gICAgICAgICAgICBOYW1lOiAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRSb29tKCkge1xyXG4gICAgICAgIHRoaXMucm9vbXNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBBZ2VudDogbnVsbCxcclxuICAgICAgICAgICAgQXJyaXZhbDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgQ3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgIERlcGFydHVyZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgTnVtYmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBSZXBhaXJzOiBudWxsLFxyXG4gICAgICAgICAgICBSb29tSUQ6IG51bGwsXHJcbiAgICAgICAgICAgIFJvb21UeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBzdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIHRvd2Vsc19zdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIGJhdGhyb29tX3N0YXR1czogMCxcclxuICAgICAgICAgICAgYmVkX3N0YXR1czogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19