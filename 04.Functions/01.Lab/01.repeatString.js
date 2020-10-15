function repeatString(string, repeat) {

    let repeatedString = ''

    for (let i = 0; i < repeat; i++) {
        repeatedString += string;
    }

    return repeatedString;

}

repeatString('abc', 3);
repeatString('String', 2);