function print(arr) {

    const startIndex = Math.floor(arr.length / 2)
    const sorted = arr.sort((a, b) => a - b)
    const biggerHalf = sorted.slice(startIndex)
    
    return biggerHalf
}
print([3, 19, 14, 7, 2, 19, 6])