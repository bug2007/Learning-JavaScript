const numbers = [2, 3, 1];

numbers.sort(); // [1, 2, 3]

numbers.reverse(); // [3, 2, 1]



const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

courses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

