const form = document.getElementById("form");
const movieContainer = document.getElementById("movie-container");

const baseURL = "http://localhost:8450";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const movieData = Object.fromEntries(formData);

  const response = await fetch(`${baseURL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
    /* Send JSON to server:
    {
      "movie": "";
      "year": "";
      "imgURL": "";
    } */
  });

  // If I know the request was successful
  if (response.ok) {
    // Redraw movies
    displayMovies();
  } else {
    console.error("Failed to add movie", response.status);
  }
});

async function fetchMovies() {
  const movies = await fetch(`${baseURL}/movies`);
  // Parse into an array
  let result = await movies.json();
  return result;
}

async function deleteMovie(id) {
  const result = await fetch(`${baseURL}/movies/${id}`, {
    method: "DELETE",
  });
  console.log(result);
  if (result.ok) {
    displayMovies();
  }
}

async function updateMovie(id, updatedInfo) {
  const result = await fetch(`${baseURL}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedInfo),
  });
  console.log(result);
  if (result.ok) {
    displayMovies();
  }
}

async function displayMovies() {
  let movies = await fetchMovies();

  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    let h3Tag = document.createElement("h3");
    let pTag = document.createElement("p");
    let imgTag = document.createElement("img");
    let deleteButton = document.createElement("button");

    h3Tag.textContent = movie.movie;
    pTag.textContent = movie.year;
    imgTag.src = movie.imgURL;
    deleteButton.textContent = "delete";

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      deleteMovie(movie.id);
    });

    movieContainer.appendChild(h3Tag);
    movieContainer.appendChild(pTag);
    movieContainer.appendChild(imgTag);
    createUpdateForm(movie);
    movieContainer.appendChild(deleteButton);
  });
}

// Update form
// for each of the moives
// create an input for the movie title, year, imgURL.
// set the values of each of those inputs to be whatever the current value is of that movie
// add a button to submit
// when submit make a put request
function createUpdateForm(movie) {
  const updateDiv = document.createElement("div");
  const updateMovieName = document.createElement("input");
  const updateYear = document.createElement("input");
  const updateImgURL = document.createElement("input");
  const updateButton = document.createElement("button");
  const updateForm = document.createElement("form");

  updateMovieName.value = movie.movie;
  updateMovieName.setAttribute("name", "movie");
  updateYear.value = movie.year;
  updateYear.setAttribute("name", "year");
  updateImgURL.value = movie.imgURL;
  updateImgURL.setAttribute("name", "imgURL");
  updateButton.textContent = "update";
  updateButton.setAttribute("type", "submit");

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(updateForm);
    const info = Object.fromEntries(formData);
    updateMovie(movie.id, info);
  });

  updateForm.appendChild(updateMovieName);
  updateForm.appendChild(updateYear);
  updateForm.appendChild(updateImgURL);
  updateForm.appendChild(updateButton);
  updateDiv.appendChild(updateForm);
  movieContainer.appendChild(updateDiv);
}

displayMovies();
