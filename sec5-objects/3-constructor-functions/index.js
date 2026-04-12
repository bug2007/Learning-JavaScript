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


// constructor function
function Circle(radius) {
    this.radius = radius; // adding new property 'radius' to an empty obj
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);