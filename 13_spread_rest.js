// 1. Spread Operator with Arrays
let fruits = ["Apple", "Orange", "Banana", "Mango"];
let moreFruits = [...fruits, "Orange"];
console.log("Original fruits:", fruits);
console.log("New fruits:", moreFruits);


// 2. Spread Operator with Numbers
let numbers = [13, 98, 55];
let newNumbers = [...numbers, 40, 50];
console.log("Original numbers:", numbers);
console.log("New numbers:", newNumbers);


// 3. Spread Operator with Two Arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let allNumbers = [...numbers1, ...numbers2];
console.log("First array:", numbers1);
console.log("Second array:", numbers2);
console.log("Combined array:", allNumbers)