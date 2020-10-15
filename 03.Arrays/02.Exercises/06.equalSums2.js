function equalSums(input) {
    let sumRight;
    let sumLeft;

    for (let i = 0; i < input.length; i++) {
        sumRight = 0;
        sumLeft = 0;
 
        // calculate ro the right
        for (let j = i; j < input.length; j++) {
            sumRight += input[j];
        }

        // calculate to the left
        for (let k = i; k >= 0; k--) {
            sumLeft += input[k];
        }

        // check if left and right are equal
        if (sumLeft == sumRight) {
            console.log(i);
            break
        } else {
            console.log('no');
        }

    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);