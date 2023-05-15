function assembleCar({ model, power, color, carriage, wheelsize }) {

    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }

    let engine = {};

    if (power <= 90) {
        engine = engines.small;
    } else if (power <= 120) {
        engine = engines.normal;
    } else {
        engine = engines.monster;
    }

    let currentWheelsize = wheelsize;

    if (currentWheelsize % 2 === 0) {
        currentWheelsize--;
    }

    currentWheelsize = new Array(4).fill(currentWheelsize);


    const car = {
        model,
        engine,
        carriage: { type: carriage, color },
        wheels: currentWheelsize,
    }

    return car
}
assembleCar(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
)

assembleCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)