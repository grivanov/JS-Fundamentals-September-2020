function evenOddSubstraction(input) {
    let sumEven = 0;
    let sumOdd = 0;
    let diff = 0;

    for (i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            sumEven += Number(input[i]);
        } else {
            sumOdd += Number(input[i]);
        }
    }
    diff = sumEven - sumOdd;
    console.log(diff);
}

evenOddSubstraction([3, 5, 7, 9]);