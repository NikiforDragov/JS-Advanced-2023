function solve() {

    const args = Array.from(arguments);
    const types = [];
    const counter = {};

    for (const arg of args) {
        const type = typeof arg
        types.push({ [type]: arg })

        if (!counter[type]) {
            counter[type] = 0;
        }

        counter[type]++;
    }

    for (const obj of types) {
        const [key, value] = Object.entries(obj);
        console.log(`${key[0]}: ${key[1]}`);
    }
    // for (const key in counter) {
    //     console.log(`${key} = ${counter[key]}`);
    // }
    const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]).forEach(element => console.log(`${element[0]} = ${element[1]}`));
}
solve({ name: 'bob' }, 3.333, 9.999)