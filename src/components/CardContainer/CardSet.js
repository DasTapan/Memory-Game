import Card from "./Card";
import nameStyles from "../styles/Name.module.css";
import picStyles from "../styles/Pic.module.css";

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

function Pic({ localClass, person }) {
  return (
    <div
      className={localClass}
      style={{ backgroundImage: `url(${person})` }}
    ></div>
  );
}

function Name({ localClass, value }) {
  return <span className={localClass}>{value}</span>;
}

const people = [
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

const CardSet = [
  <Card id={1}>
    <Pic localClass={picStyles.pic} person={Abigail} />
    <Name localClass={nameStyles.name} value="Abigail" />
  </Card>,
  <Card id={2}>
    <Pic localClass={picStyles.pic} person={Arthur} />
    <Name localClass={nameStyles.name} value="Arthur" />
  </Card>,
  <Card id={3}>
    <Pic localClass={picStyles.pic} person={Bill} />
    <Name localClass={nameStyles.name} value="Bill" />
  </Card>,
  <Card id={4}>
    <Pic localClass={picStyles.pic} person={Charles} />
    <Name localClass={nameStyles.name} value="Charles" />
  </Card>,
  <Card id={5}>
    <Pic localClass={picStyles.pic} person={Dutch} />
    <Name localClass={nameStyles.name} value="Dutch" />
  </Card>,
  <Card id={6}>
    <Pic localClass={picStyles.pic} person={HerrStrauss} />
    <Name localClass={nameStyles.name} value="Herr-Strauss" />
  </Card>,
  <Card id={7}>
    <Pic localClass={picStyles.pic} person={Hosea} />
    <Name localClass={nameStyles.name} value="Hosea" />
  </Card>,
  <Card id={8}>
    <Pic localClass={picStyles.pic} person={Jack} />
    <Name localClass={nameStyles.name} value="Jack" />
  </Card>,
  <Card id={9}>
    <Pic localClass={picStyles.pic} person={Javier} />
    <Name localClass={nameStyles.name} value="Javier" />
  </Card>,
  <Card id={10}>
    <Pic localClass={picStyles.pic} person={John} />
    <Name localClass={nameStyles.name} value="John" />
  </Card>,
  <Card id={11}>
    <Pic localClass={picStyles.pic} person={Karen} />
    <Name localClass={nameStyles.name} value="Karen" />
  </Card>,
  <Card id={12}>
    <Pic localClass={picStyles.pic} person={MaryBeth} />
    <Name localClass={nameStyles.name} value="Mary Beth" />
  </Card>,
  <Card id={13}>
    <Pic localClass={picStyles.pic} person={MicahBell} />
    <Name localClass={nameStyles.name} value="Micah Bell" />
  </Card>,
  <Card id={14}>
    <Pic localClass={picStyles.pic} person={Molly} />
    <Name localClass={nameStyles.name} value="Molly" />
  </Card>,
  <Card id={15}>
    <Pic localClass={picStyles.pic} person={MrPearson} />
    <Name localClass={nameStyles.name} value="Mr Pearson" />
  </Card>,
  <Card id={16}>
    <Pic localClass={picStyles.pic} person={MrTrelawney} />
    <Name localClass={nameStyles.name} value="Mr Trelawney" />
  </Card>,
  <Card id={17}>
    <Pic localClass={picStyles.pic} person={Reverend} />
    <Name localClass={nameStyles.name} value="Reverend" />
  </Card>,
  <Card id={18}>
    <Pic localClass={picStyles.pic} person={Sean} />
    <Name localClass={nameStyles.name} value="Sean" />
  </Card>,
  <Card id={19}>
    <Pic localClass={picStyles.pic} person={Susan} />
    <Name localClass={nameStyles.name} value="Susan" />
  </Card>,
  <Card id={20}>
    <Pic localClass={picStyles.pic} person={Tilly} />
    <Name localClass={nameStyles.name} value="Tilly" />
  </Card>,
  <Card id={21}>
    <Pic localClass={picStyles.pic} person={Uncle} />
    <Name localClass={nameStyles.name} value="Uncle" />
  </Card>,
];

export default CardSet;
export { people };
