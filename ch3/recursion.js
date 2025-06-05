/* Using a recursive function to determine if a number is even or odd */
function isEven(number) {
    if (number == 0) return 'Even';
    else if (number == 1) return 'Odd';
    else return isEven(number -= 2);
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(11));
console.log(isEven(20));