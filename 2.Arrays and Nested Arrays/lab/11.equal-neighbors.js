function findPairs(matrix) {

    let equalNeighborsCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    equalNeighborsCount++;
                }
            }
            if (col < matrix[row].length - 1) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    equalNeighborsCount++;
                }
            }
        }
    }
    return equalNeighborsCount;
}
findPairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]
)