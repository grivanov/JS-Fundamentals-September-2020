function login(arg) {
    let user = arg[0];
    let pass = user.split("").reverse().join("");

    for (let i = 0; i <= 3; i++) {
        let input = arg[i + 1];
        if (input != pass && i == 3) {
            console.log(`User ${user} blocked!`);
        } else if (input != pass) {
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${user} logged in.`);
            break;
        }
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);