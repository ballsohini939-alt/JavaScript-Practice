// 1. Creating a string
let name = "Sohini";
console.log("Name:");
console.log(name);


// 2. Finding string length
console.log("Length:", name.length);


// 3. Accessing characters using index
console.log("First character:", name[0]);
console.log("Fourth character:", name[3]);


// 4. Converting string to uppercase
console.log("Uppercase:", name.toUpperCase());


// 5. Converting string to lowercase
console.log("Lowercase:", name.toLowerCase());


// 6. Checking if a string contains a word
let message = "I am learning JavaScript";
console.log("Contains JavaScript:", message.includes("JavaScript"));
console.log("Contains Python:", message.includes("Python"));


// 7. Extracting part of a string
console.log("Extracted text:", message.slice(5, 14));


// 8. Combining strings
let firstName = "Sohini";
let lastName = "Ball";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);
let age = 18;
console.log("My name is " + firstName + " and my age is " + age);
