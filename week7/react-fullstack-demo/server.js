// express setup
import express from "express";
const app = express();
app.use(express.json());

// cors setup
import cors from "cors";
app.use(cors());

// dotenv setup
import dotenv from "dotenv";
import { response } from "express";
dotenv.config();

// pg setup
import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// setup port
const PORT = "8940";
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

/// setup our root route
app.get("/", (req, res) => {
  res.send("Root route");
});

// get pizzas
app.get("/pizzas", async (req, res) => {
  const result = await db.query("SELECT * FROM pizzas");
  res.json(result.rows);
});
