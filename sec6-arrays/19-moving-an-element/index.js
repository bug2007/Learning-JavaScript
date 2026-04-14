function move(array, index, offset) {
    const position = index + offset;

    if (postion >= array.length || postion < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0]; // splicing returns an arr of the items removed
    output.slice(position, 0, element);
    return output;
}