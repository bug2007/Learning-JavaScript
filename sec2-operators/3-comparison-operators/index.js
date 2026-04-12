let x = 1;

// Relational operators
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality operators
console.log(x === 1);
console.log(x !== 1);

// Strict Equality operators (compares type + value)
console.log(1 === 1); // true
console.log('1' === 1); // false

// Loose equality operators (compares value)
console.log(1 == 1); // true
console.log('1' == 1); // true. will automatically convert the right value to a string.
console.log(true == 1); // true. will convert the right value to a boolean 'true'