// This program comprises examples from 'Eloquent JavaScript' Chapter 5 on 'Higher Order Function
import SCRIPTS from "./scripts.js";

// Filtering an Array
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// console.log(filter(SCRIPTS, script => script.living));

// Note *--> filter in a built in array method
console.log(SCRIPTS.filter(script => script.direction == 'ttb'));

