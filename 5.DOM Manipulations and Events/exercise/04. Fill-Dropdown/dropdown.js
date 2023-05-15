function addItem() {
    const newTextInput = document.getElementById('newItemText');
    const newValueInput = document.getElementById('newItemValue');
    const optionField = document.getElementById('menu');
    const newOption = document.createElement('option');

    newOption.textContent = newTextInput.value;
    newOption.value = newValueInput.value;

    optionField.appendChild(newOption);

    newTextInput.value = '';
    newValueInput.value = '';
}