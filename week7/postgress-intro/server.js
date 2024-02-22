import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const PORT = 7596;

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/make-table", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS example (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        age INT
    );`);
  res.json(result);
});

app.get("/seed-example", async (req, res) => {
  const result = await db.query(`INSERT INTO example (name, age)
    VALUES 
    ('Michael', 23),
    ('Harry', 20)
    ;`);
  res.json({ message: "seeded", result });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
