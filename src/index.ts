import { Nand } from "./parts/nand";

let nand = new Nand(1, 1);

console.log('The typescript app is loaded...');

document.write(`Our first nand result is: ${nand.calculate()}`);