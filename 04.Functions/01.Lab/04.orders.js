function calculateTotalOrderSum(product, quantity) {

    let calculation = function(price, piece) {
        console.log((price * piece).toFixed(2));;
    }
        switch (product) {
            case 'coffee':
                calculation(1.5, quantity)
                break;
            case 'water':
                calculation(1, quantity)
                break;
            case 'coke':
                calculation(1.4, quantity);
                break;
            case 'snacks':
                calculation(2, quantity);
                break;
        }
    }

    calculateTotalOrderSum('water', 5);