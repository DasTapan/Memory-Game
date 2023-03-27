import Header from "./components/Header/Header";
import Container from "./components/CardContainer/Container";
import Footer from "./components/Footer/Footer";

import Abigail from "./components/assets/pics/Abigail.jpeg";
import Arthur from "./components/assets/pics/Arthur.jpeg";
import Bill from "./components/assets/pics/Bill.jpeg";
import Charles from "./components/assets/pics/Charles.jpeg";
import Dutch from "./components/assets/pics/Dutch.jpeg";
import HerrStrauss from "./components/assets/pics/Herr-Strauss.jpeg";
import Hosea from "./components/assets/pics/Hosea.jpeg";
import Jack from "./components/assets/pics/Jack.jpeg";
import Javier from "./components/assets/pics/Javier.jpeg";
import John from "./components/assets/pics/John.jpeg";
import Karen from "./components/assets/pics/Karen.jpeg";
import MaryBeth from "./components/assets/pics/Mary-Beth.jpeg";
import MicahBell from "./components/assets/pics/Micah-Bell.jpeg";
import Molly from "./components/assets/pics/Molly.jpeg";
import MrPearson from "./components/assets/pics/Mr-Pearson.jpeg";
import MrTrelawney from "./components/assets/pics/Mr-Trelawney.jpeg";
import Reverend from "./components/assets/pics/Reverend-Swanson.jpeg";
import Sean from "./components/assets/pics/Sean.jpeg";
import Susan from "./components/assets/pics/Susan.jpeg";
import Tilly from "./components/assets/pics/Tilly.jpeg";
import Uncle from "./components/assets/pics/Uncle.jpeg";
import { useEffect, useState } from "react";

const DATA = [
  { id: 1, name: "Abigail", imgUrl: Abigail },
  { id: 2, name: "Arthur", imgUrl: Arthur },
  { id: 3, name: "Bill", imgUrl: Bill },
  { id: 4, name: "Charles", imgUrl: Charles },
  { id: 5, name: "Dutch", imgUrl: Dutch },
  { id: 6, name: "Herr Strauss", imgUrl: HerrStrauss },
  { id: 7, name: "Hosea", imgUrl: Hosea },
  { id: 8, name: "Jack", imgUrl: Jack },
  { id: 9, name: "Javier", imgUrl: Javier },
  { id: 10, name: "John", imgUrl: John },
  { id: 11, name: "Karen", imgUrl: Karen },
  { id: 12, name: "Marry Beth", imgUrl: MaryBeth },
  { id: 13, name: "Micah Bell", imgUrl: MicahBell },
  { id: 14, name: "Molly", imgUrl: Molly },
  { id: 15, name: "Mr Pearson", imgUrl: MrPearson },
  { id: 16, name: "Mr Trelawney", imgUrl: MrTrelawney },
  { id: 17, name: "Reverend Swanson", imgUrl: Reverend },
  { id: 18, name: "Sean", imgUrl: Sean },
  { id: 19, name: "Susan", imgUrl: Susan },
  { id: 20, name: "Tilly", imgUrl: Tilly },
  { id: 21, name: "Uncle", imgUrl: Uncle },
];

export default function Wrapper() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const savedJson = localStorage.getItem("memoryGameHighScore");
    const parsedJSON = JSON.parse(savedJson);

    return parsedJSON || 0;
  });
  const [isRepeated, setIsRepeated] = useState(false);

  useEffect(() => {
    localStorage.setItem("memoryGameHighScore", bestScore);
  }, [bestScore]);

  if (isRepeated) console.log("A repeat happened");

  function compareScore(currentScore) {
    if (currentScore <= bestScore) setScore(currentScore);
    else {
      setBestScore(currentScore);
      setScore(currentScore);
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      {!isRepeated ? (
        <Container
          info={DATA}
          compareScore={compareScore}
          informRepetition={setIsRepeated}
        />
      ) : (
        <div>Game over</div>
      )}
      <Footer />
    </>
  );
}
