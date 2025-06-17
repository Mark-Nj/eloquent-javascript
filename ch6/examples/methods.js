// This example shows method declarations and the 'this' binding
/**
 A method is a property with a function value
 */
function speak(line) {
    console.log(`${this.type} rabbit says '${line}!'`);
}

let whiteRabbit = {type: 'White', speak};
whiteRabbit.speak('Oh! my fur and whiskers');

// Demonstrating that arrow functions do not bind their own 'this' but can
// see the 'this' binding of the scope around them
let finder = {
    find(array) {
        return array.some(v => v === this.value)
    },
    value: 5
}

console.log(finder.find([4, 5]));