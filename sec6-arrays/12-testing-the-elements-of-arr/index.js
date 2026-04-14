const numbers = [1, -1, 2, 3];

// checking if every value is positive
const allPositive = numbers.every(function(value) { // false
    return value >= 0;  
});

const atLeastOnePositive = numbers.some(function(value) { // true
    return value >= 0;  
});



