function print(weekday) {

    let res = 0;

    switch (weekday) {
        case 'Monday': res = 1
            break;
        case 'Tuesday': res = 2
            break;
        case 'Wednesday': res = 3
            break;
        case 'Thursday': res = 4
            break;
        case 'Friday': res = 5
            break;
        case 'Saturday': res = 6
            break;
        case 'Sunday': res = 7
            break;
        default: return 'error';
    }

    console.log(res);

}
print('Monda')