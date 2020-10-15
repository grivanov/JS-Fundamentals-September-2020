function sumFirstLast(array) {
    let firstElement = array[0];
    let lastElement = array.pop();

    return firstElement + lastElement;

}

sumFirstLast(['20', '30', '40']);