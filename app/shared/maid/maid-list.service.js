"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var maid_1 = require("./maid");
var MaidListService = (function () {
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
    return MaidListService;
}());
MaidListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MaidListService);
exports.MaidListService = MaidListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpZC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWlkLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQkFBOEI7QUFHOUIsSUFBYSxlQUFlO0lBRXhCO1FBREEsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNBLENBQUM7SUFFaEIsOEJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUNoQixJQUFJLFlBQWtCLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFVO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksZUFBZTtJQUQzQixpQkFBVSxFQUFFOztHQUNBLGVBQWUsQ0EwQjNCO0FBMUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWlkIH0gZnJvbSAnLi9tYWlkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1haWRMaXN0U2VydmljZSB7XHJcbiAgICBtYWlkc0xpc3QgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCIxXCIsIFwiTWFyaWFcIikpO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCIyXCIsIFwiRGVzcG9pbmFcIikpO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCIzXCIsIFwiTWVscG9cIikpO1xyXG4gICAgICAgIHRoaXMubWFpZHNMaXN0LnB1c2gobmV3IE1haWQoXCI0XCIsIFwiTGFyaXNhXCIpKTtcclxuICAgICAgICB0aGlzLm1haWRzTGlzdC5wdXNoKG5ldyBNYWlkKFwiNVwiLCBcIk5hZGlhXCIpKTsgICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYWlkc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJvbUlkKGlkOiBzdHJpbmcpOiBNYWlkIHsgICAgXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTWFpZDogTWFpZDsgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICAgICAgdGhpcy5tYWlkc0xpc3QuZm9yRWFjaCgobWFpZDogTWFpZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFpZC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkTWFpZCA9IG1haWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTWFpZDtcclxuICAgIH1cclxufSJdfQ==