// an object has properties

// object literal
let person = {
    name: 'Mosh',
    age: 30
};

// 2 ways to access the property
// dot notation
person.name = 'John';

// bracket notation
person['name'] = 'Mary';

console.log(person);

let selection = 'name';
person[selection] = 'Mary'; //same as writing person['name'] = 'Mary';