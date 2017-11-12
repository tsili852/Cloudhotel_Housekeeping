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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWlkLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQkFBOEI7QUFHOUI7SUFFSTtRQURBLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFDQSxDQUFDO0lBRWhCLDhCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDaEIsSUFBSSxZQUFrQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBVTtZQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBekJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBMEIzQjtJQUFELHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTWFpZCB9IGZyb20gJy4vbWFpZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYWlkTGlzdFNlcnZpY2Uge1xuICAgIG1haWRzTGlzdCA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1haWRzTGlzdC5wdXNoKG5ldyBNYWlkKFwiMVwiLCBcIk1hcmlhXCIpKTtcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QucHVzaChuZXcgTWFpZChcIjJcIiwgXCJEZXNwb2luYVwiKSk7XG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCIzXCIsIFwiTWVscG9cIikpO1xuICAgICAgICB0aGlzLm1haWRzTGlzdC5wdXNoKG5ldyBNYWlkKFwiNFwiLCBcIkxhcmlzYVwiKSk7XG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCI1XCIsIFwiTmFkaWFcIikpOyAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFpZHNMaXN0O1xuICAgIH1cblxuICAgIGdldEZyb21JZChpZDogc3RyaW5nKTogTWFpZCB7ICAgIFxuICAgICAgICBsZXQgc2VsZWN0ZWRNYWlkOiBNYWlkOyAgICBcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIHRoaXMubWFpZHNMaXN0LmZvckVhY2goKG1haWQ6IE1haWQpID0+IHtcbiAgICAgICAgICAgIGlmIChtYWlkLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTWFpZCA9IG1haWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZE1haWQ7XG4gICAgfVxufSJdfQ==