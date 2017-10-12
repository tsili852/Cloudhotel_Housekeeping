export class Room {
    public id: string;
    public name: string;
    public status: Status;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = Status.closed;
    }
    
}

enum Status {
    closed = 0,
    entered = 1,
    clean = 2,
    dirty = 3    
}