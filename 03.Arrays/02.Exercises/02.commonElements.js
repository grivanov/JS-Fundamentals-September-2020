function common(inp1, inp2) {
    for (let el1 of inp1) {
        for (let el2 of inp2) {
            if (el1 === el2) {
                console.log(el1);
            }
        }
    }
}

common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);