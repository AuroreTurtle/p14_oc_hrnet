import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employeeList",
    initialState: {
        employee: [],
    },
    reducers: {
        createEmployee: (state, action) => {
            state.employee = action.payload;
        },
    },
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
