function solve(commandLine) {

    let collection = [];

    commandLine.forEach(line => {
        if (line !== 'print') {
            const [command, word] = line.split(' ');

            if (command === 'add') {
                add(word);
            } else {
                if (collection.includes(word)) {
                    remove(word);
                }
            }
        } else {
            console.log(collection.join(','));
        }
    })

    function add(str) {
        return collection.push(str)
    }
    function remove(str) {
        return collection = collection.filter(word => word !== str);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])