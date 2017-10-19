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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0RBQStEO0FBTy9ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUN4QixRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLG1DQUFtQztRQUNuQyw4QkFBOEI7UUFDOUIsUUFBUTtRQUNSLG1DQUFtQztRQUNuQyxxQ0FBcUM7UUFDckMsMkNBQTJDO1FBQzNDLGlEQUFpRDtRQUNqRCxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0ZBQW9GO1FBQ3BGLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsMEZBQTBGO1FBQzFGLHVCQUF1QjtRQUN2QixVQUFVO1FBQ1YsTUFBTTtRQUNOLEtBQUs7SUFDUCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7S0FDdEQsQ0FBQztxQ0FFc0MseUJBQWdCO0dBRDNDLFlBQVksQ0E2QnhCO0FBN0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSAnaW1hZ2Utc291cmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgLy8gVG5zU2lkZURyYXdlci5idWlsZCh7XHJcbiAgICAvLyAgIHRlbXBsYXRlczogW3tcclxuICAgIC8vICAgICAgIHRpdGxlOiAnTWFpZHMnLFxyXG4gICAgLy8gICAgICAgYW5kcm9pZEljb246ICdtYWlkJyxcclxuICAgIC8vICAgICAgIGlvc0ljb246ICdtYWlkJ1xyXG4gICAgLy8gICB9LHtcclxuICAgIC8vICAgICAgIHRpdGxlOiAnVGVjaG5pdGlhbnMnLFxyXG4gICAgLy8gICAgICAgYW5kcm9pZEljb246ICdjb250cmFjdG9yJyxcclxuICAgIC8vICAgICAgIGlvc0ljb246ICdjb250cmFjdG9yJ1xyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgdGl0bGU6ICdXZWxjb21lIEhvdXNla2VlcGluZycsXHJcbiAgICAvLyAgIHRleHRDb2xvcjogbmV3IENvbG9yKFwiIzAwMDAwMFwiKSxcclxuICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxyXG4gICAgLy8gICBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiMwMDZkYjNcIiksXHJcbiAgICAvLyAgIGNvbnRleHQ6IHRoaXMsXHJcbiAgICAvLyAgIGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcclxuICAgIC8vICAgICAgIHN3aXRjaChpbmRleCkge1xyXG4gICAgLy8gICAgICAgICAgIGNhc2UgMDpcclxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWlkc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgIGNhc2UgMTpcclxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90ZWNobml0aWFuc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gIH1cclxufSJdfQ==