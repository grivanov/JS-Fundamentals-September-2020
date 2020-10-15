function condenseArrayToNumber(numbersInput){
    let numbers = numbersInput;
    
while(numbers.length > 1){
    let condensed = [];
 
    for(let i = 0; i < numbers.length - 1; i++){
        
      condensed.push(numbers[i] + numbers[i + 1]); //равно е на:
      //  condensed[i] = (numbers[i] + numbers[i + 1]); 
    }
    numbers = condensed;
   
}

console.log(numbers[0]);
   
}
condenseArrayToNumber([2, 10, 3]);