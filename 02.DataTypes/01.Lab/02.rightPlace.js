function rightPlace(firstWord, char, secondWord) {
    let currentWord = '';

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] == '_') {
            currentWord += char;
        } else {
            currentWord += firstWord[i];
        }
    }

    if (currentWord == secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String');