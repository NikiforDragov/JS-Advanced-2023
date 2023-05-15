function makeObject(arr) {

    let calories = {};

    for (let i = 0; i < arr.length; i += 2) {

        const currentFood = arr[i];
        const currentCalories = arr[i + 1];

        calories[currentFood] = Number(currentCalories);
    }

    console.log(calories);
}
makeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
makeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])