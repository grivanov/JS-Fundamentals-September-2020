function solve(input) {
    let newArr = [];
    let sumInput = 0;
    let sumNewArr = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] % 2 == 0) {
            let test = newArr.push(input[i] + i);
        } else {
            let test = newArr.push(input[i] - i);
        }
    }

    for (let el of input) {
        sumInput += el;
    }

    for (let el of newArr) {
        sumNewArr += el;
    }

    console.log(newArr);
    console.log(sumInput);
    console.log(sumNewArr);

}

solve([5, 15, 23, 56, 35]);