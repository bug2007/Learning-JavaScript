function sum(...args) { // cant have a parameter after the rest operator
    console.log(args); // [1, 2, 3, 4, 5]
    return args.reduce((a, b) => a + b); // 15
}

console.log(sum(1, 2, 3, 4, 5))

function sum1(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum1(0.1, 20, 30));
