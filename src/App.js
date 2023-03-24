import Header from "./components/Header/Header";
import Wrapper from "./components/CardContainer/Wrapper";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
