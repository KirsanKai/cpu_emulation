interface MemoryInterface {
    write(binMessage: string): void
    read(): string
}

export { MemoryInterface }