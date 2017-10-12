import { Injectable } from "@angular/core";

import { Technitian } from './technitian';

@Injectable()
export class TechnitianListService {
    constructor() {}

    load() {
        let technitiansList = [];
        technitiansList.push(new Technitian("1", "Makis"));
        technitiansList.push(new Technitian("2", "Takis"));
        technitiansList.push(new Technitian("3", "Lakis"));       

        return technitiansList;
    }
}