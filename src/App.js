import Header from "./components/Header/Header";
import Container from "./components/CardContainer/Container";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
