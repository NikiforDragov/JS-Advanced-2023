function solve(arr,firstStr,secondStr) {

    const startIndex = arr.indexOf(firstStr);
    const endIndex = arr.indexOf(secondStr) + 1;

    const res = arr.slice(startIndex, endIndex)

    return res
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))