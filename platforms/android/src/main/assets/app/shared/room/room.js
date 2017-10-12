"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room = (function () {
    function Room(id, name) {
        this.id = id;
        this.name = name;
        this.status = Status.closed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLGNBQVksRUFBVSxFQUFFLElBQVk7UUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFJO0FBYWpCLElBQUssTUFLSjtBQUxELFdBQUssTUFBTTtJQUNQLHVDQUFVLENBQUE7SUFDVix5Q0FBVyxDQUFBO0lBQ1gscUNBQVMsQ0FBQTtJQUNULHFDQUFTLENBQUE7QUFDYixDQUFDLEVBTEksTUFBTSxLQUFOLE1BQU0sUUFLViIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb29tIHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdGF0dXM6IFN0YXR1cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IFN0YXR1cy5jbG9zZWQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZW51bSBTdGF0dXMge1xyXG4gICAgY2xvc2VkID0gMCxcclxuICAgIGVudGVyZWQgPSAxLFxyXG4gICAgY2xlYW4gPSAyLFxyXG4gICAgZGlydHkgPSAzICAgIFxyXG59Il19