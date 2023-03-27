function Card({ id, imgSrc, name, handleOnClick }) {
  return (
    <div className="card" onClick={() => handleOnClick({ id, name })}>
      <img src={imgSrc} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Card;
