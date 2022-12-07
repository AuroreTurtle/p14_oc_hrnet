import "./EmployeeList.css";

function EmployeeList() {
    return (
        <main>
            <div id="employee-div" className="container container-table">
                <h2>Current Employees</h2>
                <table id="employee-table" className="display"></table>
            </div>
        </main>
    );
}

export default EmployeeList;
