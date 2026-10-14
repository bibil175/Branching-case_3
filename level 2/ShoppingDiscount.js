const input = require("readline-sync");

let total = Number(input.question("Total Pembelian: "));
let diskon;

if (total >= 1000000) {
    diskon = 20;
} else if (total >= 500000) {
    diskon = 10;
} else if (total >= 250000) {
    diskon = 5;
} else {
    diskon = 0;
}

let potongan = total * diskon / 100;
let hargaAkhir = total - potongan;

console.log("Diskon: "+ diskon + "%");
console.log("Potongan: Rp" + potongan);
console.log("Harga akhir: Rp" + hargaAkhir);