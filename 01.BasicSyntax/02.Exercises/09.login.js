function login(arg) {
    let index = 0;
    let user = arg[index];
    let pass = '';
    index++
    let currentInput = arg[index];
    let tries = 1;

    for (let i = user.length - 1; i >= 0; i--) {
        pass += user[i]
    }

    while (currentInput == pass || tries < 4) {
        currentInput = arg[index];
        if (currentInput == pass) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }

        index++;
        tries++; 
    }

    if (tries = 4 && currentInput != pass) {
        console.log(`User ${user} blocked!`);
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);