function equalSums(input) {
    let index = 0;
    let leftSum = 0;
    let rightSum;

    while (leftSum != rightSum) {

        leftSum = 0;
        for (let i = 0; i < index; i++) {
            leftSum += input[i];
        }

        rightSum = 0;
        for (let i = index + 1; i < input.length; i++) {
            rightSum += input[i];
        }

        if (leftSum == rightSum) {
            console.log(index);
        } else if (index + 1 < input.length) {
            index++;
        } else {
            break;
        }

    }

    if (leftSum != rightSum) {
        console.log("no");
    }

}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);