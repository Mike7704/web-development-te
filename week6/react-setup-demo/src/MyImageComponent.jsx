function MyImageComponent(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}

export default MyImageComponent;
