/*
This programs prints numbers from 1 to 100 except if the number is divisible by 3 "Fizz"
is printed, else if the number is divisible by 5 "Buzz" is printed and if a number is divisible
by both 3 and 5, "FizzBuzz is printed".
 */


let isDivibleByDivisor = (number, divisor) => number % divisor === 0;
console.log(isDivibleByDivisor(10, 5));
for (let i=1; i<=100; i++) {
    if (isDivibleByDivisor(i, 3) && isDivibleByDivisor(i, 5)) {console.log("FizzBuzz");}
    else if (isDivibleByDivisor(i, 3)) console.log("Fizz");
    else if (isDivibleByDivisor(i, 5)) console.log("Buzz");
    else console.log(i);
}