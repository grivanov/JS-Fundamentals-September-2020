function rotation(array, number) {
    for (let i = 1; i <= number; i++) {
        let temp = array[0];
        for (let j = 0; j < array.length; j++) {
            array[j] = array[j + 1];
        }
        let remove = array.pop();
        let insert = array.push(temp);
    }

    console.log(array.join(' '));
}

rotation([2, 4, 15, 31], 5);   