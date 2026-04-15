// Program #1: Detect Prime Gaps
// Michaela Pal

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter a positive number (<=1000): "));

let primes = [];

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}

console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

let maxGap = 0;
let gapStart = 0;
let gapEnd = 0;
let totalGap = 0;

for (let i = 1; i < primes.length; i++) {
  let gap = primes[i] - primes[i - 1];
  totalGap += gap;

  if (gap > maxGap) {
    maxGap = gap;
    gapStart = primes[i - 1];
    gapEnd = primes[i];
  }
}

let avgGap = (totalGap / (primes.length - 1)).toFixed(2);

console.log("The largest gap is " + maxGap + ", between " + gapStart + " and " + gapEnd);
console.log("The average gap is " + avgGap);

