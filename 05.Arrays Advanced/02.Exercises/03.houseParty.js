function houseParty(input) {
    let guestList = [];

    for (let el of input) {
        let [personName] = el.split(' ');

        if (!el.includes('not')) {
            if (guestList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            } else {
                guestList.push(personName);
            }

        } else {
            if (guestList.includes(personName)) {
                let guestIndex = guestList.indexOf(personName, 0);
                guestList.splice(guestIndex, 1);
            } else {
                console.log(`${personName} is not in the list!`);
            }
        }
    }

    for (let el of guestList) {
        console.log(el);
    }

}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);