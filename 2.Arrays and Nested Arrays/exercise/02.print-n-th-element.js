function printNthElement(arr, step) {

    let resArr = [];

    for (let i = 0; i <= arr.length; i += step) {
        resArr.push(arr[i])
    }

    return resArr;
}
printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)