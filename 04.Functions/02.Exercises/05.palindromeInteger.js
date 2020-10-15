function palidromeInteger(array) {

    function isPalindrome(input) {
        let convToString = input.toString();
        let reversed = convToString.split("").reverse().join("");
        return input == reversed;
    }

    for (let i = 0; i < array.length; i++) {
        console.log(isPalindrome(array[i]));
    }
}

palidromeInteger([32, 2, 232, 1010]);