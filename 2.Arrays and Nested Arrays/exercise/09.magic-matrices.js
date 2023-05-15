function checkMatrix(arr) {
    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentRol = arr[i].join('');
        
        for(let j = 0; j < currentRol.length; j++) {

            sumRows += Number(currentRol[j]);
            sumCols += Number(currentRol[0]);
        }
    }

    console.log(sumRows);
    console.log(sumCols);
}
checkMatrix([
    [3, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]
)