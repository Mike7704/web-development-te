console.log("Hello");

const button = document.querySelector("#myButton");
console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

function changeBackgroundColour() {
  if (document.body.style.background == "black") {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "black";
  }
}

button.addEventListener("click", toggleVisibility);
button.addEventListener("mouseover", changeBackgroundColour);
button.addEventListener("mouseout", changeBackgroundColour);

const header = document.querySelector("h1");
header.style.visibility = "hidden";
header.style.color = "red";

function toggleVisibility() {
  if (header.style.visibility === "hidden") {
    header.style.visibility = "visible";
  } else {
    header.style.visibility = "hidden";
  }
}
