import styles from "../styles/Container.module.css";
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

function Container({ people }) {
  const cards = people.map((person) => (
    <Card key={person.id}>
      <Pic localClass={picStyles.pic} imgSrc={person.imgUrl} />
      <Name localClass={nameStyles.name} name={person.name} />
    </Card>
  ));

  const displayCards = cards.slice(0, 15);
  return <div className={styles.container}>{displayCards}</div>;
}

export default Container;
