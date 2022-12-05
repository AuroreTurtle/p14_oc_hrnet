import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <Link to="/">
                <img className="header-logo" src={Logo} alt="Logo HRnet" />
            </Link>
            <h1>HRnet</h1>
            <Link to="/employee-list" className="header-link header-desktop">
                View Current Employees
            </Link>
            <Link to="/employee-list" className="header-link header-mobile">
                <i className="fa-solid fa-users"></i>
            </Link>
        </header>
    );
}

export default Header;
