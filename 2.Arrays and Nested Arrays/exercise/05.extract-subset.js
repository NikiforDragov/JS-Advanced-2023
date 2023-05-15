function extractSubset(arr) {

    let currentBiggest = arr.shift();
    let resArr = [currentBiggest]

    for (const number of arr) {
        if (number >= currentBiggest) {
            resArr.push(number)
            currentBiggest = number
        }
    }

    
    return resArr;
}
extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
