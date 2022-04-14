import { InputDeviceInterface } from "./InputDeviceInteface.js";

class InputDevice implements InputDeviceInterface {
    private input: HTMLInputElement;
    private charSize: Number;

    constructor(input: HTMLInputElement, charSize: number) {
        this.input = input;
        this.charSize = charSize;
    }

    getInput(): HTMLInputElement {
        return this.input;
    }

    public isReadyReadMessage(): boolean {
        return true;
    }

    public readMessage(): string {
        const message = this.input.value;

        const startBit = '1';
        const binaryMessage = this.textToBinary(message);
        const parityBit = this.getParityBit(binaryMessage);
        const stopBit = '11';

        return startBit + binaryMessage + parityBit + stopBit;
    }

    private textToBinary(text: string): string {
        let textBinary = '';
        for (let i = 0; i < text.length; i++) {
            let char = text.charCodeAt(i).toString(2);
            while (char.length < this.charSize) {
                char = '0' + char;
            }

            textBinary += char;
        }

        return textBinary;
    }

    private getParityBit(binaryText: string): string {
        let parity = 0
        for (let i = 0; i < binaryText.length; i++) {
            if (binaryText.charAt(i) !== '1') {
                continue;
            }

            parity++;
        }

        return parity % 2 === 0 ? '0' : '1';
    }
}

export { InputDevice }