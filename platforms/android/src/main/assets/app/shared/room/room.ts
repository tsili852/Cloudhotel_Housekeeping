export class Room {
    public id: string;
    public name: string;
    public status: Status;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = Status.dirty;
    }
}

enum Status {
    clean = "Clean",
    dirty = "Dirty"
}