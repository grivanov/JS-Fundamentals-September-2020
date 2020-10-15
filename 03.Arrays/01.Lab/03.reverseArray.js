function reverse(num, array) {
    let reversedArray = [];

    for (i = num; i > 0; i--) {
        reversedArray.push(array[i - 1])
    }

    console.log(reversedArray.join(' '));

}

reverse(2, [66, 43, 75, 89, 47]);