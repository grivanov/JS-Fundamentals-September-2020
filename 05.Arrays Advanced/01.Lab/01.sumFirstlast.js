function sumFirstLast(array) {
    let firstElement = Number(array[0]);
    let lastElement = Number(array.pop());

    return firstElement + lastElement;

}

sumFirstLast(['20', '30', '40']);