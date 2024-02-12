//import MovieCard from "./MovieCard";

//function App() {
//  return (
//    <div>
//      <h1>Movie Database</h1>
//      {/*name of the movie*/}
//      {/*year*/}
//      {/*director*/}
//      {/*image link*/}
//      <MovieCard movieName="Movie1" year="2000" director="Director" imgLink="link"></MovieCard>
//    </div>
//  );
//}

//export default App;

import MyImageComponent from "./MyImageComponent";

function MyGalleryComponent() {
  return (
    <div>
      <MyImageComponent imageUrl="https://unsplash.com/photos/8wTPqxlnKM4" altText="An absolutely terrifying kitten" />
      <MyImageComponent imageUrl="https://unsplash.com/photos/8wTPqxlnKM4" altText="An absolutely terrifying kitten" />
      <MyImageComponent imageUrl="https://unsplash.com/photos/8wTPqxlnKM4" altText="An absolutely terrifying kitten" />
    </div>
  );
}

function MyPageComponent() {
  return (
    <div>
      <h1>My Gallery Page</h1>
      <p>More horrifying fluffballs, probably.</p>
      <MyGalleryComponent />
    </div>
  );
}

export default MyPageComponent;
