import "../styles/Footer.scss";
import gitHubIcon from "../assets/icons/github-icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <a href="https://github.com/DasTapan" className="github">
          <img src={gitHubIcon} alt="github-icon" />
        </a>
        <span className="name">DasTapan</span>
      </div>
    </div>
  );
}

export default Footer;
