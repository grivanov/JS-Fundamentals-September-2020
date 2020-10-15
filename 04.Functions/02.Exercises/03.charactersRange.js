function characterRange(charOne, charTwo) {
    let charOneIndex = charOne.charCodeAt();
    let charTwoIndex = charTwo.charCodeAt();
    let result = [];

    let convertCharAppendAray = function (input) {
        let currentChar = String.fromCharCode(input);
        result.push(currentChar);
    }

    for (let i = Math.min(charOneIndex, charTwoIndex) + 1; i < Math.max(charOneIndex, charTwoIndex); i++) {
        convertCharAppendAray(i);
    }

    console.log(result.join(' '));
}

characterRange('C', '#');