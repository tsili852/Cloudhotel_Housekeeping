"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var maid_1 = require("./maid");
var MaidListService = /** @class */ (function () {
    function MaidListService() {
        this.maidsList = [];
    }
    MaidListService.prototype.load = function () {
        this.maidsList.push(new maid_1.Maid("1", "Maria"));
        this.maidsList.push(new maid_1.Maid("2", "Despoina"));
        this.maidsList.push(new maid_1.Maid("3", "Melpo"));
        this.maidsList.push(new maid_1.Maid("4", "Larisa"));
        this.maidsList.push(new maid_1.Maid("5", "Nadia"));
        return this.maidsList;
    };
    MaidListService.prototype.getFromId = function (id) {
        var selectedMaid;
        this.load();
        this.maidsList.forEach(function (maid) {
            if (maid.id === id) {
                selectedMaid = maid;
            }
        });
        return selectedMaid;
    };
    MaidListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MaidListService);
    return MaidListService;
}());
exports.MaidListService = MaidListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWlkLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQkFBOEI7QUFHOUI7SUFFSTtRQURBLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFDQSxDQUFDO0lBRWhCLDhCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDaEIsSUFBSSxZQUFrQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBVTtZQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBekJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBMEIzQjtJQUFELHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haWQgfSBmcm9tICcuL21haWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFpZExpc3RTZXJ2aWNlIHtcclxuICAgIG1haWRzTGlzdCA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjFcIiwgXCJNYXJpYVwiKSk7XHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjJcIiwgXCJEZXNwb2luYVwiKSk7XHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjNcIiwgXCJNZWxwb1wiKSk7XHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjRcIiwgXCJMYXJpc2FcIikpO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCI1XCIsIFwiTmFkaWFcIikpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1haWRzTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcm9tSWQoaWQ6IHN0cmluZyk6IE1haWQgeyAgICBcclxuICAgICAgICBsZXQgc2VsZWN0ZWRNYWlkOiBNYWlkOyAgICBcclxuICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgICAgICB0aGlzLm1haWRzTGlzdC5mb3JFYWNoKChtYWlkOiBNYWlkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYWlkLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNYWlkID0gbWFpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRNYWlkO1xyXG4gICAgfVxyXG59Il19