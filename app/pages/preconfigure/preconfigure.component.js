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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlY29uZmlndXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWNvbmZpZ3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBRy9CLHNEQUErRDtBQUMvRCw0RUFBMEU7QUFPMUU7SUFJSSwrQkFDWSxnQkFBa0MsRUFDbEMsb0JBQTBDLEVBQzFDLElBQVU7UUFGVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFM0Isd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksZ0JBQWdCLEdBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDL0QsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWxCcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVksaUJBQVU7NERBQUM7SUFGbkMscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLHFDQUFxQyxDQUFDO1NBQ25HLENBQUM7eUNBTWdDLHlCQUFnQjtZQUNaLDRDQUFvQjtZQUNwQyxXQUFJO09BUGIscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInByZWNvbmZpZ3VyZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcHJlY29uZmlndXJlL3ByZWNvbmZpZ3VyZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3ByZWNvbmZpZ3VyZS9wcmVjb25maWd1cmUtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3ByZWNvbmZpZ3VyZS9wcmVjb25maWd1cmUuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmVjb25maWd1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJob3RlbHNuXCIpIGhvdGVsc25URjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IGhvdGVsc25UZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuaG90ZWxzblRGLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGhvdGVsc24gPSBob3RlbHNuVGV4dEZpZWxkLnRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2Uuc2V0SG90ZWxTTihob3RlbHNuKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWluXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufSJdfQ==