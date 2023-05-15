function calculate(arg) {

    if (typeof arg === 'number') {

        const res = Math.pow(arg, 2) * Math.PI
        
        console.log(res.toFixed(2));

    } else {

        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}
calculate(5)
calculate('str')