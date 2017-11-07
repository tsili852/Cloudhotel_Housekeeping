import { Injectable } from "@angular/core";
import * as applicationSettings from "tns-core-modules/application-settings";


@Injectable()
export class ConfigurationService {
    constructor() {}

    getHotelSN(): string {
        return applicationSettings.getString('hotelsn');
    }

    setHotelSN(hotelSN: string) {
        applicationSettings.setString('hotelsn', hotelSN)
    }
}