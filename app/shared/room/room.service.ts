import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { ConfigurationService } from "../../shared/configuration.service";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";


import { Room } from './room';
import { Config } from '../config';

@Injectable()
export class RoomService {
    constructor(private http: Http, private configurationService: ConfigurationService) {}

    getAllRooms(daysBefore: number): Observable<Room[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(Config.apiUrl + 
            'GetRoomsAndTasksAsync?HotelSN=' + this.configurationService.getHotelSN() + '&daysBefore=' + daysBefore, { headers: headers })
        .map(response => response.json())        
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}