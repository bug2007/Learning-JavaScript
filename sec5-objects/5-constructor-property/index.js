// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour


// factory function 
function createCircle(radius) {
    return {
    radius,      // same as radius: radius,
    draw() {
        console.log('draw');
    }
    };
}

const circle = createCircle(1);

// constructor function
function Circle(radius) {
    this.radius = radius; // adding new property 'radius' to an empty obj
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
console.log(another.constructor); // will return the function Circle(). references the function that was used to create that object