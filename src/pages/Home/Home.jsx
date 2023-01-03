import { Link } from "react-router-dom";
import "./Home.css";
import IconAddEmployee from "../../assets/icon-add-employee.png";
import IconListEmployee from "../../assets/icon-list-employee.png";

function Home() {
    return (
        <main>
            <div className="container container-home">
                <h2>Welcome to HRnet</h2>
                <p>With HRnet, you can :</p>
                <div className="features">
                    <Link to="/create-employee" className="link">
                        <div className="feature-item">
                            <img className="feature-icon" src={IconAddEmployee} alt="Icon add employee" />
                            <p>Create an employee</p>
                        </div>
                    </Link>

                    <Link to="/employee-list" className="link">
                        <div className="feature-item">
                            <img className="feature-icon" src={IconListEmployee} alt="Icon list employee" />
                            <p>View all employees</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
