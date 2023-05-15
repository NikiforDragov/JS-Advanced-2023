function addItem() {
    const input = document.querySelector('#newItemText');
    const listItem = document.createElement('li');
    document.getElementById('items').appendChild(listItem);

    listItem.textContent = input.value;

    const deleteBtn = document.createElement('a');

    deleteBtn.href = '#'
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', () => listItem.remove());

    listItem.appendChild(deleteBtn)

}