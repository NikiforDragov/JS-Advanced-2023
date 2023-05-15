function solve(number) {

    let numToStr = number.toString();
    let isSame = false;
    let firstNum = numToStr[0]

    for(let i = 0; i< numToStr.length; i++) {
        
        if(firstNum === numToStr[i]) {
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }

    let sum = 0;

    for (const num of numToStr) {
        sum += Number(num)
    }

    console.log(isSame);
    console.log(sum);
}
solve(2222222)
solve(1234)