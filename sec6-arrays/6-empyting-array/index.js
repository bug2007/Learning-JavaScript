let numbers = [1, 2, 3, 4];

// solution 1
numbers = []; // but the old array is still in the memory but if there are no other references to it, it will removed by the garbage collector. so, this solution works only if u dont have multiple references to the old array

// solution 2
numbers.length = 0; // original array will be gone as well. will become []

// solution 3
numbers.splice(0, numbers.length);

// solution 4
while (numbers.length>0)
    numbers.pop();

