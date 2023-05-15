function solve(arr) {

    let res = [];

    for (const num of arr) {
        
        if(num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    console.log(res.join('\n'));
}
solve([7, -2, 8, 9])