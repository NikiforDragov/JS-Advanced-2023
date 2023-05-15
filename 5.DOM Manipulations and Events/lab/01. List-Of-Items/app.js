function addItem() {
    const input = document.getElementById('newItemText').value
    const ul = document.getElementById('items')
    let newLi = document.createElement('li')
    newLi.textContent = input;
    ul.appendChild(newLi);
}