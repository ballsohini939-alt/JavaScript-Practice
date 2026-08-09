// forEach()
let numbers = [17, 2, 89, 50, 71];
console.log("Using forEach:");
numbers.forEach(function(number) {
    console.log("Number:", number);
});


// map()
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers);


// filter()
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

//filter() - numbers greater than 20
let numbersGreaterThan20 = numbers.filter(function(number) {
    return number > 20;
});
console.log("Numbers greater than 20:", numbersGreaterThan20);


//find()
let firstNumberGreaterThan20 = numbers.find(function(number) {
    return number > 20;
});
console.log("First number greater than 20:", firstNumberGreaterThan20);


//reduce() Combines all elements into one final value
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);
console.log("Sum:", sum);

