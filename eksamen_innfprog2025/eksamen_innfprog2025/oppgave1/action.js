function renderEmployeeCard(i) {
    const emp = employees[i];
    if (!emp) return "Ansatt ikke funnet";

    return `
        <div>
            <h3>${emp.firstname} ${emp.lastname}</h3>
            <p>Stilling: ${positions[emp.position]}</p>
        </div>
    `;
}

function listAllEmployees() {
    return employees.map((_, i) => renderEmployeeCard(i)).join("");
}

function filterByPosition(pos) {
    const index = positions.indexOf(pos);
    return employees
        .map((emp, i) => emp.position === index ? renderEmployeeCard(i) : "")
        .join("");
}

function filterInstructors() {
    return employees
        .map((emp, i) =>
            (emp.position === 0 || emp.position === 4) ? renderEmployeeCard(i) : ""
        )
        .join("");
}

function filterAdministration() {
    return employees
        .map((emp, i) =>
            (emp.position !== 0 && emp.position !== 4) ? renderEmployeeCard(i) : ""
        )
        .join("");
}