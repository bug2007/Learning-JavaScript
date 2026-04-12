// we can add new properties to an obj so they r dynamic

const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);