import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";


import { Room } from './room';
import { Config } from '../config';

@Injectable()
export class RoomService {
    constructor(private http: Http) {}

    getAllRooms(): Observable<Room[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(Config.apiUrl + 
            'GetRoomsAndTasksAsync?HotelSN=' + Config.hotelSN, { headers: headers })
        .map(response => response.json())        
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}