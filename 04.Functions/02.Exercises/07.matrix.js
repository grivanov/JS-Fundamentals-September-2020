function matrix(number) {

    function matrixRow(input) {
        let result = [];
        for (let i = 1; i <= input; i++) {
            result.push(input);
        }
        return result.join(' ');
    }

    for (let i = 1; i <= number; i++) {
        console.log(matrixRow(number));
    }
}

matrix(7)