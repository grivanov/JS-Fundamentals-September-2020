function oddEvenSum(input) {
    let evenSum = 0;
    let oddSum = 0;

    while (input != 0) {
        let current = input % 10;

        if (current % 2 == 0){
            evenSum += current;
        } else {
            oddSum += current;
        }

        input = Math.trunc(input / 10);
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(3495892137259234);