/*
This program creates a chessboard structure using a string of # xters
*/

let size = 8;
let myString = '#';
let isEven = number => number % 2 == 0;
// -> Nested for loop; Inner loop for generating string for each line
//    Outer loop for lines
for (let i=0; i<size; i++) {
    for (let i=0; i<size-1; i++) {
        if (isEven(myString.length)) {myString += '#';}
        else {myString += ' ';}
    }
    myString += '\n';
    if (i != size-1) {
        if (isEven(i)) {
            myString += ' ';
    }
    else {myString += '#';}
    }
    
}
console.log(myString);