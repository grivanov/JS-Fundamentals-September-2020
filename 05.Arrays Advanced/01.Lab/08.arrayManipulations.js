function arrayManipulations(array) {
    let workingArray = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                workingArray.push(firstNum);
                break;
            case 'Remove':
                workingArray = workingArray.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                workingArray.splice(firstNum, 1);
                break;
            case 'Insert':
                workingArray.splice(secondNum, 0, firstNum);
                break;
        }
    }
    console.log(workingArray.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);