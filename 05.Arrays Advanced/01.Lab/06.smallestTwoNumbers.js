function smallestTwoNumbers(array) {
    let result = [];
    array.sort((a, b) => a - b);
    result = array.slice(0,2);

    console.log(result.join(' '));
}


smallestTwoNumbers([30, 15, 50, 5]);

