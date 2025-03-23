
const prompt = require("prompt-sync")(); 

const num = parseInt(prompt("Enter a number (1-7): "), 10);

if (isNaN(num) || num < 1 || num > 7) {
    console.log("Please enter a valid number between 1 and 7.");
} else {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(`The day is: ${days[num - 1]}`);
}
