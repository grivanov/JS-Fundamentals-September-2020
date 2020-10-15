function reverseArray(input) {

    let reversed = [];

    for (i = input.length - 1; i >= 0; i--) {
        reversed.push(input[i])
    }

    console.log(reversed.join(' '));

}

reverseArray(['abc', 'def', 'hig', 'klm', 'nop']);