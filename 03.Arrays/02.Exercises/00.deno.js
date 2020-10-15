// function demo() {
//     let array1 = [1, 2, 3, 4, 5, 6, 7, 8]; // дължина 8 елемента
//     let array2 = []; // масивът е празен

//     array2 = [].concat(array1);

//     array2.push(100); // зобавям един елемент към array2

//     console.log(array1); // тук трябва array1 да си седи с 8 елемента
//     console.log(array2); // а array2 да е станал с 9 елемента, добавен в края '100'

//     // ОБАЧЕ излиза, че array1 също е придобил '100' накрая.
// }

// demo();

// let func = function (a, b) {
//     console.log(a + b);
// }

// func(3, 3);

function solve(num, power){
    let pow = 1;   // loop exponent times
    for(let i = 0; i < power; i++){
        //multiply the base value
        pow = pow * num;
    }
    console.log(pow);
}

solve(2,8);
