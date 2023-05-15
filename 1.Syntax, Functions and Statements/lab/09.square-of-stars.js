function solve(number) {

    if (number) {

        for (let row = 0; row < number; row++) {

            let res = ''

            for (let column = 0; column < number; column++) {

                res += '* ';
            }
            console.log(res);
        }
    } else {
        let result = ['* * * * *','* * * * *','* * * * *','* * * * *','* * * * *']
        console.log(result.join('\n'));
    }
}

solve(1)