function simpleCalculator(numOne, numTwo, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
            console.log(divide(numOne, numTwo));;
            break;
        case 'add':
            console.log(add(numOne, numTwo));;
            break;
        case 'subtract':
            console.log(subtract(numOne, numTwo));;
            break;
    }
}

simpleCalculator(5, 5, 'multiply');