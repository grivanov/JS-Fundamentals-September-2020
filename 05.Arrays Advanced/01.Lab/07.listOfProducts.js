function listOfProducts(array) {
    num = 1;
    array.sort();

    for (let i of array) {
        console.log(`${num}.${i}`);
        num++;
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples", "tomatoes", "apples"])