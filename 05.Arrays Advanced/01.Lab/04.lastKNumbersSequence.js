function lastKNumbers(n, k) {
    let result = [1];
    let newElement = 0;
    let index = 0;

    function calculateSumOfLastThreeNumbers(currentIndex) {
        index = currentIndex - k;
        newElement = 0;
        for (let i = 1; i <= k; i++) {
            if (index < 0) {
                newElement += 0;
                index++;
            } else {
                newElement += result[index];
                index++;
            }
        }
    }

    for (let i = 1; i <= n - 1; i++) {
        calculateSumOfLastThreeNumbers(i);
        result.push(newElement);
    }
    console.log(result.join(' '));
}

lastKNumbers(8, 2);
