function attachGradientEvents() {
    const gradient = document.getElementById('gradient-box');

    gradient.addEventListener('mousemove', mouseOver)
    gradient.addEventListener('mouseout', mouseOut)

    function mouseOver(event) {
        let x = event.offsetX;
        let percentage = Math.floor(x / 300 * 100)

        document.getElementById('result').textContent = percentage + '%';
    }

    function mouseOut(event) {
        document.getElementById('result').textContent = '';
    }
}