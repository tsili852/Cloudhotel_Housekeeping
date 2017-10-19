export class Room {
    public id: string;
    public name: string;
    public status: Status;
    public bed_status: Status;
    public bathroom_status: Status;
    public towels_status: Status;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = Status.closed;
        this.bed_status = Status.dirty;
        this.bathroom_status = Status.dirty;
        this.towels_status = Status.dirty;
    }
    
}

enum Status {
    closed = 0,
    entered = 1,
    clean = 2,
    dirty = 3    
}