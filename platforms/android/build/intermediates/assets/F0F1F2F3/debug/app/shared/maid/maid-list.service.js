"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var maid_1 = require("./maid");
var MaidListService = (function () {
    function MaidListService() {
    }
    MaidListService.prototype.load = function () {
        var maidsList = [];
        maidsList.push(new maid_1.Maid("1", "Maria"));
        maidsList.push(new maid_1.Maid("2", "Despoina"));
        maidsList.push(new maid_1.Maid("3", "Melpo"));
        maidsList.push(new maid_1.Maid("4", "Larisa"));
        maidsList.push(new maid_1.Maid("5", "Nadia"));
        return maidsList;
    };
    return MaidListService;
}());
MaidListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MaidListService);
exports.MaidListService = MaidListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWlkLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQ3hCO0lBQWUsQ0FBQztJQUVoQiw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksZUFBZTtJQUQzQixpQkFBVSxFQUFFOztHQUNBLGVBQWUsQ0FhM0I7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpZCB9IGZyb20gJy4vbWFpZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYWlkTGlzdFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgbGV0IG1haWRzTGlzdCA9IFtdO1xyXG4gICAgICAgIG1haWRzTGlzdC5wdXNoKG5ldyBNYWlkKFwiMVwiLCBcIk1hcmlhXCIpKTtcclxuICAgICAgICBtYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjJcIiwgXCJEZXNwb2luYVwiKSk7XHJcbiAgICAgICAgbWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCIzXCIsIFwiTWVscG9cIikpO1xyXG4gICAgICAgIG1haWRzTGlzdC5wdXNoKG5ldyBNYWlkKFwiNFwiLCBcIkxhcmlzYVwiKSk7XHJcbiAgICAgICAgbWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCI1XCIsIFwiTmFkaWFcIikpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBtYWlkc0xpc3Q7XHJcbiAgICB9XHJcbn0iXX0=