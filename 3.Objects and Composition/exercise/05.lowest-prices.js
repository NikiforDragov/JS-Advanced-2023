function findLowestPrice(data) {

    let productsList = {};


    for (let line of data) {

        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!productsList.hasOwnProperty(product)) {
            productsList[product] = {
                town,
                price,
            }
        } else {
            if (price < productsList[product].price) {
                productsList[product] = {
                    town,
                    price,
                }
            }
        }
    }

    for (let product in productsList) {
        const price = productsList[product].price;
        const town = productsList[product].town


        console.log(`${product} -> ${price} (${town})`);
    }
}
findLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)