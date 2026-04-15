// Program #4: Broken Code Debugger
// Michaela Pal

const readlineSync4 = require('readline-sync');

let start = parseInt(readlineSync4.question("Enter start number: ")); // Fixed: converted input to integer
let end = parseInt(readlineSync4.question("Enter end number: ")); // Fixed: converted input to integer

let evenCount = 0; // Fixed: renamed variable for clarity

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) { // Fixed: used modulus operator to check even numbers
    evenCount += 1; // Fixed: corrected increment operator (+= instead of =+)
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + evenCount);
