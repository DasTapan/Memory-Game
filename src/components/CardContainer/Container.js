import Card from "./Card";
import "../styles/Container.scss";
import collect from "collect.js";
import { useCallback, useEffect, useState } from "react";

function Container({ info, compareScore, informRepetition }) {
  const [clicked, setClicked] = useState([]);

  const people = [...info];
  const collection = collect(people);
  const fifteenRandom = collection.random(15).items;

  const handleRepetition = useCallback(
    (val) => {
      informRepetition(val);
    },
    [informRepetition]
  );

  const handleScore = useCallback(
    (val) => {
      compareScore(val);
    },
    [compareScore]
  );

  useEffect(() => {
    const unique = collect(clicked).unique().all();
    if (clicked.length > unique.length) {
      handleRepetition(true);
    } else handleScore(unique.length);
  }, [clicked, handleRepetition, handleScore]);

  function handleOnClick(person) {
    setClicked(clicked.concat(+person.id));
  }

  return (
    <div className="container">
      {fifteenRandom.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          imgSrc={item.imgUrl}
          name={item.name}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  );
}

export default Container;
