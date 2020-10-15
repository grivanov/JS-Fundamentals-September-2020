function validateGrade(grade) {

    function failed() {
        console.log('Fail (2)');
    }
    function displayGrade(number) {
        if (number >= 3 && number < 3.5) {
            console.log(`Poor (${number.toFixed(2)})`);
        } else if (number >= 3.5 && number < 4.5) {
            console.log(`Good (${number.toFixed(2)})`);
        } else if (number >= 4.5 && number < 5.5) {
            console.log(`Very good (${number.toFixed(2)})`);
        } else {
            console.log(`Excellent (${number.toFixed(2)})`);
        }
    }

    if (grade < 3) {
        failed();
    } else {
        displayGrade(grade);
    }
}

validateGrade(5.5);