function processOddNumbers(array) {
    let result = [];
    let arrayLength = array.length;
    let newElement = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 != 0) {
            newElement = array[i] * 2;
            result.unshift(newElement);
        }
    }
    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);