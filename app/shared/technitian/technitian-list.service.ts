import { Injectable } from "@angular/core";

import { Technitian } from './technitian';

@Injectable()
export class TechnitianListService {
    technitiansList = [];
    constructor() {}

    load() {
        this.technitiansList.push(new Technitian("1", "Makis"));
        this.technitiansList.push(new Technitian("2", "Takis"));
        this.technitiansList.push(new Technitian("3", "Lakis"));       
        
        return this.technitiansList;
    }

    getFromId(id: string): Technitian {    
        let selectedTechnitian: Technitian;    
        this.load();
        this.technitiansList.forEach((technitian: Technitian) => {
            if (technitian.id === id) {
                selectedTechnitian = technitian;
            }
        });

        return selectedTechnitian;
    }
}