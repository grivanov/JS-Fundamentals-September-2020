function smallest(a, b, c) {
    let smallestNum = Number.MAX_SAFE_INTEGER;

    function findSmallest(x) {
        if (x < smallestNum) {
            smallestNum = x;
        }
    }

    findSmallest(a);
    findSmallest(b);
    findSmallest(c);

    console.log(smallestNum);

}

smallest(1, 2, 3);