function convert(arr) {

    let towns = [];

    for (let i = 1; i < arr.length; i++) {

        const tokens = arr[i].split(/\s*\|\s*/g)

        let town = tokens[1];
        let latitude = Number(tokens[2]).toFixed(2);
        let longitude = Number(tokens[3]).toFixed(2);

        towns.push({
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        });
    }

    console.log(JSON.stringify(towns));
}
convert([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]
)
console.log('-----------');

convert([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]
)