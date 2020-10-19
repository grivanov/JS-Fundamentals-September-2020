function sortArrayTwoCriterias(inputArray) {
    let sortedArray = inputArray.slice();

    function sorting(a, b) {
        if (a.length < b.length) {
            return -1;
        } else {
            return 1;
        }
    }

    sortedArray.sort(sorting);
    
    for (let element of sortedArray) {
        console.log(element);
    }
}

sortArrayTwoCriterias(["alpha", "beta", "gamma"]);
sortArrayTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrayTwoCriterias(["test", "Deny", "omen", "Default"]);
