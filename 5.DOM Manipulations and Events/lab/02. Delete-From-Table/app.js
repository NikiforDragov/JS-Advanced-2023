function deleteByEmail() {
    const input = document.getElementsByName('email')[0].value;
    const outputField = document.getElementById('result');
    let isFound = false;
    const rows = Array.from(document.querySelectorAll('tbody tr')).forEach(row => {
        if (row.textContent.includes(input)) {
            row.remove();
            isFound = true;
        }
    })

    if (isFound) {
        outputField.textContent = 'Deleted.';
    } else {
        outputField.textContent = 'Not found.';
    }
}