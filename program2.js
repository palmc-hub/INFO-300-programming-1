// Program #2: Fibonacci Filter
// Michaela Pal

const readlineSync2 = require('readline-sync');

let count = parseInt(readlineSync2.question("Enter number of Fibonacci numbers: "));

let fib = [0, 1];

for (let i = 2; i < count; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

let fullSequence = fib.slice(0, count);

let oddFib = [];

for (let i = 0; i < fullSequence.length; i++) {
  if (fullSequence[i] % 2 !== 0) {
    oddFib.push(fullSequence[i]);
  }
}

console.log("Full sequence: [" + fullSequence.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");
