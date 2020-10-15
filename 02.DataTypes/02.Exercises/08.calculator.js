function calculator(num1, oper, num2) {
    let result;

    if (oper == '+') {
        result = num1 + num2;
    } else if (oper == '-') {
        result = num1 - num2;
    } else if (oper == '*') {
        result = num1 * num2;
    } else if (oper == '/' || oper == ':') {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
}

calculator(5,
    '+',
    10
    )