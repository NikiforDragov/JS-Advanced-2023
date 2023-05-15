function calculate(type, weight, price) {

    let res = 0;

    let weightInKg = weight / 1000;

    res = weightInKg * price;

    console.log(`I need $${res.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

calculate('orange', 2500, 1.80)