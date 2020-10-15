function specialNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        i = i.toString()
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
            sum = 0;
        } else {
            console.log(`${i} -> False`);
            sum = 0;
        }
    }

}

specialNumbers(15);