import { Cpu } from "./app/Cpu/Cpu.js";
import { InputDevice } from "./app/InputDevice/InputDevice.js";
import { Memory } from "./app/Memory/Memory.js";
import { OutputDevice } from "./app/OutputDevice/OutputDevice.js";

const output: HTMLDivElement = <HTMLDivElement>document.getElementById('output')
const input: HTMLInputElement = <HTMLInputElement>document.getElementById('input');

const charSize = 16;

const memory = new Memory();
const inputDevice = new InputDevice(input, charSize);
const outputDevice = new OutputDevice(output, charSize);

const cpu = new Cpu(inputDevice, outputDevice, memory);
cpu.setEvents();