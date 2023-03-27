import BestScore from "./BestScore";
import Score from "./Score";
import "../styles/Header.scss";

function Header({ score, bestScore }) {
  return (
    <div className="header">
      <span className="heading">Wild West Memory Game</span>
      <BestScore count={bestScore} />
      <Score count={score} />
    </div>
  );
}

export default Header;
