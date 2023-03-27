import Card from "./Card";
import "../styles/Container.scss";
import collect from "collect.js";
import { useCallback, useEffect, useState } from "react";

function Container({ info, updateScore, updateBestScore, informRepetition }) {
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

  useEffect(() => {
    const unique = collect(clicked).unique().all();
    if (clicked.length > unique.length) {
      console.log("NOT OK");
      handleRepetition(true);
    }
  }, [clicked, handleRepetition]);

  function handleOnClick(person) {
    // console.log(`${person.name} -${person.id} has been clicked`);
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
