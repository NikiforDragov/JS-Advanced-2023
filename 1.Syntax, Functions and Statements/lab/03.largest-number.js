function solve(firstNum,secondNum,thirdNum) {

    let result = firstNum;

    if(secondNum > firstNum && secondNum > thirdNum) {
        result = secondNum
    } else if(thirdNum >secondNum && thirdNum > firstNum) {
        result = thirdNum
    }

    console.log(`The largest number is ${result}.`);
}
solve(45, 33, 16)