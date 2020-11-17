function storeProvision(stockArray, deliveryArray) {
    let products = {};

    for (let i = 0; i < stockArray.length; i += 2) {
        let prop = stockArray[i];
        let value = Number(stockArray[i + 1]);
        products[prop] = value;
    }

    for (let i = 0; i < deliveryArray.length; i += 2) {
        let searchProp = deliveryArray[i];
        let stockProducts = Object.keys(products);
        let newProduct = true;

        for (let j = 0; j < stockProducts.length; j++) {
            if (searchProp == stockProducts[j]) {
                products[searchProp] = products[searchProp] + Number(deliveryArray[i + 1]);
                newProduct = false;
                break;
            }
        }

        if (newProduct == true) {
            products[searchProp] = Number(deliveryArray[i + 1]);
        }
    }

    for (let [key, value] of Object.entries(products)) {
        console.log(`${key} -> ${value}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);