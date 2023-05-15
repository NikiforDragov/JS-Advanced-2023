function diagonalSum(matrix) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i]
        secondDiagonalSum += matrix[i][matrix.length - i - 1]
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}
diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)
//99 25