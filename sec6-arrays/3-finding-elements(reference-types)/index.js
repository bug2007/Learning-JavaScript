const courses = [
    {id: 1, name: 'a'},
    {id: 1, name: 'a'}
];

const course = courses.find(function(course) {
    return course.name=='a'; // returns the first element, in the array, that matches this criteria. if u use findIndex, u get the index of the element found, otherwise 0. 
});

console.log(course); // {id: 1, name: 'a'}. if it doesnt exist, result = undefined