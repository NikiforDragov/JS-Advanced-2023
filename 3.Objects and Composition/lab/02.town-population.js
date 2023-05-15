function createRegister(arr) {

    let register = {};

    for (const line of arr) {
        let [town, population] = line.split(' <-> ');

        population = Number(population);

        if (!register[town]) {
            register[town] = 0;
        }

        register[town] += population;
    }

    for (const town in register) {
            console.log(`${town} : ${register[town]}`);
    }
}
createRegister(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

createRegister(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)