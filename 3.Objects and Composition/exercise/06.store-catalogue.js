function printCatalogue(arr) {

    let sorted = arr.sort((a, b) => a.localeCompare(b))

    let obj = {}

    let firstLetter = '';

    for (let line of sorted) {

        if (firstLetter !== line[0]) {
            firstLetter = line[0];
            obj[firstLetter] = [];
        }

        obj[firstLetter].push(line);
    }

    for (let letter in obj) {
        console.log(letter);

        for (let line of obj[letter]) {
            const [productName, productPrice] = line.split(' : ')

            console.log(`  ${productName}: ${productPrice}`);
        }
    }
}
// printCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// )

printCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)