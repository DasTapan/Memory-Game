import styles from "../styles/Container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.pic}></div>
        <span className={styles.name}></span>
      </div>
    </div>
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
