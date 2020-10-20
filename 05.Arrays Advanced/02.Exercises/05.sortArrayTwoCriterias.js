function sortArrayTwoCriterias(inputArray) {
    let sortedArray = inputArray.slice();
    let equalElements = [];
    let newArr = [];
    let index = 0;

    sortedArray.sort((a, b) => a.length - b.length);

    while (sortedArray.length != 0) {
        equalElements = []; // empty the temp array
        equalElements.push(sortedArray[0]); // get first element of the origin array into the temp array

        for (let j = index + 1; j < sortedArray.length; j++) { // check forward until the end of the origin array

            if (sortedArray[index].length == sortedArray[j].length) { // current element and first origin  element have same length
                equalElements.push(sortedArray[j]); // push the current element into the temp array
            } else {
                break; 
            }
        }

        sortedArray.splice(0, equalElements.length); // remove the found equal elements from the origin array

        equalElements.sort(); // sort the equal elements

        for (let el of equalElements) {
            newArr.push(el) // push to the result array
        }

    }
    for (let el of newArr) {
        console.log(el);
    }

}

sortArrayTwoCriterias(["alpha", "beta", "gamma"]);
sortArrayTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrayTwoCriterias(["test", "Deny", "omen", "Default", "Asfault"]);
