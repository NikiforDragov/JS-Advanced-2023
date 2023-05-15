function extract(content) {
    let para = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/g
    let result = [];

    let matches = para.matchAll(pattern);

    for (const match of matches) {
        result.push(match);
    }

    return result.join('; ')
}