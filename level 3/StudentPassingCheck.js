const input = require("readline-sync");

let nilai = Number(input.question("Masukkan nilai: "));
let kehadiran = Number(input.question("Masukkan (%): "));

if (nilai >= 60 && kehadiran >= 75) {
    console.log("Pass");
} else {
    console.log("Fail");
}