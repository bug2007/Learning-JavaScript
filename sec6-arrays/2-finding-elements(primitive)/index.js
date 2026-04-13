const numbers = [1, 2, 3, 2];

numbers.indexOf('1'); // -1
numbers.indexOf(1); // 0
numbers.lastIndexOf(2); // 3

numbers.indexOf(1) !== 1;

// OR
numbers.includes(1);

numbers.indexOf(2, 2); // 2=from index i.e from which index the search will begin. result: 3