import { OutputDeviceInterface } from "./OutputDeviceInterface.js";

class OutputDevice implements OutputDeviceInterface{
    private output: HTMLDivElement;
    private charSize: number;

    constructor(output: HTMLDivElement, charSize: number) {
        this.output = output;
        this.charSize = charSize;
    }

    show(binary: string): void {
        if (binary === '') {
            return;
        }

        const messageBinary = this.getBinaryMessage(binary);
        let outputText = '';
        for (let i = 0; i < messageBinary.length / this.charSize; i++) {
            let char = messageBinary.substring(this.charSize * i, this.charSize * (i + 1));
            outputText += String.fromCharCode(parseInt(char, 2));
        }

        this.output.innerHTML = outputText;
    }

    private getBinaryMessage(binary: string): string {
        const withoutStartBit = binary.substring(1);
        return withoutStartBit.substring(0, withoutStartBit.length - 3);
    }
}

export { OutputDevice }