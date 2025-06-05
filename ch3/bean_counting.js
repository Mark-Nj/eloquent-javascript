/*
 This function counts all the 'B' characters in a string
 */
let bCounter = 0;
 function countBs (myString) {
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == 'B') bCounter += 1;
    }
        return bCounter;
 }

console.log(countBs('Beans, Boy, Bold, ComB'));

/*
This function tallies all occurrences of the character argument in the string argument
 */
let charCounter = 0;
function countChar(character, string) {
    for (let i=0; i<string.length; i++) {
        if (string[i] == character) charCounter += 1;
    }
    return charCounter;
}
console.log(countChar('a', 'Apple, Mango, banana, axe, Art'));