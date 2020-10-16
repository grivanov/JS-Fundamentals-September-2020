function arrayManipulations(array) {
    let workingArray = array.shift().split(' ');

    for (let el of array) {
        if (el.includes('Add')) {
            let tempArray = el.split('');
            let number = tempArray.pop();
            workingArray.push(number);
        } else if (el.includes('RemoveAt')) {
            let tempArray = el.split('');
            let number = tempArray.pop();
            workingArray.splice(number, 1);
        } else if (el.includes('Remove')) {
            let tempArray = el.split('');
            let number = tempArray.pop();
            let index = Number(workingArray.filter((x, i) => x == number));
            workingArray.splice(index, 1);
        } else if (el.includes('Insert')) {
            let tempArray = el.split(' ');
            let index = tempArray.pop();
            let number = tempArray.pop();
            workingArray.splice(index, 0, number)
        }
    }

    console.log(workingArray.join(' '));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);