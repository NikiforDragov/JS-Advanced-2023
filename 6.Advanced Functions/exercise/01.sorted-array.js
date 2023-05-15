function sort(arr, command) {

    let result = [];

    if (command === 'asc') {
        result = arr.sort((a, b) => a - b);
    } else if (command === 'desc') {
        result = arr.sort((a, b) => b - a);
    }

    return result
}
sort([14, 7, 17, 6, 8], 'asc')