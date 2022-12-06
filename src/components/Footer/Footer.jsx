import "./Footer.css";
import LogoWH from "../../assets/logo-WealthHealth.png";

function Footer() {
    return (
        <footer>
            <img className="footer-logo" src={LogoWH} alt="Logo Wealth Health" />
            <p className="footer-text">Copyright 2022 HRnet</p>
        </footer>
    );
}

export default Footer;
