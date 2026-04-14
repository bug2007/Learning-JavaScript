const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers)
    sum += n;

const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  // reduce has 2 arguments: the callback function and the 0 (the initial value of accumulator)


// OR
const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);  // accumulator's initial value will be the first element of the array by default