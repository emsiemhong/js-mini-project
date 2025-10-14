// Simple Calculator
const readline = require("readline-sync");

const num1 = parseFloat(readline.question("Enter first number: "));
const num2 = parseFloat(readline.question("Enter second number: "));
const operator = readline.question("Choose an operator (+, -, *, /): ");

let result;

if (operator === "+") result = num1 + num2;
else if (operator === "-") result = num1 - num2;
else if (operator === "*") result = num1 * num2;
else if (operator === "/") result = num1 / num2;
else console.log("Invalid operator!");

console.log(`Result: ${result}`);
