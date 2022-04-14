class Memory {
    constructor() {
        this.memory = '';
    }
    write(binMessage) {
        this.memory = binMessage;
    }
    read() {
        return this.memory;
    }
}
export { Memory };
