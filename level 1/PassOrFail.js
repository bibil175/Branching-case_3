const input = require("readline-sync");
let nilai = Number(input.question("Masukkan nilai: "));

if (nilai >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}