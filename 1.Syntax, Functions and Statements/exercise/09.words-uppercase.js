function solve(str) {

    const pattern = /[a-zA-Z0-9]+/g;

    let res = str.match(pattern).map(x => x.toUpperCase()).join(', ')
    
    return res
}
solve(',')