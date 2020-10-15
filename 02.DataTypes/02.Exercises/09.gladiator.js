function gradiator(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    let sumExpense = 0;

    for (let i = 1; i <= lostCount; i++) {

        if (i % 2 == 0 && i % 3 == 0) {
            brokenHelmet++;
            brokenSword++;
            brokenShield++;
        } else if (i % 2 == 0) {
            brokenHelmet++;
        } else if (i % 3 == 0) {
            brokenSword++;
        }
    }

    for (let j = 0; j <= brokenShield; j++) {
        if (j % 2 == 0 && j != 0) {
            brokenArmor++;
        }
    }

    sumExpense = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice);

    console.log(`Gladiator expenses: ${sumExpense.toFixed(2)} aureus`);
}

gradiator(23,
    12.50,
    21.50,
    40,
    200    
);