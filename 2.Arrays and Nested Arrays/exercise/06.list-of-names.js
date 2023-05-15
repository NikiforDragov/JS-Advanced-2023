function sortNames(arr) {

    arr = arr.sort((a, b) => a.localeCompare(b)).forEach((elm, index) => {
        console.log(`${index + 1}.${elm}`);
    });
}
sortNames(["John", "Bob", "Christina", "Ema"])
