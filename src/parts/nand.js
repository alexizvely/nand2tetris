var Nand = (function () {
    function Nand(a, b) {
        this.inputA = a;
        this.inputB = b;
    }
    Nand.prototype.calculate = function () {
        if (this.inputA == 1 && this.inputB == 1) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Nand;
}());
