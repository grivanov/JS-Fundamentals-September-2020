function passwordValidator(input) {

    function checkLength(a) {
        if (a.length >= 6 && a.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkDigits(a) {
        let foundDigits = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == 0 || a[i] == 1 || a[i] == 2 ||
                a[i] == 3 || a[i] == 4 || a[i] == 5 ||
                a[i] == 6 || a[i] == 7 || a[i] == 8 ||
                a[i] == 9) {
                foundDigits++;
            }
        }

        if (foundDigits >= 2) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }

    function checkSymbols(a) {
        let forbiddenCharacterCodes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126]

        for (let i = 0; i < a.length; i++) {
            let code = a.charCodeAt(i);
            let foundForbidden = 0;
            for (let j = 0; j < forbiddenCharacterCodes.length; j++) {
                if (code == forbiddenCharacterCodes[j]) {
                    foundForbidden++
                    if (foundForbidden > 0) {
                        console.log('Password must consist only of letters and digits');
                        return false;
                    }
                }
            }
        }

        return true;
    }

    let resultLength = checkLength(input);
    let resultSymbols = checkSymbols(input);
    let resultDigits = checkDigits(input);

    if (resultLength && resultSymbols && resultDigits) {
        console.log('Password is valid');
    }
}

passwordValidator('M-yPass123');