// Program #3: Letter Frequency & First Repeat
// Michaela Pal

const readlineSync3 = require('readline-sync');

let input = readlineSync3.question("Enter a string: ");

let lower = input.toLowerCase();
let freq = {};
let firstRepeat = null;

for (let i = 0; i < lower.length; i++) {
  let char = lower[i];

  if (char >= 'a' && char <= 'z') {
    if (freq[char]) {
      freq[char]++;
      if (!firstRepeat) {
        firstRepeat = char;
      }
    } else {
      freq[char] = 1;
    }
  }
}

console.log("Letter frequencies:");
for (let key in freq) {
  console.log(key + ": " + freq[key]);
}

console.log("First repeated letter: " + firstRepeat);
