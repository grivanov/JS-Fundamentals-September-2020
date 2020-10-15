function fuelMoney(distance, people, price) {
    let neededFuel = (distance / 100 * 7) + (people * 0.100);
    let neededMoney = price * neededFuel;

    console.log(`Needed money for that trip is ${neededMoney} lv.`);
}

fuelMoney(260, 9, 2.49);