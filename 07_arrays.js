// 1. Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Original array:");
console.log(fruits);


// 2. Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);


// 3. Changing an array element
fruits[0] = "Grapes";
console.log("After changing first fruit:");
console.log(fruits);


// 4. Adding elements using push()
fruits.push("Watermelon");
fruits.push("Lichi");
console.log("After adding fruits:");
console.log(fruits);


// 5. Removing the last element using pop()
fruits.pop();
console.log("After removing the last fruit:");
console.log(fruits);


// 6. Finding array length
console.log("Number of fruits:", fruits.length);


// 7. Looping through an array
console.log("All fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// 8. Number array
let numbers = [10, 28, 90, 71, 56];
console.log("Numbers:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 9. Calculate sum of numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Sum:", sum);