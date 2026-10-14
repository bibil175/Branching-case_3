const input = require("readline-sync");
let angka = Number(input.question("Masukkan angka: "));

if (angka > 0) {
    console.log("Positive");
}else if (angka < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}