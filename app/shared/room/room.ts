import { Repair } from '../repair/repair';

export interface Room {
    RoomID: number;
    Number: string;
    RoomType: string;
    Arrival: Date;
    Departure: Date;
    Customer: string;
    Agent: string;
    Repairs: Repair[];
    
    status: Status;
    bed_status: Status;
    bathroom_status: Status;
    towels_status: Status;    
}

enum Status {
    closed = 0,
    entered = 1,
    clean = 2,
    dirty = 3    
}