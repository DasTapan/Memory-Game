import BestScore from "./BestScore";
import Score from "./Score";
import styles from "../styles/Header.module.css";
import "../styles/Header.scss";

function Header({ score, bestScore }) {
  return (
    <div className={styles.header}>
      <span className="heading">Wild West Memory Game</span>
      <BestScore count={score} />
      <Score count={bestScore} />
    </div>
  );
}

export default Header;
