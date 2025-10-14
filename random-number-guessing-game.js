// Number Guessing Game
const readline = require("readline-sync");

const secret = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

do {
  guess = parseInt(readline.question("Guess a number between 1 and 10: "));
  attempts++;

  if (guess < secret) console.log("Too low!");
  else if (guess > secret) console.log("Too high!");
  else console.log(`🎉 Correct! The number was ${secret}. Attempts: ${attempts}`);
} while (guess !== secret);
