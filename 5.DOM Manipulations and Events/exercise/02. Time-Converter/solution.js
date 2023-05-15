function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn').addEventListener('click', convert);
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click', convert);
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', convert);
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        const parentElmContent = event.target.parentElement.textContent;

        if (parentElmContent.includes('Days')) {
            days = Number(daysInput.value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;

        } else if (parentElmContent.includes('Hours')) {
            hours = Number(hoursInput.value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parentElmContent.includes('Minutes')) {
            minutes = Number(minutesInput.value);
            seconds = minutes * 60;
            hours = minutes / 60;
            days = hours / 24;
        } else if (parentElmContent.includes('Seconds')) {
            seconds = Number(secondsInput.value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }
}