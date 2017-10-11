import { Injectable } from "@angular/core";

import { Room } from './room';

@Injectable()
export class RoomService {
    constructor() {}

    getAllRooms() {
        let roomsList = [];
        roomsList.push(new Room("1", "101"));
        roomsList.push(new Room("2", "102"));
        roomsList.push(new Room("3", "103"));
        roomsList.push(new Room("4", "104"));
        roomsList.push(new Room("5", "105"));
        roomsList.push(new Room("6", "106"));
        roomsList.push(new Room("7", "107"));
        roomsList.push(new Room("8", "108"));
        roomsList.push(new Room("9", "109"));
        roomsList.push(new Room("10", "201"));
        roomsList.push(new Room("11", "202"));
        roomsList.push(new Room("12", "203"));
        roomsList.push(new Room("13", "204"));
        roomsList.push(new Room("14", "205"));
        roomsList.push(new Room("15", "206"));
        roomsList.push(new Room("16", "207"));
        roomsList.push(new Room("17", "208"));
        roomsList.push(new Room("18", "209"));
        roomsList.push(new Room("19", "301"));
        roomsList.push(new Room("20", "302"));
        roomsList.push(new Room("21", "303"));

        return roomsList;
    }
}