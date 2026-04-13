const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

// OR
numbers. forEach(function(number) {
    console.log(number);
});


// OR
numbers.forEach((number, index) => console.log(index, number));