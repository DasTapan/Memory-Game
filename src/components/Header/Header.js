import BestScore from "./BestScore";
import Score from "./Score";
import styles from "../styles/Header.module.css";
import "../styles/Header.scss";

function Header() {
  return (
    <div className={styles.header}>
      <span className="heading">Wild West Memory Game</span>
      <BestScore count={0} />
      <Score count={0} />
    </div>
  );
}

export default Header;
