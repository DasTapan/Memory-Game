function Card({ id, imgSrc, name }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Card;
