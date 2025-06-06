// This program deals with creating lists
// A list is a chain of objects

function arrayToList(array) {
    let list = undefined;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest:list};
    }
    return list;
}

console.log(arrayToList([1, 2, 3, 4, 5]));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));

function prepend(element, list) {
    let newList = {value: element, rest: list}
    return newList;
}

myList = arrayToList([1, 2, 3, 4]);
console.log(prepend(-1, myList));

function nth(number, list){
    let index = 0;
    for (let node = list; node; node = node.rest) {
        if (index === number) {
            return node.value;
        }
        index++;
    }
    return undefined;
}
let charList = arrayToList(['a', 'b', 'c']);
console.log(charList);
console.log(nth(1, charList));