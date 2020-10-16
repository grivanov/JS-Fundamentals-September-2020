function firstAndLastNumbers(array) {
    let k = array.shift();
    let firstNumbers = [];
    let lastNumbers = [];

    for (let i = 0; i < k; i++) {
        firstNumbers.push(array[i]);
    }

    for (let i = array.length - k; i < array.length; i++) {
        lastNumbers.push(array[i]);
    }

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));

}

firstAndLastNumbers([3, 6, 7, 8, 9])