// for in loop (use to iterate over properites of object)

const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]); // name Mosh. age 30
}

const colors = ['red', 'green', 'blue'];

for (let index in colors)   // but to iterate over arrays, use for of loop
    console.log(index, colors[index]);   // 0 red. 1 green. 2 blue.


// for of loop (use to iterate over elements in an array)
for (let color of colors)
    console.log(color);   // red green blue