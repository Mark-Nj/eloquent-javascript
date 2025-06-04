/*
This program creates a chessboard structure using a string of # xters
*/

/* Pseudo Code */
// Declare size; number of lines to be printed
//print x lines where x = size
//Each line should be x characters long
//Line characters are '#' and ' '
let size = 6;
let myString = '#';
let isEven = number => number % 2 == 0;
// -> Nested for loop; Inner loop for generating string for each line
//    Outer loop for lines
for (let i=0; i<size; i++) {
    for (let i=0; i<size-1; i++) {
        if (isEven(myString.length)) {myString += '#';}
        else {myString += ' ';}
        // console.log(`i = ${i}`);
    }
    myString += '\n';
    if (i != size-1) {
        if (isEven(myString.length)) {myString += '#';}
        else {myString += ' ';}
    }
}
console.log(myString);