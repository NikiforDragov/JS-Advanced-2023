function modifyObj(obj) {

    if (obj.dizziness) {

        const waterToDrink = (obj.weight * 0.1) * obj.experience;

        obj.levelOfHydrated += waterToDrink;

        return obj;
    } else {
        return obj;
    }
}

console.log(modifyObj(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
))