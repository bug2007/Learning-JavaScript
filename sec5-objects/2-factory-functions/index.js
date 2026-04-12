// factory function create objects

function createCircle(radius) {
    return {
    radius,      // same as radius: radius,
    draw() {
        console.log('draw');
    }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// we can also use constructor functions to create objections. coming up next.