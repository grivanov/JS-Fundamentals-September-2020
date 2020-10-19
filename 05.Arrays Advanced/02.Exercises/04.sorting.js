function sorting(inputArray) {
    let resultArray = [];
    let sortedArray = inputArray.slice();

    function findBiggest(arr) {
        arr.sort((a, b) => b - a);
        return arr;
    }

    function findSmallest(arr) {
        arr.sort((a, b) => a - b);
        return arr;
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            sortedArray = findBiggest(sortedArray);
            resultArray.push(sortedArray[0]);
            sortedArray.shift();
        } else {
            sortedArray = findSmallest(sortedArray);
            resultArray.push(sortedArray[0]);
            sortedArray.shift();
        }
    }
    
    console.log(resultArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);