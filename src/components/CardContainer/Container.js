import styles from "../styles/Container.module.css";
import cardStyles from "../styles/Card.module.css";
import nameStyles from "../styles/Name.module.css";
import picStyles from "../styles/Pic.module.css";

function Pic({ localClass }) {
  return <div className={localClass}></div>;
}

function Name({ localClass, value }) {
  return <span className={localClass}>{value}</span>;
}

function Container() {
  return (
    <div className={styles.container}>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
      <div className={cardStyles.card}>
        <Pic localClass={picStyles.pic} />
        <Name localClass={nameStyles.name} value="Dutch" />
      </div>
    </div>
  );
}

export default Container;
