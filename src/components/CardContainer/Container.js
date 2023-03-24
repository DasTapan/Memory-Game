import styles from "../styles/Container.module.css";
import CardSet from "./CardSet";
import pickCards from "./CardPicker";
import { Fragment } from "react";

const cards = pickCards(CardSet).map((card) => (
  <Fragment key={card.props.id}>{card}</Fragment>
));
console.log(cards);

function Container() {
  return <div className={styles.container}>{cards}</div>;
}

export default Container;
