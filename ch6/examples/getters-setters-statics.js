// getters - This are properties that conatain hidden methods; when called they return the value of the method
// setters - Used to write values to properties
// statics - They are stored in the constructor and don't have access to a class instance 
//           but they provide additional ways of creating instances

class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    get fahreinheit() {
        return this.celcius * 1.8 + 32;
    }
    set fahreinheit(value) {
        this.celcius = (value - 32) / 1.8;
    }
    static fromFahreinheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(100);
console.log(temp.fahreinheit);

temp.fahreinheit = 212;
console.log(temp.celcius);

let boil = Temperature.fromFahreinheit(212);
console.log(boil.celcius);