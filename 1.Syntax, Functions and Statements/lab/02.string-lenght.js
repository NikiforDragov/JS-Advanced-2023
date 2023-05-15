function solve(...params) {

    let sum = 0;

    for (const word of params) {
        sum += word.length;
    }

    const avg = Math.floor(sum / 3)

    console.log(sum);
    console.log(avg);
}
solve('chocolate', 'ice cream', 'cake')
