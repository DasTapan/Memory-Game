import BestScore from "./BestScore";
import Score from "./Score";
import "../styles/Header.scss";

function Header({ score, bestScore }) {
  return (
    <div className="header">
      <span className="heading">Wild West Memory Game</span>
      <BestScore count={score} />
      <Score count={bestScore} />
    </div>
  );
}

export default Header;
