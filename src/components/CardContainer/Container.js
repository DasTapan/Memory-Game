import Card from "./Card";
import "../styles/Container.scss";
import { shuffle } from "lodash";

function Container({ info }) {
  const people = [...info];
  // console.log(people);
  const displayList = shuffle(people).slice(0, 15);
  // console.log(displayList);
  return (
    <div className="container">
      {displayList.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          imgSrc={item.imgUrl}
          name={item.name}
        />
      ))}
    </div>
  );
}

export default Container;
