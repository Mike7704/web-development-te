// dotenv setup
import dotenv from "dotenv";
dotenv.config();

// pg setup
import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// create table for pizzas
db.query(`CREATE TABLE IF NOT EXISTS pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    url TEXT
);`);

// insert data
db.query(`INSERT INTO pizzas (name, url)
VALUES
('Classic Cheese', 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg'),
('Pepperoni', 'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA');`);
