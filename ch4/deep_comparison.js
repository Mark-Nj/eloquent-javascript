// This program creates a function to compare if values (including objects)
// are precisely equal to each other
function deepEqual(value1, value2) {
    if (value1 === value2) return true;
    if (value1 === null || typeof(value1) !== 'object' ||
     value2 === null || typeof(value2) !== 'object') {
        return false;
    }
    let value1Keys = Object.keys(value1);
    let value2Keys = Object.keys(value2);
    if (value1Keys.length !== value2Keys.length) return false;
    for (let key of value1Keys) {
        if (!value2Keys.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }
    return true;
}

console.log(deepEqual(1, 2));