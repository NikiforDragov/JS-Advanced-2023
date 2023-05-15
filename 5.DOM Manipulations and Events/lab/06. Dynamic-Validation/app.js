function validate() {
    const input = document.getElementById('email');
    const match = /\b([a-z]+)@([a-z]+)\.([a-z]+)\b/g

    input.addEventListener('change', (event) => {
        if (match.exec(input.value)) {
            input.classList= '';
        } else {
            input.className = 'error';
        }
    })
}