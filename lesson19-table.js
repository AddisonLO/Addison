const headers = ["header1", "header2", "header3"];
const rowItem = ["hi", "hello", "what's up"];


function createTable(data, headers) {
    const table = document.createElement("table");
    table.className = "data-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const row = document.createElement("tr");

    data.forEach(item => {
        const td = document.createElement("td");
        td.textContent = item;
        row.appendChild(td);
    });

    tbody.appendChild(row);
    table.appendChild(tbody);

    return table;

}

document.getElementById("target-div").appendChild(createTable(rowItem, headers));


const studentData = [
    {name: "Peter", age: 18, grade: "A"},
    {name: "John", age: 18, grade: "B"},
    {name: "Tim", age: 18, grade: "C"}
];

const studentHeaders = ['Name', 'Age', 'Grade'];

function createStudentTable(records, headers) {
    const table = document.createElement("table");
    table.className = "student-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headRow.appendChild(th);
    })

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    

    records.forEach(record => {
        const tr = document.createElement("tr");
        Object.values(record).forEach( value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
}

const table = document.getElementById("table2").appendChild(createStudentTable(studentData, studentHeaders));