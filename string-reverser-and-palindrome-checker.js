// String Reverser & Palindrome Checker
const readline = require("readline-sync");

const text = readline.question("Enter a word: ");
const reversed = text.split("").reverse().join("");

console.log("Reversed:", reversed);

if (text.toLowerCase() === reversed.toLowerCase())
  console.log("It's a palindrome!");
else
  console.log("Not a palindrome.");
