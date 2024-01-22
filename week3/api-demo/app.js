let form = document.getElementById("form");
let imageContainer = document.getElementById("img-container");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page refresh
  console.log(event);
  let query = event.target.input.value;
  search(query);
});

async function search(query) {
  let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=ZhelQ5q2rAqa5RAY_LImIMv-C70OG01OSHEGnmMekaE`);
  console.log(response);
  let data = await response.json();
  //console.log(data.results[0].urls.raw);
  createImages(data.results);
}

// Display all images from search result
function createImages(arrayImages) {
  console.log(arrayImages);
  arrayImages.forEach((img) => {
    let imgTag = document.createElement("img");
    imgTag.src = img.urls.raw;

    imageContainer.appendChild(imgTag);
  });
}

async function gitHubRequest() {
  let response = await fetch(`https://api.github.com/repos/Mike7704/cookie-clicker`);
  console.log(response);
  let data = await response.json();
  console.log(`stargazers_count: ${data.stargazers_count}`);
  console.log(`description: ${data.description}`);
}

gitHubRequest();
