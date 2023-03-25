import { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";

function Card({ children, handleScore, handleBestScore }) {
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    handleScore(clicked);
    handleBestScore(clicked);
  }, [clicked, handleScore, handleBestScore]);

  return (
    <div className={styles.card} onClick={() => setClicked(clicked + 1)}>
      {children}
    </div>
  );
}

export default Card;
