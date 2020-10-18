function train(arrayStrings) {
    let wagons = arrayStrings.shift().split(" ").map(Number);
    let maxNumberOfPassengers = Number(arrayStrings.shift());

    for (let el of arrayStrings) {

        if (el.includes('Add')) {
            let [task, number] = el.split(' ');
            wagons.push(number);
        } else {
            let newPassengers = Number(el);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + newPassengers <= maxNumberOfPassengers) {
                    wagons[i] = wagons[i] + newPassengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);