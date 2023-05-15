function findBiggestElm(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        row => row.forEach(
            col => biggestNum = Math.max(biggestNum, col)));

    return biggestNum
}
findBiggestElm([[20, 50, 10],
[8, 33, 145]]
)