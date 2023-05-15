function findDevisor(firstNum,secondNum) {

    let devisor = 0;

    for(let i = 1; i <=9 ;i++) {
        
        if(firstNum % i === 0 && secondNum % i === 0) {
            devisor = i;
        }
    }

    console.log(devisor);
}

findDevisor(15, 5)
findDevisor(2154, 458)