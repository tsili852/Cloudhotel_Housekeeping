"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var technitian_1 = require("./technitian");
var TechnitianListService = /** @class */ (function () {
    function TechnitianListService() {
        this.technitiansList = [];
    }
    TechnitianListService.prototype.load = function () {
        this.technitiansList.push(new technitian_1.Technitian("1", "Makis"));
        this.technitiansList.push(new technitian_1.Technitian("2", "Takis"));
        this.technitiansList.push(new technitian_1.Technitian("3", "Lakis"));
        return this.technitiansList;
    };
    TechnitianListService.prototype.getFromId = function (id) {
        var selectedTechnitian;
        this.load();
        this.technitiansList.forEach(function (technitian) {
            if (technitian.id === id) {
                selectedTechnitian = technitian;
            }
        });
        return selectedTechnitian;
    };
    TechnitianListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TechnitianListService);
    return TechnitianListService;
}());
exports.TechnitianListService = TechnitianListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWNobml0aWFuLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywyQ0FBMEM7QUFHMUM7SUFFSTtRQURBLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUVoQixvQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2hCLElBQUksa0JBQThCLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFzQjtZQUNoRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQXRCUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTs7T0FDQSxxQkFBcUIsQ0F1QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFRlY2huaXRpYW4gfSBmcm9tICcuL3RlY2huaXRpYW4nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVjaG5pdGlhbkxpc3RTZXJ2aWNlIHtcclxuICAgIHRlY2huaXRpYW5zTGlzdCA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy50ZWNobml0aWFuc0xpc3QucHVzaChuZXcgVGVjaG5pdGlhbihcIjFcIiwgXCJNYWtpc1wiKSk7XHJcbiAgICAgICAgdGhpcy50ZWNobml0aWFuc0xpc3QucHVzaChuZXcgVGVjaG5pdGlhbihcIjJcIiwgXCJUYWtpc1wiKSk7XHJcbiAgICAgICAgdGhpcy50ZWNobml0aWFuc0xpc3QucHVzaChuZXcgVGVjaG5pdGlhbihcIjNcIiwgXCJMYWtpc1wiKSk7ICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnRlY2huaXRpYW5zTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcm9tSWQoaWQ6IHN0cmluZyk6IFRlY2huaXRpYW4geyAgICBcclxuICAgICAgICBsZXQgc2VsZWN0ZWRUZWNobml0aWFuOiBUZWNobml0aWFuOyAgICBcclxuICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgICAgICB0aGlzLnRlY2huaXRpYW5zTGlzdC5mb3JFYWNoKCh0ZWNobml0aWFuOiBUZWNobml0aWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZWNobml0aWFuLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZWNobml0aWFuID0gdGVjaG5pdGlhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZWNobml0aWFuO1xyXG4gICAgfVxyXG59Il19