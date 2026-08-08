console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("Odd numbers:");
for (let i = 1; i <= 9; i += 2) {
    console.log(i);
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum:", sum);