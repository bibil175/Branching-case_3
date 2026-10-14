const input = require("readline-sync");

let a = Number(input.question("Angka pertama: "));
let b = Number(input.question("Angka kedua: "));

if (a > b) {
    console.log(a + "Lebih besar");
} else if (a < b) {
    console.log(b + "Lebih besar");
} else {
    console.log("Both numbers are equel");
}