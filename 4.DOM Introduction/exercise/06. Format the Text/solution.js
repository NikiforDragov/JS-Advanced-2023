function solve() {
  const inputStr = document.getElementById('input').value;
  const output = document.getElementById('output');

  let input = inputStr.split('.').filter((p) => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
    let arr = [];

    for (let k = 0; k < 3; k++) {
      if (input[i + k]) {
        arr.push(input[i + k])
      }
    }

    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}