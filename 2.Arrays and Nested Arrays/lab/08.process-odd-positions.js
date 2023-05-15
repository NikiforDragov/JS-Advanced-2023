function processPositions(arr) {

    const reversed = arr
        .filter((num, i) => i % 2 === 1)
        .map(num => num * 2)
        .reverse()
        .join(' ')

    return reversed
}
processPositions([10, 15, 20, 25])