function getDay(year, month, day) {

    const nextDay = new Date(year, month - 1, day - 1);

    const newYear = nextDay.getFullYear(year);
    const newMonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}
getDay(2016, 1, 1)
getDay(2015, 5, 10)