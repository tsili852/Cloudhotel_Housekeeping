import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";

import { Technitian } from "./technitian";
import { Config } from "../config";

@Injectable()
export class TechnitianListService {
    constructor(private http: Http) {}

    getTechnitians(): Observable<Technitian[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(Config.apiUrl + 
            'GetTechnicians?HotelSN=' + Config.hotelSN, { headers: headers })
            .map(response => response.json())
            .catch(error => this.handleErrors(error));
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}