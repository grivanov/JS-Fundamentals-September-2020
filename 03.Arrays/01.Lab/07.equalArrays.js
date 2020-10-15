function equalArrays(array1, array2) {
    let array1ToText = array1.join('');
    let array2ToText = array2.join('');
    let sumArrays = 0;
    let diffIndex;

    // console.log(array1ToText); 

    if (array1ToText == array2ToText) {
        for (i = 0; i < array1.length; i++) {
            sumArrays += Number(array1[i]);
        }
        console.log(`Arrays are identical. Sum: ${sumArrays}`);
    } else {
        for (i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                diffIndex = i;
                break;
            }
        }
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }

}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);