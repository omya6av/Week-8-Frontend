
const prompt = require("prompt-sync")(); 

// Take three numbers as input
const a = parseFloat(prompt("Enter the first number (a): "));
const b = parseFloat(prompt("Enter the second number (b): "));
const c = parseFloat(prompt("Enter the third number (c): "));

const operation1 = a + b * c;
const operation2 = a % b + c;
const operation3 = c + a / b;
const operation4 = a * b + c;

// Store results in an array
const results = [operation1, operation2, operation3, operation4];

const maxValue = Math.max(...results);
const minValue = Math.min(...results);

// Print results
console.log(`Results of operations:`);
console.log(`1. a + b * c = ${operation1}`);
console.log(`2. a % b + c = ${operation2}`);
console.log(`3. c + a / b = ${operation3}`);
console.log(`4. a * b + c = ${operation4}`);
console.log(`\nMaximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);
