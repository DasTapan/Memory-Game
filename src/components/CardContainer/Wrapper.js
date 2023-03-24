import Container from "./Container";

import Abigail from "../assets/pics/Abigail.jpeg";
import Arthur from "../assets/pics/Arthur.jpeg";
import Bill from "../assets/pics/Bill.jpeg";
import Charles from "../assets/pics/Charles.jpeg";
import Dutch from "../assets/pics/Dutch.jpeg";
import HerrStrauss from "../assets/pics/Herr-Strauss.jpeg";
import Hosea from "../assets/pics/Hosea.jpeg";
import Jack from "../assets/pics/Jack.jpeg";
import Javier from "../assets/pics/Javier.jpeg";
import John from "../assets/pics/John.jpeg";
import Karen from "../assets/pics/Karen.jpeg";
import MaryBeth from "../assets/pics/Mary-Beth.jpeg";
import MicahBell from "../assets/pics/Micah-Bell.jpeg";
import Molly from "../assets/pics/Molly.jpeg";
import MrPearson from "../assets/pics/Mr-Pearson.jpeg";
import MrTrelawney from "../assets/pics/Mr-Trelawney.jpeg";
import Reverend from "../assets/pics/Reverend-Swanson.jpeg";
import Sean from "../assets/pics/Sean.jpeg";
import Susan from "../assets/pics/Susan.jpeg";
import Tilly from "../assets/pics/Tilly.jpeg";
import Uncle from "../assets/pics/Uncle.jpeg";

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

const people = DATA.slice(0, 15);

function Wrapper() {
  return <Container people={people} />;
}

export default Wrapper;
