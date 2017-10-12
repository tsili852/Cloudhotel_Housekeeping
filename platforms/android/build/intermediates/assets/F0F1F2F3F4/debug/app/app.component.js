"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AppComponent = (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // TnsSideDrawer.build({
        //   templates: [{
        //       title: 'Maids',
        //       androidIcon: 'maid',
        //       iosIcon: 'maid'
        //   },{
        //       title: 'Technitians',
        //       androidIcon: 'contractor',
        //       iosIcon: 'contractor'
        //   }],
        //   title: 'Welcome Housekeeping',
        //   textColor: new Color("#000000"),
        //   backgroundColor: new Color("#ffffff"),
        //   headerBackgroundColor: new Color("#006db3"),
        //   context: this,
        //   listener: (index) => {
        //       switch(index) {
        //           case 0:
        //               this.routerExtensions.navigate(["/maids"], { clearHistory: true });
        //               break;
        //           case 1:
        //               this.routerExtensions.navigate(["/technitians"], { clearHistory: true });
        //               break;
        //       }
        //   }
        // })
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        template: "<page-router-outlet></page-router-outlet>"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0RBQStEO0FBTy9ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUN4QixRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLG1DQUFtQztRQUNuQyw4QkFBOEI7UUFDOUIsUUFBUTtRQUNSLG1DQUFtQztRQUNuQyxxQ0FBcUM7UUFDckMsMkNBQTJDO1FBQzNDLGlEQUFpRDtRQUNqRCxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0ZBQW9GO1FBQ3BGLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsMEZBQTBGO1FBQzFGLHVCQUF1QjtRQUN2QixVQUFVO1FBQ1YsTUFBTTtRQUNOLEtBQUs7SUFDUCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7S0FDdEQsQ0FBQztxQ0FFc0MseUJBQWdCO0dBRDNDLFlBQVksQ0E2QnhCO0FBN0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gJ2ltYWdlLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYWluXCIsXG4gIHRlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgLy8gVG5zU2lkZURyYXdlci5idWlsZCh7XG4gICAgLy8gICB0ZW1wbGF0ZXM6IFt7XG4gICAgLy8gICAgICAgdGl0bGU6ICdNYWlkcycsXG4gICAgLy8gICAgICAgYW5kcm9pZEljb246ICdtYWlkJyxcbiAgICAvLyAgICAgICBpb3NJY29uOiAnbWFpZCdcbiAgICAvLyAgIH0se1xuICAgIC8vICAgICAgIHRpdGxlOiAnVGVjaG5pdGlhbnMnLFxuICAgIC8vICAgICAgIGFuZHJvaWRJY29uOiAnY29udHJhY3RvcicsXG4gICAgLy8gICAgICAgaW9zSWNvbjogJ2NvbnRyYWN0b3InXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIHRpdGxlOiAnV2VsY29tZSBIb3VzZWtlZXBpbmcnLFxuICAgIC8vICAgdGV4dENvbG9yOiBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLFxuICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxuICAgIC8vICAgaGVhZGVyQmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjMDA2ZGIzXCIpLFxuICAgIC8vICAgY29udGV4dDogdGhpcyxcbiAgICAvLyAgIGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcbiAgICAvLyAgICAgICBzd2l0Y2goaW5kZXgpIHtcbiAgICAvLyAgICAgICAgICAgY2FzZSAwOlxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgLy8gICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgY2FzZSAxOlxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNobml0aWFuc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgLy8gICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==