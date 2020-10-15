function condense(input) {
    let condArray = [];

    if (input.length == 1) {
        console.log(input[0]);
    } else {

        while (input.length != 2) {
            condArray.length = input.length - 1;
            for (let i = 0; i < input.length; i++) {
                condArray[i] = Number(input[i]) + Number(input[i + 1]);
            }
            input = condArray;
        }

        console.log(condArray[0])

    }

}

condense([2, 10, 3]);