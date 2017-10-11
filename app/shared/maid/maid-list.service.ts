import { Injectable } from "@angular/core";

import { Maid } from './maid';

@Injectable()
export class MaidListService {
    maidsList = [];
    constructor() {}

    load() {
        
        this.maidsList.push(new Maid("1", "Maria"));
        this.maidsList.push(new Maid("2", "Despoina"));
        this.maidsList.push(new Maid("3", "Melpo"));
        this.maidsList.push(new Maid("4", "Larisa"));
        this.maidsList.push(new Maid("5", "Nadia"));        

        return this.maidsList;
    }

    getFromId(id: string): Maid {    
        let selectedMaid: Maid;    
        this.load();
        this.maidsList.forEach((maid: Maid) => {
            if (maid.id === id) {
                selectedMaid = maid;
            }
        });

        return selectedMaid;
    }
}