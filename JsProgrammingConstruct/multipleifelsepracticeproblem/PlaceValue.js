
const prompt = require("prompt-sync")(); 

// Take input from the user
const num = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "), 10);

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Million"
};

if (placeValues[num]) {
    console.log(`The place value is: ${placeValues[num]}`);
} else {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
}
