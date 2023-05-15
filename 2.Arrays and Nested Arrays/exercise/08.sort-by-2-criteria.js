function sort(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArr.join('\n'));
}
sort(['alpha',
    'beta',
    'gamma']
)
sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)

sort(['test',
    'Deny',
    'omen',
    'Default']
)