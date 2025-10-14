// Array Analyzer
const numbers = [10, 25, 7, 30, 12, 45];

let sum = 0;
let max = numbers[0];
let min = numbers[0];

for (let num of numbers) {
  sum += num;
  if (num > max) max = num;
  if (num < min) min = num;
}

const avg = sum / numbers.length;

console.log("Numbers:", numbers);
console.log("Max:", max);
console.log("Min:", min);
console.log("Average:", avg);
