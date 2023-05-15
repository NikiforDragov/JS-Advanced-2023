function calculate(firstNum, secondNum, operator) {

    let res = 0;
    //'+', '-', '*', '/', '%', '**'.
    switch (operator) {
        case '+': res = firstNum + secondNum
            break;
        case '-': res = firstNum - secondNum
            break;
        case '*': res = firstNum * secondNum
            break;
        case '/': res = firstNum / secondNum
            break;
        case '%': res = firstNum % secondNum
            break;
        case '**': res = firstNum ** secondNum
            break;
    }

    console.log(res);
}
calculate(5, 6, '+')
calculate(3, 5.5, '*')