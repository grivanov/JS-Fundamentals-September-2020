function amazingNumbers(input) {
    number = input.toString()
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    let result = sum.toString().includes('9');

    console.log(result ? `${input} Amazing? True` : `${input} Amazing? False`);
}

amazingNumbers(999);