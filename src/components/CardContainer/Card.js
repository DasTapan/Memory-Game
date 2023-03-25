import { useState } from "react";
import styles from "../styles/Card.module.css";

function Card({ children }) {
  const [clicked, setClicked] = useState(0);

  function handleClick() {
    setClicked(clicked + 1);
    console.log(`clicked:${clicked}`);
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      {children}
    </div>
  );
}

export default Card;
