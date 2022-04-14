class OutputDevice {
    constructor(output, charSize) {
        this.output = output;
        this.charSize = charSize;
    }
    show(binary) {
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
    getBinaryMessage(binary) {
        const withoutStartBit = binary.substring(1);
        return withoutStartBit.substring(0, withoutStartBit.length - 3);
    }
}
export { OutputDevice };
