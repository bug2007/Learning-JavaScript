const numbers = [3, 4];

numbers.push(5, 6); // [3, 4, 5, 6]
numbers.unshift(1, 2);  // [1, 2, 3, 4, 5, 6]

numbers.splice(2, 0, 'a', 'b'); // 2 = the index before which we wanna insert, 0 = not delete. [1, 2, 'a', 'b', 3, 4, 5, 6]