console.log("Hello World!");

// Access element
const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

// Modify element
h1.textContent = "Hello world!";
/*
const image = document.querySelector("img");
image.src = "/images/myimage.jpg";
*/

// Add element
//const body = document.querySelector("body");
const h2 = document.createElement("h2");
h2.textContent = "This is a heading!";
body.appendChild(h2);

const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");

item1.textContent = "Item 1";
item2.textContent = "Item 2";
item3.textContent = "Item 3";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

body.appendChild(list);

// Remove element
// h2.remove();
