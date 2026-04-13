const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// console.log(another); // {radius: 1, draw: f}

// a better way to clone an object (and combine multiple objects into one)
const another = Object.assign({}, circle); // Object.assign() is a built-in method that copies all properties from one or more source objects to a target object. It takes two or more arguments: the first argument is the target object, and the subsequent arguments are the source objects. It returns the target object after copying the properties.

console.log(another); // {radius: 1, draw: f}

const another1 = Object.assign({color: 'yellow'}, circle); // you can also add new properties while cloning

console.log(another1); // {color: 'yellow', radius: 1, draw: f}

// another way: spread operator
const another2 = {...circle}; // takes all the properties and methods of the 'circle' object and puts them in betweent the curly braces