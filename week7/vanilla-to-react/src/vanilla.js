function createHeading() {
  const heading = document.createElement("h2");
  heading.textContent = "Javascript";
  document.body.appendChild(heading);
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "Javascript Button";

  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Button clicked!");
  });

  document.body.appendChild(button);
}

function createConditionalRendering() {
  const message = document.createElement("p");
  const isLoggedIn = true;

  if (isLoggedIn) {
    message.textContent = "Welcome back";
  } else {
    message.textContent = "Please log in";
  }

  document.body.appendChild(message);
}

createHeading();
createButton();
createConditionalRendering();
