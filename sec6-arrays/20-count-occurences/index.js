function countOccurences(array, searchElement) {
    let count = 0;
    for (let element of array) 
        if (element === searchElement)
            count++;
    return count;    
}

// OR
function countOccurences1(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}
