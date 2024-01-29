import express from "express";

const app = express();
app.use(express.json()); // We are using json

const students = [
  { name: "Mike", age: 22 },
  { name: "John", age: 27 },
  { name: "Harry", age: 24 },
];

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});

// set up the GET route at localhost:3000/api
app.get("/messages", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/students", (req, res) => {
  res.json({ students });
});

// set up the POST route at localhost:3000/api
app.post("/messages", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// This code creates a route on our server that will handle GET requests to the /api URL.
// When a request is received, the callback function will be called, and we'll send a JSON response back to the client.

// Start server = node server.js
// Use Postman to GET and POST requests: http://localhost:3000/messages will return message: "Hello, World!"
