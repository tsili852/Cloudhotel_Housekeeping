import { Injectable } from "@angular/core";

import { Maid } from './maid';

@Injectable()
export class MaidListService {
    constructor() {}

    load() {
        let maidsList = [];
        maidsList.push(new Maid("1", "Maria"));
        maidsList.push(new Maid("2", "Despoina"));
        maidsList.push(new Maid("3", "Melpo"));
        maidsList.push(new Maid("4", "Larisa"));
        maidsList.push(new Maid("5", "Nadia"));        

        return maidsList;
    }
}