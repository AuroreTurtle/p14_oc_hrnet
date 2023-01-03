import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "../components/Header/Header";
import Home from "./Home/Home";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import EmployeeList from "./EmployeeList/EmployeeList";
import Footer from "../components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/create-employee" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                </Routes>
                <Footer />
            </LocalizationProvider>
        </BrowserRouter>
    );
}

export default App;
