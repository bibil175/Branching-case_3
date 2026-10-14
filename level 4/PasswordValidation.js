const input = require("readline-sync");

let password = input.question("Masukkan Password: ");

if(password.length < 8) {
    console.log("Too short");
} else if (password.length <= 11) {
    console.log("Moderate");
} else {
    console.log("Strong");
}

if (/\d/.test(password)) {
    console.log("Contains a numbet");
} else {
    console.log("Does not contain a number");
}