function sum(n, m) {

    let startNum = Number(n);
    let endNum = Number(m);

    let res = 0;

    for (let i = startNum; i <= endNum; i++) {
        res += i;
    }

    console.log(res);
}

sum('-1', '5')