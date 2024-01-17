console.log("Hello ");

let number = 1;
console.log(number); // Output: 1

let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;

console.log(sweets); // Output: 15

let name = "Bob";
console.log(name); // Output: Bob

let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Bob Smith

let fullName2 = `${firstName} ${lastName}`; // Literals

console.log(fullName2); // Output: Bob Smith

let firstName3 = "Michael";
console.log(`${firstName3} is ${firstName3.length} characters long`);

let isTrue = true;
console.log(isTrue); // Output: true
let isFalse = false;
console.log(isFalse); // Output: false

console.log(typeof name); // Output: string
console.log("The type of number is " + typeof number); // Output: The type of number is number
console.log(`The type of isTrue is ${typeof isTrue}`); // Output: The type of isTrue is boolean

let none;
console.log(none); // Output: undefined

let age = null;
console.log(age); // Output: null

let a = 1;
let b = 2;
let z = "1";
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a == b;
let isAEqualToZ = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false
console.log(isAEqualToZ); // Output: false

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB); // Output: Is 1 greater than 2? false
console.log(`Is ${a} less than ${b}?`, isALessThanB); // Output: Is 1 less than 2? true
console.log(`Is ${a} equal to ${b}?`, isAEqualToB); // Output: Is 1 equal to 2? false

let myName = "Michael";
let myAge = 22;
const aboutMe = `Hello, my name is ${myName} and I am ${myAge} years old.`;
console.log(aboutMe);

