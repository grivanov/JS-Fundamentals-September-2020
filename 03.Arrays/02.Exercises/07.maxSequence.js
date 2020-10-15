function sequence(array) {
    let foundSequence = [];
    let currentSequence = [];


    for (let i = 0; i < array.length; i++) {
        currentSequence = [array[i]];

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] == array[i]) {
                currentSequence.push(array[j]);
            } else {
                break;
            }
        }

        if (foundSequence.length < currentSequence.length) {
            foundSequence = currentSequence;
        }
    }

    console.log(foundSequence.join(' '));

}

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);