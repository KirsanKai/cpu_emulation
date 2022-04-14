interface InputDeviceInterface {
    isReadyReadMessage(): boolean;
    readMessage(): string;
    getInput(): HTMLInputElement;
}

export { InputDeviceInterface }