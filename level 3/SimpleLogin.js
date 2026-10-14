const input = require("readline-sync");

let username = input.question("Username: ");
let password = input.question("Password: ");

if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("Incorrect username");
}