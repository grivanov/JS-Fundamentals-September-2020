function maxNumber(array) {
    let newArray = []
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j + 1]) {
                count++
            } else {
                break;
            }

            if (count == array.length - 1 - i) {
                count = 0;
                let add = newArray.push(array[i]);
            }
        }
    }
    let add = newArray.push(array[array.length - 1])
    console.log(newArray.join(' '));

}

maxNumber([27, 19, 42, 2, 13, 45, 48]);