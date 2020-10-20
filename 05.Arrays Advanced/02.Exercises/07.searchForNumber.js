function searchForNumber(array1, array2) {
    let takeElements = array2[0];
    let removeElements = array2[1];
    let searchElement = array2[2];
    let workingArray = [];
    let searchOccurence = 0;

    workingArray = array1.slice(0, (takeElements));

    workingArray.splice(0, removeElements);

    for (let el of workingArray) {
        if (el == searchElement) {
            searchOccurence++;
        }
    }

    console.log(`Number ${searchElement} occurs ${searchOccurence} times.`);

}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);