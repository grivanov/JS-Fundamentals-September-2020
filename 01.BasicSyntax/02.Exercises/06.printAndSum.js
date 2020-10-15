function solve(start, end) {
    let sum = 0;
    let string = '';
    for (let i = start; i <= end; i++) {
        string = string + i + ' ';
        sum += i;
    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}

solve(50, 60);