// This program flattens an array of arrays, i.e., it makes it a
// single array with all the values of the arrays 

let array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],];
console.log(array.reduce((a, b) => a.concat(b)));