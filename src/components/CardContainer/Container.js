import styles from "../styles/Container.module.css";
import CardSet from "./CardSet";
import pickCards from "./CardPicker";
import { Fragment } from "react";
import { people } from "./CardSet";
import Card from "./Card";
import nameStyles from "../styles/Name.module.css";
import picStyles from "../styles/Pic.module.css";

function Pic({ localClass, imgSrc }) {
  return (
    <div
      className={localClass}
      style={{ backgroundImage: `url(${imgSrc})` }}
    ></div>
  );
}

function Name({ localClass, name }) {
  return <span className={localClass}>{name}</span>;
}

const alternateCards = people.map((person) => (
  <Card key={person.id}>
    <Pic localClass={picStyles.pic} imgSrc={person.imgUrl} />
    <Name localClass={nameStyles.name} name={person.name} />
  </Card>
));

const cards = pickCards(CardSet).map((card) => (
  <Fragment key={card.props.id}>{card}</Fragment>
));

function Container() {
  return <div className={styles.container}>{cards}</div>;
}

export default Container;
