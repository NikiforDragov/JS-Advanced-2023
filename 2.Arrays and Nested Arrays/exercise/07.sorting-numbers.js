function sortNumbers(arr) {

    let sorted = arr.sort((a, b) => a - b)
    let resArr = [];

    while (sorted.length > 0) {
        resArr.push(sorted.shift());
        resArr.push(sorted.pop());
    }
    return resArr;
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])