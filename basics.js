const container = document.getElementById("container");
let isPainting = false;
let newGridH = 16;
let newGridW = 16; 

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(newGridH);
    makeColumns(newGridW);
}

// Creates rows
function makeRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        container.appendChild(row);
    }
}

// Creates columns
function makeColumns(cellNum) {
    const rows = document.getElementsByClassName("gridRow");
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            newCell.addEventListener("mousedown", startPainting); // Mouse down event
            newCell.addEventListener("mouseover", paint); // Mouse over event
            rows[i].appendChild(newCell);
        }
    }
}

function startPainting() {
    isPainting = true;
}

function paint(event) {

    if (isPainting) {
        let colorSelect = document.getElementById("color");
        let color = colorSelect.value;
        event.target.style.backgroundColor = color; // Change color while painting
    }
}

// Stop painting when mouse is released
window.addEventListener("mouseup", () => {
    isPainting = false;
});
// Create the grid
defaultGrid();

function changeGrid() {
    let button = document.getElementById("button")
    button.addEventListener("click", () => {
        let userInputH = parseInt(prompt("select height of the new grid"));
        newGridH = userInputH;
        let userInputW = parseInt(prompt("select width of the new grid"));
        newGridW = userInputW;

        if (newGridH <= 100 && newGridW <= 100) {
            container.innerHTML = "";
            defaultGrid();
        }
        else {
            alert("please provide a positive integer of height and width")
        }
        return newGridH, newGridW;
    })
    }
changeGrid();


