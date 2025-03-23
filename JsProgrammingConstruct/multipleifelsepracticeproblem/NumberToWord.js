
const prompt = require("prompt-sync")(); 

const num = parseInt(prompt("Enter a single-digit number (0-9): "), 10);

if (isNaN(num) || num < 0 || num > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
} else {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    console.log(`Number in words: ${words[num]}`);
}
