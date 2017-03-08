export class Nand {
    inputA: number;
    inputB: number;
    constructor(a: number, b: number) {
        this.inputA = a;
        this.inputB = b;
    }
    calculate() {
        if (this.inputA == 1 && this.inputB == 1) {
            return 0;
        } else {
            return 1;
        }
    }
}