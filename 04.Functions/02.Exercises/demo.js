// function checkSymbols(a) {
//     let forbiddenCharacterCodes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126]

//     for (let i = 0; i < a.length; i++) {
//         let code = a.charCodeAt(i);
//         for (let j = 0; j < forbiddenCharacterCodes.length; j++) {
//             if (code === forbiddenCharacterCodes[j]) {
//                 console.log('Password must consist only of letters and digits');
//                 return false;
//                 break;
//             }
//         }
//     }
// }

// checkSymbols('My-Pass123')

let numbers = [1, 2, 2, 4];

let numbers2 = numbers.slice();

console.log(numbers2);   