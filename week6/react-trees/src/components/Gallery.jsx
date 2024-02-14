import { useState, useEffect } from "react";

// Use a form to fetch images from API
export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [userInput, setInput] = useState("");

  async function getPhotos(queryParam) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=ZhelQ5q2rAqa5RAY_LImIMv-C70OG01OSHEGnmMekaE`
    );
    const data = await response.json();
    setPhotos(data.results);
  }

  // Code that doesn't need to every time component re-renders
  useEffect(() => {
    getPhotos(query);
  }, [query]); // Update when query changes

  return (
    <div>
      <h2>Search Images:</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(userInput);
        }}
      >
        <input
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.regular} alt="" />
        </div>
      ))}
    </div>
  );
}

// onChange (useState to update whatever the person is typing)
// OnSubmit (so that whenever the person submits the form, fetch what as searched)
