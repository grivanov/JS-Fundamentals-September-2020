function sortArrayTwoCriterias(inputArray) {
    let sortedArray = inputArray.slice();
    let equalElements = [];
    let newArr = [];

    sortedArray.sort((a, b) => a.length - b.length);
    console.log(sortedArray.join(' '));

    for (let i = 0; i <= sortedArray.length; i++) {

        if (sortedArray.length == 1) {
            newArr.push(sortedArray[0]);
        } else {
            let length = sortedArray[0].length;

            for (let j = i + 1; j < sortedArray.length; j++) {
                if (sortedArray[j].length > length) {
                    let equalElements = sortedArray.slice(0, j).sort();
                    for (let el of equalElements) {
                        newArr.push(el);
                    }
                    sortedArray.splice(0, (j));
                }
            }

        }



    }

    // for (let i = 0; i < sortedArray.length; i++) {
    //     if (sortedArray[i].length == sortedArray[i + 1]) {
    //         let tempArray = sortedArray.slice(i, i + 2);
    //         tempArray.sort((a, b) => a.localeCompare(b));
    //         console.log(tempArray.join(' '));

    //     }
    // }

    // sortedArray.sort((a, b) => a.localeCompare(b));




    console.log(newArr.join(' '));

}

// sortArrayTwoCriterias(["alpha", "beta", "gamma"]);
// sortArrayTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrayTwoCriterias(["test", "Deny", "omen", "Default", "Asfault"]);
