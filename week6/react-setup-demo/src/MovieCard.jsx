// props is an object
// <> </> = fragments

const MovieCard = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.movieName}</h2>
      <p>{props.year}</p>
      <h3>{props.director}</h3>
      <img src={props.imgLink} alt="" />
    </div>
  );
};

export default MovieCard;
