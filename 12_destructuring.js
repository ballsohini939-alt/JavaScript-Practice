// 1. Basic Array Destructuring
let fruits = ["Lichi", "Banana", "Mango"];
let [first, second, third] = fruits;
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);


// 2. Skipping an Element
let colors = ["Pink", "Green", "Blue", "Yellow"];
let [color1, , color3, ] = colors;
console.log("First color:", color1);
console.log("Third color:", color3);