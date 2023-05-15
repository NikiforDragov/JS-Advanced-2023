function solve(arr) {

    console.log(sum(arr));
    console.log(inverseSum(arr));
    console.log(arr.join(''));

    function sum(arr) {
        let res = 0;

        for (const num of arr) {
            res += num;
        }
        return res
    }

    function inverseSum(arr) {
        let res = 0;

        for (const num of arr) {
            res += 1 / num
        }
        return res
    }
    
}
solve([1, 2, 3])