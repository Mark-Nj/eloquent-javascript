// A map is a data structure that associates keys with other values
// Using plain objects as maps is dangerous since they contai properties from Object.prototype
// The 'Map' class stores a mapping and allows any type of keys

let ages = new Map();
ages.set("Mark", 20);
console.log(ages.get("Mark"));
console.log(ages.has("Mark"));
console.log(ages);