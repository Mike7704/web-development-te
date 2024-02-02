import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const PORT = "8450";
const db = new Database("database.db");

const app = express();
app.use(express.json());
app.use(cors());

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

// req.body -> stuff sent from the client explicitly.
// req.query -> ?key=value in the url

// also this one - also in url, but not in the query
// /movies/:id
// req.params -> /movies/2
app.get("/querytest", (req, res) => {
  // localhost:PORT/querytest?one=1&two=2
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
app.post("/movies", (req, res) => {
  try {
    // req.body =
    // {
    // "movie": ""
    // "year": ""
    // "imgURL": ""
    // }
    const movie = req.body.movie;
    const year = req.body.year;
    const imgURL = req.body.imgURL;

    // Run my SQL statement to insert new movie - ??'s are replaced by values in .run (movie, year, imgURL)
    const newMovie = db.prepare(`INSERT INTO movies (movie, year, imgURL) VALUES (?,?,?)`).run(movie, year, imgURL);
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE movies/1
app.delete("/movies/:id", (req, res) => {
  try {
    const id = req.params.id;
    const deletedMovie = db.prepare(`DELETE FROM movies WHERE id = ?`).run(id);
    res.status(200).json({ recordDeleted: deletedMovie });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Update movie
app.put("/movies/:id", (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body.movie;
    const year = req.body.year;
    const imgURL = req.body.imgURL;

    const updatedMovie = db.prepare(`UPDATE movies SET movie = ?, year = ?, imgURL = ? WHERE id = ?`).run(movie, year, imgURL, id);
    res.status(200).json({ recordUpdated: updatedMovie });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
