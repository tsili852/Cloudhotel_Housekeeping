"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room = (function () {
    function Room(id, name) {
        this.id = id;
        this.name = name;
        this.status = Status.closed;
        this.bed_status = Status.dirty;
        this.bathroom_status = Status.dirty;
        this.towels_status = Status.dirty;
    }
    return Room;
}());
exports.Room = Room;
var Status;
(function (Status) {
    Status[Status["closed"] = 0] = "closed";
    Status[Status["entered"] = 1] = "entered";
    Status[Status["clean"] = 2] = "clean";
    Status[Status["dirty"] = 3] = "dirty";
})(Status || (Status = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVFJLGNBQVksRUFBVSxFQUFFLElBQVk7UUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLG9CQUFJO0FBbUJqQixJQUFLLE1BS0o7QUFMRCxXQUFLLE1BQU07SUFDUCx1Q0FBVSxDQUFBO0lBQ1YseUNBQVcsQ0FBQTtJQUNYLHFDQUFTLENBQUE7SUFDVCxxQ0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxJLE1BQU0sS0FBTixNQUFNLFFBS1YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUm9vbSB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiBTdGF0dXM7XHJcbiAgICBwdWJsaWMgYmVkX3N0YXR1czogU3RhdHVzO1xyXG4gICAgcHVibGljIGJhdGhyb29tX3N0YXR1czogU3RhdHVzO1xyXG4gICAgcHVibGljIHRvd2Vsc19zdGF0dXM6IFN0YXR1cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFN0YXR1cy5jbG9zZWQ7XHJcbiAgICAgICAgdGhpcy5iZWRfc3RhdHVzID0gU3RhdHVzLmRpcnR5O1xyXG4gICAgICAgIHRoaXMuYmF0aHJvb21fc3RhdHVzID0gU3RhdHVzLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG93ZWxzX3N0YXR1cyA9IFN0YXR1cy5kaXJ0eTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5lbnVtIFN0YXR1cyB7XHJcbiAgICBjbG9zZWQgPSAwLFxyXG4gICAgZW50ZXJlZCA9IDEsXHJcbiAgICBjbGVhbiA9IDIsXHJcbiAgICBkaXJ0eSA9IDMgICAgXHJcbn0iXX0=