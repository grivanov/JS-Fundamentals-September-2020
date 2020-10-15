function merge(inp1, inp2) {
    let array = [];

    for (let i = 0; i < inp1.length; i++) {
        if (i % 2 == 0) {
            array.push(Number(inp1[i]) + Number(inp2[i]));
        } else {
             array.push(inp1[i] + inp2[i])
        }
    }

    console.log(array.join(' - '));
}

merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);