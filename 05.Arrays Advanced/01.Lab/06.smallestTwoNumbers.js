function smallestTwoNumbers(array) {
    let modifiedArray = [];
    let len = array.length;
    let firstSmallest = array[0];

    for (let i = 1; i < len; i++) {
        if (array[i] < firstSmallest) {
            modifiedArray.push(firstSmallest);
            firstSmallest = array[i];
        } else {
            modifiedArray.push(array[i]);
        }
    }

    let secondSmallest = modifiedArray[0];
    let lenModified = modifiedArray.length;

    for (let i = 1; i < lenModified; i++) {
        if (modifiedArray[i] < secondSmallest) {
            secondSmallest = modifiedArray[i];
        }
    }

    console.log(`${firstSmallest} ${secondSmallest}`);
}


smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

