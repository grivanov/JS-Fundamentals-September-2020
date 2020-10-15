function sortNumbers(num1, num2, num3) {
    let maxPosition = Math.max(num1, num2, num3);
    let middlePosition;
    let minPosition = Math.min(num1, num2, num3);

    if (num1 < maxPosition && num1 > minPosition) {
        middlePosition = num1;
    } else if (num2 < maxPosition && num2 > minPosition) {
        middlePosition = num2;
    } else if (num3 < maxPosition && num3 > minPosition) {
        middlePosition = num3;
    } else if (num1 == minPosition) {
        middlePosition = minPosition;
    } else if (num2 == minPosition) {
        middlePosition = minPosition;
    } else if (num3 == minPosition) {
        middlePosition = minPosition;
    } else {
        middlePosition = maxPosition;
    }
    console.log(maxPosition);
    console.log(middlePosition);
    console.log(minPosition);
}


sortNumbers(2, 0, 0);


