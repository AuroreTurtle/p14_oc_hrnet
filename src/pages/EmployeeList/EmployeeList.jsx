import React, { useMemo } from "react";
import { useSelector } from "react-redux";

// Component of the Material React Table library
import MaterialReactTable from "material-react-table";

import Card from "../../components/Card/Card";

import "./EmployeeList.css";

/**
 * It returns React Component that displays a list of employees in table.
 * @returns A React component.
 */
function EmployeeList() {
    const employees = useSelector((state) => state.employeeList.employee);
    const columns = useMemo(
        () => [
            {
                accessorKey: "firstName",
                header: "First Name",
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
            },
            {
                accessorKey: "startDate",
                header: "Start Date",
            },
            {
                accessorKey: "department",
                header: "Department",
            },
            {
                accessorKey: "dateOfBirth",
                header: "Date of Birth",
            },
            {
                accessorKey: "street",
                header: "Street",
            },
            {
                accessorKey: "city",
                header: "City",
            },
            {
                accessorKey: "state",
                header: "State",
            },
            {
                accessorKey: "zipCode",
                header: "Zip Code",
            },
        ],
        []
    );

    return (
        <main>
            <div id="employee-div" className="container container-table">
                <h2>Current Employees</h2>
                <div id="table-employees" className="version-desktop">
                    <MaterialReactTable columns={columns} data={employees} />
                </div>

                <div id="table-employees" className="version-mobile">
                    {employees.map((employee) => (
                        <Card
                            key={`${employee.firstName + "-" + employee.lastName}`}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            dateOfBirth={employee.dateOfBirth}
                            startDate={employee.startDate}
                            street={employee.street}
                            city={employee.city}
                            state={employee.state}
                            zipCode={employee.zipCode}
                            department={employee.department}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default EmployeeList;
