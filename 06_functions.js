// 1. Basic function
function greet() {
    console.log("Hello, Students!");
}
greet();


// 2. Function with parameter
function greetUser(name) {
    console.log("Hello,", name);
}
greetUser("Sohini");
greetUser("Prachi");


// 3. Function with two parameters and return
function add(a, b) {
    return a + b;
}
let sum = add(91, 27);
console.log("Sum:", sum);


// 4. Function to calculate square
function square(number) {
    return number * number;
}
let result = square(65);
console.log("Square:", result);