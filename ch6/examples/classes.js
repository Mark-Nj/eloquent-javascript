// A class defines the shape of a type of object.
// The 'constructor' function creates properties that instances of a class are supposed to have

// Syntax
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`${this.type} rabbit says '${line}!'`)
    }
}

let killerRabbit = new Rabbit("Killer");
killerRabbit.speak("I am a Killer");