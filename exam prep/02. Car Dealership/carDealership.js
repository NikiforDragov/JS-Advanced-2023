class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        // if (model === '' || horsepower === '' || price === '' || mileage === '') {
        //     throw new Error('Invalid input!')
        // }

        if (typeof model !== 'string' || model == '') {
            throw new Error('Invalid input!');
        }

        if (!Number.isInteger(horsepower) || horsepower < 0) {
            throw new Error('Invalid input!')
        }

        if (price < 0 || mileage < 0 || typeof price != 'number' || typeof mileage != 'number') {
            throw new Error('Invalid input!')
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMilage) {
        const indexOfCar = this.availableCars.findIndex(c => c.model === model);
        const carForSale = this.availableCars[indexOfCar]

        if (carForSale === undefined) {
            throw new Error(`${model} was not found!`);
        }

        const diff = carForSale.mileage - desiredMilage;
        let soldPrice = 0;

        if (diff > 40000) {
            soldPrice = carForSale.price * 0.9;
        } else if (diff > 0 && diff <= 40000) {
            soldPrice = carForSale.price * 0.95;
        } else {
            soldPrice = carForSale.price;
        }

        this.soldCars.push({
            model,
            horsepower: carForSale.horsepower,
            soldPrice
        })

        this.availableCars.splice(indexOfCar, 1)

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length < 1) {
            return'There are no available cars'
        }

        const result = ['-Available cars:'];

        this.availableCars.forEach(currentCar => {
            result.push(`---${currentCar.model} - ${currentCar.horsepower} HP - ${currentCar.mileage.toFixed(2)} km - ${currentCar.price.toFixed(2)}$`)
        });

        return result.join('\n');
    }

    salesReport(criteria) {
        let sorted = undefined;
        const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`
        ]
        if (criteria === 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria === 'model') {
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        } else {
            throw new Error('Invalid criteria!')
        }

        for (const car of sorted) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }

        return result.join('\n')
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
dealership.sellCar('Audi A3', 300000);
console.log(dealership.salesReport('model'));


