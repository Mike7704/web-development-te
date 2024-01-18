const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // sadly we can't just log formData - it's a speical kind of object.
  console.log(formData);
  const myObj = Object.fromEntries(formData);
  console.log(myObj); // correctly logs the formData object with the keys being the input name attribute and the value being the value of the input.
});
