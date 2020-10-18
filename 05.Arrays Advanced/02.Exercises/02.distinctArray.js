function distinctArray(array) {
    let result = []

    function compareElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let duplicateFoundIndex = arr.indexOf(arr[i], i + 1);
            while (duplicateFoundIndex != -1) {
                arr.splice(duplicateFoundIndex, 1);
                duplicateFoundIndex = arr.indexOf(arr[i], i + 1)
            }
        }

        return arr;
    }
    result = compareElements(array);
    console.log(result.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);