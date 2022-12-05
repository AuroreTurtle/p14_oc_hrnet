import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import EmployeeList from "./EmployeeList/EmployeeList";
import Footer from "../components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
