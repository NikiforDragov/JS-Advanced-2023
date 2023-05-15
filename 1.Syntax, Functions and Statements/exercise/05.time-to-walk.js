function calculateTime(steps, stepsLength, speed) {

    let distanceInMeters = steps * stepsLength ;
    let speedInMetersPerSeconds = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSeconds + rest;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

}
calculateTime(4000, 0.60, 5);
calculateTime(2564, 0.70, 5.5);