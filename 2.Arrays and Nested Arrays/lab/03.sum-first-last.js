function calculate(arr) {

    let firstElement = Number(arr[0]);
    let lastElement = Number(arr.pop());

    console.log(firstElement + lastElement);
}
calculate(['20'])