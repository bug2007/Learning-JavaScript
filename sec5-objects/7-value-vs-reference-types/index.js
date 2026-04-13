// in js, there r 2 categories of types. value/primitive types and reference types
// primitive/value types: number, string, boolear, symbol, undefined, null
// reference types: obj, func, arrays. funcs and arrays both r objects.

let x = 10;
let y = x;

x = 20;

// x and y are independent of each other
console.log(x); // 20
console.log(y); // 10


// BUTTT in case of objects
let x1 = {value: 10};
let y1 = x1;

x1.value = 20;

console.log(x1); // {value: 20}
console.log(y1); // {value: 20}

// conclusion: primitives are copied by their value, objs/reference types are copied by their reference

let number = 10;

function increase(number) {
    number++; // this is indepedent of the outside 'number' variable
}

increase(number);
console.log(number); // result: 10. not 11



let obj = {value: 10};

function increase(obj) {
    obj.value++;  // this obj and the outside obj are pointing to the same thing. any changes we make to one obj will be visible to the other obj
}

increase(obj);
console.log(obj);  // result: {value: 11}
  
