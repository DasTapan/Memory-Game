import "./components/styles/GameOver.scss";

function GameOver({ replay }) {
  return (
    <div className="game-over">
      <div className="dialogue">
        <span>"Revenge is a fool's game" - Arthur Morgan</span>
        <button onClick={() => replay(false)}>Try Again</button>
      </div>
    </div>
  );
}

export default GameOver;
