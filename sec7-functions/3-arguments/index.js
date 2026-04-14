function sum(a, b) {
    return a + b;
}

console.log(sum(1)); // result = 1 + undefined = NaN
console.log(sum(1, 2, 3, 4, 5)); // result = 1 + 2 = 3

function sum1(a, b) {  // can just not give the parameters as well
    let total= 0;
    for (let value of arguments)
        total += value;
    return total; // 15
}

console.log(sum1(1, 2, 3, 4, 5));