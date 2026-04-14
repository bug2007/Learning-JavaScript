function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element)
    return output;    
}