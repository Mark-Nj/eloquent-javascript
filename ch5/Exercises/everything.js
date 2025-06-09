// This program checks if every value of an array returns true when passed to a function
function every(array, func) {
    for(element of array) {
        if (!func(element)) {return false;}
    }
    return true;
}

let array1 = [2, 4, 6, 8];
console.log(every(array1, n => n % 2 == 0));