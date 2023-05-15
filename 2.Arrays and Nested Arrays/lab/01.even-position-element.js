function findEvenPosition(arr) {

    let res = ''

    for (let index = 0; index < arr.length; index++) {

        if (index % 2 === 0) {
            res += arr[index] + ' ';
        }
    }
    console.log(res);
}
findEvenPosition(['20', '30', '40', '50', '60'])