// 3 type of logical operators in js: or, and, not

// logical AND
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// logical OR
let highIncome1 = false;
let goodCreditScore1 = true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log(eligibleForLoan);

// logical NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


// With non-booleans
// Falsy (false values)
// undefined, null, 0, false,'', NaN (not a number)

// anything that is not Falsy -> Truthy
false || 1 || 2; // 1. stops the search at 1 (short-circuiting)
false || 'Mosh'; // Mosh
'red' || 'blue'; // red

// real world example
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);