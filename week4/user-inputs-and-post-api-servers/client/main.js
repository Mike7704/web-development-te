const messageForm = document.querySelector("#messageForm");

messageForm.addEventListener("submit", handleSubmitMessageForm);

function handleSubmitMessageForm(event) {
  event.preventDefault();

  // Fetch API to send the data to the server
  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch(`${import.meta.env.VITE_ServerURL}/messages`, {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}
