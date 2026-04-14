const numbers = [1, -1, 2, 3];

const filteredArr = numbers.filter(n => n >= 0);     // [1, 2, 3]
     


const items = filteredArr.map(n => '<li' + n + '</li');  // ['<li>1</li>', '<li>2</li>', '<li>3</li>']

const html = <ul> + items.join('') + </ul>;


const items2 = filteredArr.map(n => ({value: n})); // [{value: 1}, {value: 2}, {value: 3}]


// u can do chaining
// const items = numbers.filter(n => n >= 0).map(n => ({value: n})).filter(obj => obj.value > 1.map(obj => obj.value); // [2, 3]



