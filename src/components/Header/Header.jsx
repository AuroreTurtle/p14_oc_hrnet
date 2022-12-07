import { Link } from "react-router-dom";
import "./Header.css";
import LogoHRnet from "../../assets/logo-HRnet.png";

function Header() {
    return (
        <header>
            <Link to="/">
                <img className="header-logo" src={LogoHRnet} alt="Logo HRnet" />
                <h1 className="sr-only">HRnet</h1>
            </Link>
            <nav>
                <Link to="/" className="header-link header-desktop">
                    Create Employees
                </Link>
                <Link to="/" className="header-link header-mobile">
                    <i className="fa-solid fa-user-plus"></i>
                </Link>

                <Link to="/employee-list" className="header-link header-desktop">
                    View Current Employees
                </Link>
                <Link to="/employee-list" className="header-link header-mobile">
                    <i className="fa-solid fa-users"></i>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
