/*
This program finds the sum of a range of values using functions
*/

function range(start, end, step=1) {
    let array = [ ];
    if (step > 0) {
        for (let i=start; i <= end; i+=step) {
            array.push(i);
        } 
    }
    else if (step < 0) {
        for (let i=start; i >= end; i+=step) {
            array.push(i);
        } 
    }
    else {return "Error! can't have a step of zero";}
    return array;
}


function sum(array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
}
console.log(sum(range(10, 1, -1)));
console.log(range(10, 1, -1));