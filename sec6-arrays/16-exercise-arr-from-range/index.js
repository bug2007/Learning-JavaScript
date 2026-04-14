const numbers = arrayFromRange(-5, 5);

function arrayFromRange(min, max) { //  [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    const output = [];
    for (let i=min; i<=max; i++)
        output.push(i);
    return output;
}