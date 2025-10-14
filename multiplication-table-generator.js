// Multiplication Table Generator
const readline = require("readline-sync");

const num = parseInt(readline.question("Enter a number: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
