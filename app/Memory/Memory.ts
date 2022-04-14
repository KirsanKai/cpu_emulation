import { MemoryInterface } from "./MemoryInterface.js";

class Memory implements MemoryInterface {
    private memory: string = '';

    write(binMessage: string): void {
        this.memory = binMessage;
    }
    read(): string {
        return this.memory;
    }
}

export { Memory }