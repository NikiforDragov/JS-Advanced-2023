function addAndRemove(arr) {

    let resArr = [];
    let counter = 1;

    for (const command of arr) {

        if (command === 'add') {
            resArr.push(counter++);
        } else if (command === 'remove') {
            resArr.pop(counter++)
        }
    }

    if (!resArr.length) {
        console.log('Empty');
    } else {
        console.log(resArr.join('\n'));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])