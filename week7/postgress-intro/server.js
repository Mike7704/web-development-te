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

// Relational database example

app.get("/make-categories", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);`);
  res.json(result);
});

app.get("/make-posts", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category_id INTEGER REFERENCES categories(id)
  );`);
  res.json(result);
});

app.get("/make-tags", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );`);
  res.json(result);
});

app.get("/make-posts-tags", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS posts_tags (
    post_id INTEGER REFERENCES posts(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
  );`);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
