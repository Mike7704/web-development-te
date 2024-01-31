import Database from "better-sqlite3";

// Seed our database with some initial data

// Hook up our database.db to get methods
const db = new Database("database.db");

// Executes some sql query
// You have to use backticks
// Inside  (), we put the columns
db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie TEXT,
    year INTEGER
)`);

// PRIMARY KEY = Flaging our id as a records unqiue identifier
// AUTOINCREMENT = Start at 1, add one to each new record

db.exec(`
    INSERT into movies (movie, year)
    VALUES
    ('Black Narcissus', 1947),
    ('Ran', 1985),
    ('Day of Wrath', 1943)
`);
