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
    year INTEGER,
    imgURL TEXT
)`);

// PRIMARY KEY = Flaging our id as a records unqiue identifier
// AUTOINCREMENT = Start at 1, add one to each new record

db.exec(`
    INSERT into movies (movie, year, imgURL)
    VALUES
    ('Toy Story', 1995, 'https://xl.movieposterdb.com/13_05/1995/114709/xl_114709_6645f9fc.jpg?v=2024-01-20%2004:14:26'),
    ('Star Wars: A New Hope', 1977, 'https://xl.movieposterdb.com/21_01/1977/76759/xl_76759_43e2730c.jpg?v=2024-01-31%2018:06:24'),
    ('Avatar', 2009, 'https://xl.movieposterdb.com/23_01/2009/499549/xl_avatar-movie-poster_c111a145.png?v=2024-01-22%2021:34:14')
`);
