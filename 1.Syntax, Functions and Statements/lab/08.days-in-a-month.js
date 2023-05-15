function solve(month,year) {

    const now = new Date()

    now.setFullYear(year)
    now.setMonth(month)
    now.setDate(0);

    console.log(now.getDate());
}
solve(1, 2012)
solve(2, 2021)