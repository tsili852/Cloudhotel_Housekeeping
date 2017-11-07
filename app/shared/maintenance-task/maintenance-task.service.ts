import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { ConfigurationService } from "../../shared/configuration.service";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";


import { MaintenanceTask } from './maintenance-task';
import { Config } from '../config';

@Injectable()
export class MaintenanceTaskService {
    constructor(private http: Http, private configurationService: ConfigurationService) {}

    getMaintenanceTasks(): Observable<MaintenanceTask[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(Config.apiUrl + 
            'GetMaintenanceTasksAsync?HotelSN=' + this.configurationService.getHotelSN(), { headers: headers })
        .map(response => response.json())        
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}