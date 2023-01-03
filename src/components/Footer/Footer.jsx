import "./Footer.css";
import LogoWH from "../../assets/logo-WealthHealth.png";

/**
 * It returns React Component that displays the footer.
 * @returns A React component.
 */
function Footer() {
    return (
        <footer>
            <img className="footer-logo" src={LogoWH} alt="Logo Wealth Health" />
            <p className="footer-text">Copyright 2022 HRnet</p>
        </footer>
    );
}

export default Footer;
