class Cpu {
    constructor(inputDevice, outputDevice, memory) {
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.memory = memory;
    }
    setEvents() {
        this.inputDevice.getInput().oninput = () => {
            if (!this.inputDevice.isReadyReadMessage()) {
                return;
            }
            const binary = this.inputDevice.readMessage();
            this.memory.write(binary);
            setTimeout(() => this.outputDevice.show(this.memory.read()), 500);
        };
    }
}
export { Cpu };
