function vacation(num, type, day) {
    let price = 0;
    if (day == 'Friday') {
        switch (type) {
            case 'Students':
                price = num * 8.45;
                break;
            case 'Business':
                price = num * 10.90;
                break;
            case 'Regular':
                price = num * 15;
                break;
        }
    } else if (day == 'Saturday') {
        switch (type) {
            case 'Students':
                price = num * 9.80;
                break;
            case 'Business':
                price = num * 15.60;
                break;
            case 'Regular':
                price = num * 20;
                break;
        }
    } else if (day = 'Sunday') {
        switch (type) {
            case 'Students':
                price = num * 10.46;
                break;
            case 'Business':
                price = num * 16;
                break;
            case 'Regular':
                price = num * 22.50;
                break;
        }
    }

    if (type == 'Students' && num >= 30) {
        price -= price * 0.15;
    } else if (type == 'Business' && num >= 100) {
        price -= (price / num) * 10;
    } else if (type == 'Regular' && num >= 10 && num <= 20) {
        price -= price * 0.05;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    );