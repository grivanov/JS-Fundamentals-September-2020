function magicSum(array, number) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];

            if (sum === number) {
                console.log(`${array[i]} ${array[j]}`);
            } 
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27
); 