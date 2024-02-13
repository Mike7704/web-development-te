import Button from "./Button";

export default function TreeCard({ treeName, imgLink, location }) {
  return (
    <div className="tree-card-container">
      <div id="tree-card">
        <h1>{treeName}</h1>
        <img src={imgLink} alt="" />
        <p>{location}</p>
        <Button />
      </div>
    </div>
  );
}
