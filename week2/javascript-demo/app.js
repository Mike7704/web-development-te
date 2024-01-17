console.log("--- basic functions ---");

function sayHello() {
  console.log("Hello world!");
}
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}
sayHelloTo("Bob"); // Output: Hello Bob!

function greet(greeting, name) {
  console.log(greeting + " " + name + "!");
}
greet("Good morning", "Bob"); // Output: Good morning Bob!

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

console.log("6 + 2 = " + calculate(6, 2, "+"));
console.log("6 - 2 = " + calculate(6, 2, "-"));
console.log("6 * 2 = " + calculate(6, 2, "*"));
console.log("6 / 2 = " + calculate(6, 2, "/"));

console.log("--- scope ---");

const firstName = "Bob"; // Global variable

function printHello() {
  const firstName = "John"; // Private/local variable
  console.log("Hello " + firstName + "!");
}

printHello(); // Output: Hello John!
console.log(firstName); // Output: Bob

console.log("--- arrays ---");

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);
blogPosts[3] = "My fourth blog post"; // Add element
console.log(blogPosts[3]); // Output: My fourth blog post
console.log("Added 4th element: " + blogPosts);

const favouriteFoods = ["Pizza", "Burger", "Chicken"];
console.log(favouriteFoods);
const favouriteNumbers = [1, 2, 3, 4, 5];
console.log(favouriteNumbers);
const favouriteColours = ["Red", "Green", "Blue"];
console.log(favouriteColours);

favouriteColours.splice(1, 1); // Remove element
console.log("Removed Green: " + favouriteColours);

// Filter even numbers
console.log(
  "Even numbers: " + favouriteNumbers.filter((item) => item % 2 === 0)
);

// Find the first element that satisfies a condition
console.log(
  "First element greater than 3: " + favouriteNumbers.find((item) => item > 3)
);

// Index of an element
console.log("Index 2: " + favouriteNumbers.indexOf(1));

console.log("--- loops ---");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.5;
  i++;
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

for (let food of foods) {
  console.log(food);
}

foods.forEach(function (food, index) {
  console.log(index, food);
});

const animals = ["Penguin", "Lion", "Bear"];

for (let animal of animals) {
  console.log(animal);
}

console.log("--- objects ---");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
console.table(person); // Display object in table format
console.log(person.name); // Output: Bob
console.log(person.age); // Output: 30
console.log(person.favouriteColour); // Output: red

person.favouriteFood = "pizza"; // Added favouriteFood property
console.log(person.favouriteFood); // Output: pizza

const car = {
  make: "Aldi",
  model: "R8",
  color: "Grey",
};
console.table(car);

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  numOfPages: 500,
};
console.table(book);

console.log("--- complex objects ---");

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name); // Output: Bob
console.log(blogPost.tags[0]); // Output: coding
console.log(blogPost.tags.length); // Output: 4

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}

//let itemsElement = document.getElementById("items");
let items = [
  {
    name: "item1",
    price: 10,
  },
  {
    name: "item2",
    price: 20,
  },
  {
    name: "item3",
    price: 15,
  },
];
/*
for (let item of items) {
  console.log(item.name, item.price);
  itemsElement.textContent = `Item name: ${item.name}, Item price: ${item.price}`;
}
*/
console.log("--- object methods ---");

const human = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (n) {
    console.log("Hello " + n);
  },
  getAge: function () {
    return human.age;
  },
};

human.sayHello("Mike"); // Output: Hello Mike
console.log(human.getAge()); // Output: 30

console.log("--- callback functions ---");

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

// Write a function that accepts three arguments: two numbers, and a callback function that handles performing the mathematical operation using the two numbers.
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );
  return operationCallback(a, b);
}

const result1 = myCalculatorFunction(1, 2, add);
console.log(result1); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

const result3 = myCalculatorFunction(8, 5, subtract);
console.log(result3); // Output: 3

// add the two results together
const finalResult = myCalculatorFunction(result1, result2, add);
console.log(finalResult); // Output: 9

console.log("--- Timers ---");

const btn = document.getElementById("btn");
const hiddenMessage = document.getElementById("hiddenMessage");

hiddenMessage.style.visibility = "hidden";

btn.addEventListener("click", revealMessage);

function revealMessage() {
  // Reveal message and hide after 5 seconds
  hiddenMessage.style.visibility = "visible";
  setTimeout(function () {
    hiddenMessage.style.visibility = "hidden";
  }, 5000);
}

const btnTimer = document.getElementById("btn-timer");
const timer = document.getElementById("timer");
let timerInterval;
let timerSeconds = 0;

btnTimer.addEventListener("click", toggleTimer);

function toggleTimer() {
  if (!timerInterval) {
    timerSeconds = 0;
    timerInterval = setInterval(updateTimer, 1000);
    btnTimer.textContent = "Stop Timer";
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    btnTimer.textContent = "Start Timer";
  }
}

function updateTimer() {
  timerSeconds++;
  timer.textContent = `${timerSeconds}`;
}
