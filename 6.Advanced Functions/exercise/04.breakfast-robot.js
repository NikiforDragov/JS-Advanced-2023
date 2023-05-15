function solution() {

    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function manager(str) {
        let [command, action, quantity] = str.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            storage[action] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            let recipe = library[action];

            for (const el in recipe) {
                if (recipe[el] * quantity > storage[el]) {
                    return `Error: not enough ${el} in stock`
                }
            }
            for (const el in recipe) {
                storage[el] -= recipe[el] * quantity;
            }
            return 'Success'
        } else if (command === 'report') {
            let res = [];
            for (const el in storage) {
                res.push(`${el}=${storage[el]}`)
            }
            return res.join(' ')
        }
    }

    return manager
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report"))



