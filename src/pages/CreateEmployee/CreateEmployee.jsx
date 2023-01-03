import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../../feature/employee.slice";

import { useForm } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import states from "../../data/states";
import departments from "../../data/departments";

import Modal from "react-modal-component-library";
import "react-modal-component-library/dist/index.css";
import "./CreateEmployee.css";

function CreateEmployee() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employeeList.employee);

    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
        reset,
    } = useForm();

    const [birthDate, setBirthDate] = useState(null);
    const [startingDate, setStartingDate] = useState(null);
    const [stateName, setStateName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const saveEmployee = () => {
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const street = document.getElementById("street");
        const city = document.getElementById("city");
        const zipCode = document.getElementById("zip-code");

        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: birthDate,
            startDate: startingDate,
            department: departmentName,
            street: street.value,
            city: city.value,
            state: stateName,
            zipCode: zipCode.value,
        };

        dispatch(createEmployee([...employees, employee]));
        console.log(employees);

        setModalVisible(true);
    };

    // To reset after check
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                firstname: "",
                lastname: "",
                dateBirth: setBirthDate(null),
                startDate: setStartingDate(null),
                street: "",
                city: "",
                state: setStateName(""),
                zipcode: "",
                department: setDepartmentName(""),
            });
        }
    }, [formState, reset]);

    return (
        <main>
            <div className="container container-form">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        {...register("firstname", {
                            required: {
                                value: true,
                                message: "Firstname required",
                            },
                            pattern: {
                                value: /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]+$/,
                                message: "Don't use a number or special characters",
                            },
                            minLength: {
                                value: 2,
                                message: "More than 2 characters are required",
                            },
                        })}
                    />
                    {errors.firstname && <p className="error-text">{errors.firstname.message}</p>}

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        {...register("lastname", {
                            required: {
                                value: true,
                                message: "Lastname required",
                            },
                            pattern: {
                                value: /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]+$/,
                                message: "Don't use a number or special characters",
                            },
                            minLength: {
                                value: 2,
                                message: "More than 2 characters are required",
                            },
                        })}
                    />
                    {errors.lastname && <p className="error-text">{errors.lastname.message}</p>}

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker
                        className="date-of-birth"
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    {...register("dateBirth", { required: true, value: { birthDate } })}
                                />
                            );
                        }}
                        onChange={(birthDateValue) => {
                            setBirthDate(new Date(birthDateValue).toDateString());
                            errors.dateBirth = false;
                        }}
                        value={birthDate}
                        views={["year", "month", "day"]}
                    />
                    {errors.dateBirth && <p className="error-text">Date of birth required</p>}

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        className="start-date"
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    {...register("startDate", { required: true, value: { startingDate } })}
                                />
                            );
                        }}
                        onChange={(startDateValue) => {
                            setStartingDate(new Date(startDateValue).toDateString());
                            errors.startDate = false;
                        }}
                        value={startingDate}
                        views={["year", "month", "day"]}
                    />
                    {errors.startDate && <p className="error-text">Start date required</p>}

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            {...register("street", {
                                required: {
                                    value: true,
                                    message: "Street required",
                                },
                                minLength: {
                                    value: 5,
                                    message: "More than 5 characters are required",
                                },
                            })}
                        />
                        {errors.street && <p className="error-text">{errors.street.message}</p>}

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: "City required",
                                },
                                pattern: {
                                    value: /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]+$/,
                                    message: "Don't use a number or special characters",
                                },
                                minLength: {
                                    value: 2,
                                    message: "More than 2 characters are required",
                                },
                            })}
                        />
                        {errors.city && <p className="error-text">{errors.city.message}</p>}

                        <label htmlFor="state">State</label>
                        <Select
                            id="state"
                            value={stateName}
                            onChange={(event) => {
                                setStateName(event.target.value);
                                if (event.target.value !== " ") {
                                    errors.state = false;
                                }
                            }}
                            displayEmpty
                        >
                            <MenuItem disabled value="">
                                -- Select a state --
                            </MenuItem>
                            {states.map((state) => (
                                <MenuItem
                                    key={state.abbreviation}
                                    value={state.abbreviation}
                                    {...register("state", { required: true })}
                                >
                                    {state.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors.state && <p className="error-text">State required</p>}

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            {...register("zipcode", {
                                required: {
                                    value: true,
                                    message: "Zip Code required",
                                },
                                pattern: {
                                    value: /^\d{5}?$/,
                                    message: "5 numbers are required",
                                },
                            })}
                        />
                        {errors.zipcode && <p className="error-text">{errors.zipcode.message}</p>}
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Select
                        id="department"
                        value={departmentName}
                        onChange={(e) => {
                            setDepartmentName(e.target.value);
                            if (e.target.value !== " ") {
                                errors.department = false;
                            }
                        }}
                        displayEmpty
                    >
                        <MenuItem disabled value="">
                            -- Select a department --
                        </MenuItem>
                        {departments.map((department) => (
                            <MenuItem
                                key={department}
                                value={department}
                                {...register("department", { required: true })}
                            >
                                {department}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.department && <p className="error-text">Department required</p>}
                </form>

                <button type="submit" className="button-submit" onClick={handleSubmit(saveEmployee)}>
                    Save
                </button>
            </div>

            {modalVisible && <Modal text="Employee Created !" closeModal={closeModal} />}
        </main>
    );
}

export default CreateEmployee;
