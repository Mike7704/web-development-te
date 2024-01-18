/*
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

// Set input to saved colour
const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}
*/

const form = document.querySelector("form");

form.addEventListener("submit", savePreferences);

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  // preferences is now an object, it might contain other preferences...
  const preferences = {
    colour,
  };

  // localStorage.removeItem("preferences");
  // so when we save it, we stringify it
  localStorage.setItem("preferences", JSON.stringify(preferences));
  loadPreferences();
}

// then we parse the string back into an object when we retrieve it
loadPreferences();

function loadPreferences() {
  // load the prefs
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  // if we have some prefs
  if (preferences) {
    // set the form value
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

    // set the body color to the user colour preference (intentional US / UK spelling difference...)
    const body = document.querySelector("body");
    body.style.backgroundColor = preferences.colour || "#000000";
  }
}

form.addEventListener("button", resetColour);

function resetColour() {
  localStorage.setItem("preferences", JSON.stringify("white"));
}

// Function to handle changes in local storage
function handleLocalStorageChange(event) {
  if (event.key === "preferences") {
    // Do something when the specific local storage key changes
    const newValue = event.newValue;
    console.log(`Local storage favouriteColour changed to: ${newValue}`);
  }
}

// Add an event listener to listen for changes in local storage
window.addEventListener("storage", handleLocalStorageChange);
