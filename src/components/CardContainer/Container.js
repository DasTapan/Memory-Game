import Card from "./Card";
import "../styles/Container.scss";
import collect from "collect.js";
import { useState } from "react";

function Container({ info }) {
  // const[clicked,setClicked] = useState([])

  function handleOnClick(person) {
    console.log(`${person.name} -${person.id} has been clicked`);
  }

  const people = [...info];
  const collection = collect(people);
  const fifteenRandom = collection.random(15).items;
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
