/* This exercise aims at reversing the order of an array  */

// Method 1
// This method creates a new array with it's element in reverse order to those in the original array
function reverseArray(array) {
    let newArray = [];
    for (let i=array.length; i>0; i--) {
        newArray.push(array.pop())
    }
    return newArray;
}

console.log(reverseArray(['1, 2, 3, 4,', 'a, b, c, d', ]));

//Method 2
// This method modifies an array by reversing its order of elements
function reverseArrayInPlace(array) {
    for (let i =0; i < Math.floor(array.length / 2); i++) {
        let placeholder = array[i];
        array[i] = array[array.length - i-1];
        array[array.length - i-1] = placeholder;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3]));