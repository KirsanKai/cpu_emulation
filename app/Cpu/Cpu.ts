import { InputDeviceInterface } from "../InputDevice/InputDeviceInteface.js";
import { MemoryInterface } from "../Memory/MemoryInterface.js";
import { OutputDeviceInterface } from "../OutputDevice/OutputDeviceInterface.js";
import { CpuInterface } from "./CpuInterface.js";

class Cpu implements CpuInterface {
    private inputDevice: InputDeviceInterface;
    private outputDevice: OutputDeviceInterface;
    private memory: MemoryInterface;

    constructor(
        inputDevice: InputDeviceInterface, 
        outputDevice: OutputDeviceInterface, 
        memory: MemoryInterface
    ) {
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.memory = memory;
    }

    public setEvents(): void {
        this.inputDevice.getInput().oninput = () => {
            if (!this.inputDevice.isReadyReadMessage()) {
                return;
            }

            const binary = this.inputDevice.readMessage();
            this.memory.write(binary);

            setTimeout(() => this.outputDevice.show(this.memory.read()), 500);
        }
    }
}

export { Cpu }