function signCheck(a, b, c) {
    let result = '';

    if ((a >= 0 && b >= 0 && c >= 0) ||
        (a < 0 && b < 0 && c >= 0) ||
        (a >= 0 && b < 0 && c < 0) ||
        (a < 0 && b >= 0 && c < 0) ||
        (a < 0 && b >= 0 && c >= 0)) {
        result = 'Positive';
    } else {
        result = 'Negative'
    }

    console.log(result);
}

signCheck(-1, 0, 1);
