import { Link } from "react-router-dom";
import "./Header.css";
import LogoHRnet from "../../assets/logo-HRnet.png";

/**
 * It returns React Component that displays the header.
 * @returns A React component.
 */
function Header() {
    return (
        <header>
            <Link to="/">
                <img className="header-logo" src={LogoHRnet} alt="Logo HRnet" />
                <h1 className="sr-only">HRnet</h1>
            </Link>

            <nav>
                <Link to="/create-employee" className="link header-link version-desktop">
                    Create Employees
                </Link>
                <Link to="/create-employee" className="link header-link version-mobile">
                    <i className="fa-solid fa-user-plus"></i>
                </Link>

                <Link to="/employee-list" className="link header-link version-desktop">
                    View Current Employees
                </Link>
                <Link to="/employee-list" className="link header-link version-mobile">
                    <i className="fa-solid fa-users"></i>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
