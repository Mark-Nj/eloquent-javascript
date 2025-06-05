/*
    This program is a function that returns the lesser number of the arguments
 */

let min = (num1, num2) => {
    if (num1 > num2) return num2;
    else return num1;
}

console.log(`Minimum of 1 and 2 = ${min(1, 2)}`);
console.log(`Minimum of 5 and 10 = ${min(5, 10)}`);
console.log(`Minimum of 1000 and 100 = ${min(1000, 100)}`);