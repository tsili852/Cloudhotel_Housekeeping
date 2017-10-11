"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var technitian_1 = require("./technitian");
var TechnitianListService = (function () {
    function TechnitianListService() {
    }
    TechnitianListService.prototype.load = function () {
        var technitiansList = [];
        technitiansList.push(new technitian_1.Technitian("1", "Makis"));
        technitiansList.push(new technitian_1.Technitian("2", "Takis"));
        technitiansList.push(new technitian_1.Technitian("3", "Lakis"));
        return technitiansList;
    };
    return TechnitianListService;
}());
TechnitianListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TechnitianListService);
exports.TechnitianListService = TechnitianListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pdGlhbi1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWNobml0aWFuLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywyQ0FBMEM7QUFHMUMsSUFBYSxxQkFBcUI7SUFDOUI7SUFBZSxDQUFDO0lBRWhCLG9DQUFJLEdBQUo7UUFDSSxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkQsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkQsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHFCQUFxQjtJQURqQyxpQkFBVSxFQUFFOztHQUNBLHFCQUFxQixDQVdqQztBQVhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGVjaG5pdGlhbiB9IGZyb20gJy4vdGVjaG5pdGlhbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWNobml0aWFuTGlzdFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHRlY2huaXRpYW5zTGlzdCA9IFtdO1xyXG4gICAgICAgIHRlY2huaXRpYW5zTGlzdC5wdXNoKG5ldyBUZWNobml0aWFuKFwiMVwiLCBcIk1ha2lzXCIpKTtcclxuICAgICAgICB0ZWNobml0aWFuc0xpc3QucHVzaChuZXcgVGVjaG5pdGlhbihcIjJcIiwgXCJUYWtpc1wiKSk7XHJcbiAgICAgICAgdGVjaG5pdGlhbnNMaXN0LnB1c2gobmV3IFRlY2huaXRpYW4oXCIzXCIsIFwiTGFraXNcIikpOyAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlY2huaXRpYW5zTGlzdDtcclxuICAgIH1cclxufSJdfQ==