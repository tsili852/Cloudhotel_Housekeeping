import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";

import { Repair } from "./repair";
import { Config } from "../config";

@Injectable()
export class RoomRepairsService {
    constructor(private http: Http) {}

    getRepairsByRoom(roomId: number, daysBefore: number): Observable<Repair[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(Config.apiUrl + 
            'GetRepairsForRoomAsync?HotelSN=' + Config.hotelSN + '&RoomID=' + roomId + '&daysBefore=' + daysBefore, { headers: headers })
            .map(response => response.json())
            .catch(error => this.handleErrors(error));
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}