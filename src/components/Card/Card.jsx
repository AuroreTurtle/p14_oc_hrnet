import "./Card.css";

function Card({ firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department }) {
    return (
        <div id="employee-card">
            <h3>
                {firstName} {lastName}
            </h3>
            <p>Date of Birth : {dateOfBirth}</p>
            <p>Start Date : {startDate}</p>
            <p>
                Address : {street} {city} {state} {zipCode}
            </p>
            <p>Department : {department}</p>
        </div>
    );
}

export default Card;
