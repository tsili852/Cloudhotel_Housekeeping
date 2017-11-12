"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var configuration_service_1 = require("../../shared/configuration.service");
var PreconfigureComponent = /** @class */ (function () {
    function PreconfigureComponent(routerExtensions, configurationService, page) {
        this.routerExtensions = routerExtensions;
        this.configurationService = configurationService;
        this.page = page;
    }
    PreconfigureComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    PreconfigureComponent.prototype.onSubmit = function () {
        var hotelsnTextField = this.hotelsnTF.nativeElement;
        var hotelsn = hotelsnTextField.text;
        this.configurationService.setHotelSN(hotelsn);
        this.routerExtensions.navigate(["/main"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("hotelsn"),
        __metadata("design:type", core_1.ElementRef)
    ], PreconfigureComponent.prototype, "hotelsnTF", void 0);
    PreconfigureComponent = __decorate([
        core_1.Component({
            selector: "preconfigure",
            templateUrl: "pages/preconfigure/preconfigure.html",
            styleUrls: ["pages/preconfigure/preconfigure-common.css", "pages/preconfigure/preconfigure.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            configuration_service_1.ConfigurationService,
            page_1.Page])
    ], PreconfigureComponent);
    return PreconfigureComponent;
}());
exports.PreconfigureComponent = PreconfigureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlY29uZmlndXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWNvbmZpZ3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBRy9CLHNEQUErRDtBQUMvRCw0RUFBMEU7QUFPMUU7SUFJSSwrQkFDWSxnQkFBa0MsRUFDbEMsb0JBQTBDLEVBQzFDLElBQVU7UUFGVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFM0Isd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksZ0JBQWdCLEdBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDL0QsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWxCcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVksaUJBQVU7NERBQUM7SUFGbkMscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLHFDQUFxQyxDQUFDO1NBQ25HLENBQUM7eUNBTWdDLHlCQUFnQjtZQUNaLDRDQUFvQjtZQUNwQyxXQUFJO09BUGIscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicHJlY29uZmlndXJlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcHJlY29uZmlndXJlL3ByZWNvbmZpZ3VyZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wcmVjb25maWd1cmUvcHJlY29uZmlndXJlLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9wcmVjb25maWd1cmUvcHJlY29uZmlndXJlLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQcmVjb25maWd1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImhvdGVsc25cIikgaG90ZWxzblRGOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBsZXQgaG90ZWxzblRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ob3RlbHNuVEYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IGhvdGVsc24gPSBob3RlbHNuVGV4dEZpZWxkLnRleHQ7XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5zZXRIb3RlbFNOKGhvdGVsc24pO1xuXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxufSJdfQ==