
const MOUNTAINS = [
{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
{name: "Everest", height: 8848, place: "Nepal"},
{name: "Mount Fuji", height: 3776, place: "Japan"},
{name: "Vaalserberg", height: 323, place: "Netherlands"},
{name: "Denali", height: 6168, place: "United States"},
{name: "Popocatepetl", height: 5465, place: "Mexico"},
{name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function buildTable(data) {
const table = document.createElement('table');

// Create header row
const headerRow = document.createElement('tr');
const columns = Object.keys(data[0]);

columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
});

table.appendChild(headerRow);

// Create data rows
data.forEach(item => {
    const row = document.createElement('tr');
    columns.forEach(col => {
    const cell = document.createElement('td');
    cell.textContent = item[col];
    
    // Right-align number values
    if (typeof item[col] === 'number') {
        cell.style.textAlign = 'right';
    }
    
    row.appendChild(cell);
    });
    table.appendChild(row);
});

return table;
}

const container = document.getElementById('mountains');
container.appendChild(buildTable(MOUNTAINS));