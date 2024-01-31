const form = document.getElementById("form");
const container = document.getElementById("movie-container");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const movieData = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8450/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });

  // if i know the request was successful
  if (response.ok) {
    // Redraw movies
    displayMovies();
  } else {
    console.error("Failed to add movie", response.status);
  }
});

async function fetchMovies() {
  const movies = await fetch("http://localhost:8450/movies");
  // Parse into an array
  let result = await movies.json();
  return result;
}

async function displayMovies() {
  let movies = await fetchMovies();

  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    let h3Tag = document.createElement("h3");
    let pTag = document.createElement("p");

    h3Tag.textContent = movie.movie;
    pTag.textContent = movie.year;

    movieContainer.appendChild(h3Tag);
    movieContainer.appendChild(pTag);
  });
}

displayMovies();
