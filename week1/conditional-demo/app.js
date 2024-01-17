console.log("Hello");

let age = 12;
let movieRating = "12";

if (movieRating === "PG" || movieRating === "U" || age >= 18) {
  console.log("You can watch the movie!");
} else if (movieRating === "15" && age >= 15) {
  console.log("You can watch the movie!");
} else if (movieRating === "12" && age >= 12) {
  console.log("You can watch the movie!");
} else {
  console.log("You can not watch the movie!");
}
