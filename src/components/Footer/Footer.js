import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.github}></div>
        <span className={styles.name}>DasTapan</span>
      </div>
    </div>
  );
}

export default Footer;
