function perfectNumber(number) {
    let divisors = [];
    let sumDivisors = 0;

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisors.push(i);
        }
    }

    for (let i = 0; i < divisors.length; i++) {
        sumDivisors += divisors[i];
    }

    if (sumDivisors == number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }

}

perfectNumber(1236498);