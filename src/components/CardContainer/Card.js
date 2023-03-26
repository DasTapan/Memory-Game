function Card({ id, imgSrc, name, handleOnClick }) {
  function handleClick() {
    handleOnClick({ id, name });
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={imgSrc} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Card;
