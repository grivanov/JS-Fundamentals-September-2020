function triangle(num) {
    let string = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            string += i + ' ';
        }
        console.log(string);
        string = '';
    }
}

triangle(6)