// This program is a higher-order for loop that takes a value, a test function,
// an update function, and a body function

function loop(value, test, body, update) {
    let current = value;
    for (current; test(current); current=update(current)) {
        body(current);
    }
    
}


loop(1, n => n <=10, n=>console.log(n), n => ++n);