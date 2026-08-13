// 1. Normal function
function greet() {
    console.log("Hello!");
}
greet();


// 2. Basic arrow function
const sayHello = () => {
    console.log("Hello from arrow function!");
};
sayHello();


// 3. Arrow function with one parameter
const square = (number) => {
    return number * number;
};
console.log("Square:", square(19));


// 4. Arrow function with two parameters
const add = (a, b) => {
    return a + b;
};
console.log("Sum:", add(170, 78));


// 5. Short arrow function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(35, 84));


// 6. Arrow function with map()
let numbers = [12, 98, 34, 89, 69];
let doubledNumbers = numbers.map((number) => number * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers);


// 7. Arrow function with map() - squares
let values = [29, 94, 56, 81, 10];
let squares = values.map((number) => number * number);
console.log("Values:", values);
console.log("Squares:", squares);


// 8. Arrow function with filter()
let numbers2 = [12, 98, 34, 89, 69];
let evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);


// 9. Arrow function with filter() - greater than 15
let numbers3 = [5, 10, 15, 20, 25, 30];
let numbersGreaterThan15 = numbers3.filter((number) => number > 15);
console.log("Numbers greater than 15:", numbersGreaterThan15);


// 10. Arrow function with find()
let numbers4 = [10, 20, 30, 40, 50];
let result = numbers4.find((number) => number > 25);
console.log("First number greater than 25:", result);