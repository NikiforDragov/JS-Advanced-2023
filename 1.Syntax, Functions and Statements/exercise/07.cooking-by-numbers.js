function solve(...args) {

    // let number = Number(args[0])

    // for (const arg of args) {
    //     switch (arg) {
    //         case 'chop': number /= 2
    //             console.log(number);
    //             break;
    //         case 'dice': number = Math.sqrt(number);
    //             console.log(number);
    //             break;
    //         case 'spice': number += 1;
    //             console.log(number);
    //             break;
    //         case 'bake': number *= 3;
    //             console.log(number);
    //             break;
    //         case 'fillet': number *= 0.80;
    //             console.log(number);
    //             break;
    //     }
    // }
    let number = Number(args.shift())

    const cooker = {
        chop() { number /= 2 },
        dice() { number = Math.sqrt(number) },
        spice() { number++ },
        bake() { number *= 3 },
        fillet() { number *= 0.80 },
    }

    for (const command of args) {
        cooker[command]();
        console.log(number);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')