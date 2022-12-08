import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee.slice";

const store = configureStore({
    reducer: { employeeList: employeeReducer },
});

export default store;
