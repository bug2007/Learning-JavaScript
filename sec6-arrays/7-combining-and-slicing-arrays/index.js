const first = [1, 2, 3];    
const second = [4, 5, 6];

const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]. if 'first' and 'second' were objs, they wud be copied by reference to the 'combined'

const slice = combined.slice(2, 4); // start index, end index. result = [3, 4]

const numbers = [1, 2, 3, 4, 5, 6];
numbers.slice(2); // [3, 4, 5, 6]




