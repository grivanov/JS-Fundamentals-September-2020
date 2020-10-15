function loadingBar(number) {
    let progressBar = []

    let progress = number / 10;

    for (let i = 0; i < progress; i++) {
        progressBar.push('%');
    }

    for (let j = progress; j < 10; j++) {
        progressBar.push('.');

    }

    if (number != 100) {
        console.log(`${number}% [${progressBar.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${progressBar.join('')}]`);
    }
}

loadingBar(100);