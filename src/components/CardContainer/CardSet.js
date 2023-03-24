import Card from "./Card";
import nameStyles from "../styles/Name.module.css";
import picStyles from "../styles/Pic.module.css";

function Pic({ localClass }) {
  return <div className={localClass}></div>;
}

function Name({ localClass, value }) {
  return <span className={localClass}>{value}</span>;
}

const CardSet = [
  <Card id={1}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Abigail" />
  </Card>,
  <Card id={2}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Arthur" />
  </Card>,
  <Card id={3}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Bill" />
  </Card>,
  <Card id={4}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Charles" />
  </Card>,
  <Card id={5}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Dutch" />
  </Card>,
  <Card id={6}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Herr-Strauss" />
  </Card>,
  <Card id={7}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Hosea" />
  </Card>,
  <Card id={8}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Jack" />
  </Card>,
  <Card id={9}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Javier" />
  </Card>,
  <Card id={10}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="John" />
  </Card>,
  <Card id={11}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Karen" />
  </Card>,
  <Card id={12}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Mary Beth" />
  </Card>,
  <Card id={13}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Micah Bell" />
  </Card>,
  <Card id={14}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Molly" />
  </Card>,
  <Card id={15}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Mr Pearson" />
  </Card>,
  <Card id={16}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Mr Trelawney" />
  </Card>,
  <Card id={17}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Reverend" />
  </Card>,
  <Card id={18}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Sean" />
  </Card>,
  <Card id={19}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Susan" />
  </Card>,
  <Card id={20}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Tilly" />
  </Card>,
  <Card id={21}>
    <Pic localClass={picStyles.pic} />
    <Name localClass={nameStyles.name} value="Uncle" />
  </Card>,
];

export default CardSet;
