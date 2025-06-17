// Prototypes are frameworks for other objects in that other objects are linked to a prototype
// to get all its properties
// Example
let protoRabbit = {
    speak(line) {
        console.log(`${this.type} rabbit says '${line}!'`);
    }
}

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = 'Black';
blackRabbit.speak('I am fear and darkness');