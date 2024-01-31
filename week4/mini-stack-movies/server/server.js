import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const PORT = "8450";
const db = new Database("database.db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Message Received");

  res.status(200).json({ message: true });
});

// Get movies from our databases
app.get("/movies", (req, res) => {
  try {
    // Find a record by it's id (movies?id=1)
    if (req.query.id) {
      //res.status(200).send("You sent a query");
      let movie = db.prepare(`SELECT * FROM movies WHERE id = ?`).all(req.query.id);
      res.status(200).json(movie);
      return;
    }

    // .prepare() = optimise statement for use, but it's not running yet
    // .all() = run the statement, and return all the results of that statement
    let movies = db.prepare(`SELECT * FROM movies`).all();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/querytest", (req, res) => {
  if (req.query.one && req.query.two) {
    res.send("You sent 2 queries");
  } else if (req.query.one) {
    res.send("You sent query 1");
  } else if (req.query.two) {
    res.send("You sent query 2");
  } else {
    res.send("You didn't send a query");
  }
});

// Add a new movie to the database
// {
// "movie": "Toy Story"
// "year": "1997"
// }
app.post("/movies", (req, res) => {
  try {
    const movie = req.body.movie;
    const year = req.body.year;

    // Run my SQL statement to insert new movie
    const newMovie = db.prepare(`INSERT INTO movies (movie, year) VALUES (?,?)`).run(movie, year);
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
