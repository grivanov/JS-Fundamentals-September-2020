function solve(input) {

    //  let newArr = [];
    let sumInput = 0;
    let sumNewArr = 0;

    for (let el of input) {
        sumInput += el;
    }

    for (let i = 0; i < input.length; i++) {

        if (input[i] % 2 == 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
    }

    for (let el of input) {
        sumNewArr += el;
    }

    console.log(input);
    console.log(sumInput);
    console.log(sumNewArr);

}

solve([5, 15, 23, 56, 35]);