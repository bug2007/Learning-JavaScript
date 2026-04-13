const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


for (let key in circle) 
    console.log(key, circle[key]);

for (let key of circle)  // error: objs are not iterable
    console.log(key, circle[key]);

for (let key of Object.keys(circle)) // Object.keys(circle) will return arr which u can iterate. Object is a built-in constructor function. It's the function used to create an obj when u say const x = {value: 10}. since Object is a func and funcs are objects, it has the method 'keys()' among other methods 
    console.log(key); // radius draw

for (let entry of Object.entries(circle)) 
    console.log(entry); // ['radius', 1] ['draw', f]

if ('radius' in circle) console.log('yes') // yes