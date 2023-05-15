function makeRegister(heroes) {

    let res = [];

    for (let hero of heroes) {

        let [name, level, ...items] = hero.split(' / ')

        level = Number(level)

        if (items.length) {
            items = items[0].split(', ')
        }

        res.push({ name, level, items });
    }

    console.log(JSON.stringify(res));
}
makeRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)