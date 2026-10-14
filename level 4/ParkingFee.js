const input = require("readline-sync");

let jam = Number(input.question("Lama parkir (jam): "));
let biaya;

if (jam <= 0) {
    biaya = 0;
} else if (jam === 1) {
    biaya = 5000;
} else {
    biaya = 50000 + (jam - 1) * 3000;
}

if (biaya > 20000) {
    biaya = 20000;
}

console.log("Biaya parkir:Rp " + biaya);