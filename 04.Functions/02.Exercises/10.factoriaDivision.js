function factorialDivision(a, b) {
    let calculateFactorial = function (num) {
        let result = 1;
        for (let i = num; i > 1; i--) {
            result *= i;
        }
        return result;
    }

    let factorialA = calculateFactorial(a);
    let factorialB = calculateFactorial(b)

    let division = factorialA / factorialB;

    console.log(division.toFixed(2))
}

factorialDivision(6, 2);