class InputDevice {
    constructor(input, charSize) {
        this.input = input;
        this.charSize = charSize;
    }
    getInput() {
        return this.input;
    }
    isReadyReadMessage() {
        return true;
    }
    readMessage() {
        const message = this.input.value;
        const startBit = '1';
        const binaryMessage = this.textToBinary(message);
        const parityBit = this.getParityBit(binaryMessage);
        const stopBit = '11';
        return startBit + binaryMessage + parityBit + stopBit;
    }
    textToBinary(text) {
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
    getParityBit(binaryText) {
        let parity = 0;
        for (let i = 0; i < binaryText.length; i++) {
            if (binaryText.charAt(i) !== '1') {
                continue;
            }
            parity++;
        }
        return parity % 2 === 0 ? '0' : '1';
    }
}
export { InputDevice };
