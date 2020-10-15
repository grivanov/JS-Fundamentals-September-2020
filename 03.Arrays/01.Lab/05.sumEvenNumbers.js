function sumEven(input) {
    let sum = 0;

    for (i = 0; i < input.length; i++) {
        if (Number(input[i]) % 2 == 0) {
            sum += Number(input[i]);
        }
    }
    console.log(sum);
}

sumEven(['2', '4', '6', '8', '10']);