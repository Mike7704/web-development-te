import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// POST route in your Express server
app.post("/messages", (req, res) => {
  try {
    console.log("req.body", req.body);
    res.status(200).json({ status: "Message received!", clientMessage: req.body });
  } catch (error) {
    console.log(error);
  }
});

app.listen("7080", () => {
  console.log("listening on port 7080");
});
