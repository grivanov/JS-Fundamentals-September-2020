function sortArrayTwoCriterias(inputArray) {
    let sortedArray = inputArray.slice();
    let equalElements = [];


    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i].length == sortedArray[i + 1].length) {
            equalElements.push(sortedArray[i], sortedArray[i + 1]);
            let index = equalElements.indexOf(equalElements[i], 0)
            equalElements.splice(index, 1);
            equalElements.sort((a, b) => a.localeCompare(b));
        } else {
            equalElements.push(sortedArray[i + 1]);
            let index = equalElements.indexOf(equalElements[i], 0)
            equalElements.splice(index, 1);
        }
        console.log(equalElements);
    }


    console.log(sortedArray.join(' '));

}

// sortArrayTwoCriterias(["alpha", "beta", "gamma"]);
// sortArrayTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrayTwoCriterias(["test", "Deny", "omen", "Default"]);
