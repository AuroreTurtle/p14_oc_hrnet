import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../../feature/employee.slice";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

import states from "../../data/states";
import departments from "../../data/departments";

import Modal from "react-modal-component-library";
import "react-modal-component-library/dist/index.css";
import "./CreateEmployee.css";

function CreateEmployee() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employeeList.employee);

    const [birthDate, setBirthDate] = useState(new Date());
    const [startingDate, setStartingDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const saveEmployee = (e) => {
        e.preventDefault();

        const form = document.getElementById("create-employee");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const department = document.getElementById("department");
        const street = document.getElementById("street");
        const city = document.getElementById("city");
        const state = document.getElementById("state");
        const zipCode = document.getElementById("zip-code");

        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: new Date(birthDate).toDateString(),
            startDate: new Date(startingDate).toDateString(),
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value,
        };

        dispatch(createEmployee([...employees, employee]));
        console.log(employees);

        setModalVisible(true);

        form.reset();
    };

    return (
        <main>
            <div className="container container-form">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker
                        className="date-of-birth"
                        renderInput={(params) => {
                            return <TextField {...params} />;
                        }}
                        onChange={(birthDateValue) => setBirthDate(birthDateValue)}
                        value={birthDate}
                        views={["year", "month", "day"]}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        className="start-date"
                        renderInput={(params) => {
                            return <TextField {...params} />;
                        }}
                        onChange={(startDateValue) => setStartingDate(startDateValue)}
                        value={startingDate}
                        views={["year", "month", "day"]}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            {states.map((state) => (
                                <option key={state.abbreviation} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        {departments.map((department) => (
                            <option key={department}>{department}</option>
                        ))}
                    </select>
                </form>

                <button type="submit" className="button-submit" onClick={saveEmployee}>
                    Save
                </button>
            </div>

            {modalVisible && <Modal text="Employee Created !" closeModal={closeModal} />}
        </main>
    );
}

export default CreateEmployee;
