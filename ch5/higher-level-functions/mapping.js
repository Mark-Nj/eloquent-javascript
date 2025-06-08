// Mapping --> Transforms an array by applying a function to all of its elements 
// and building a new arry from the returned values.
import SCRIPTS from "./scripts.js";


function mapping(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl');
// console.log(mapping(rtlScripts, s => s.name));

// map is a standard array method
console.log(rtlScripts.map(s => s.name));
