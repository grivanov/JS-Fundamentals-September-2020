function reorderNumbersBySign(array) {
    let result = [];
    for (let num of array) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num);
        }
    }

    for (let i of result) {
        console.log(i);
    }
}

reorderNumbersBySign([3, -2, 0, -1]);