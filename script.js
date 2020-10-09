// let gridSize = 16;
// let currentFillColor = null;

function generateCells(val) {
    const grid = document.querySelector("#grid");
    // makes the grid have val x val size
    grid.style.gridTemplateColumns = `repeat(${val}, auto)`;
    grid.style.gridTemplateRows = `repeat(${val}, auto)`;

    console.log(grid);

    // creates divs
    let numCells = val * val;
    console.log(numCells);
    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

function fillBlackWhite() {
    const cells = document.querySelectorAll('.cell');
    currentFillColor = fillBlackWhite;
    cells.forEach(cell => {
        console.log(cell);
        cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = 'black';
        })
    });
}

function randomRGBNumber() {
    return Math.floor(Math.random() * 256);
}

function fillRainbow () {
    const cells = document.querySelectorAll('.cell');
    currentFillColor = fillRainbow;
    cells.forEach(cell => {
        console.log(cell);
        cell.addEventListener('mouseover', e => {
            let r = randomRGBNumber();
            let g = randomRGBNumber();
            let b = randomRGBNumber();
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

function fillWhiteToBlack() {
    const cells = document.querySelectorAll('.cell');
    currentFillColor = fillWhiteToBlack;

    cells.forEach(cell => {
        console.log(cell);
        cell.addEventListener('mouseover', e => {
            console.log(cell.style.backgroundColor);
            // cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

function clearGrid() {
    const grid = document.querySelector('#grid');

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function clearCells() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.style.backgroundColor = '#FFFFFF';
    });
}

function resizeGrid() {
    let newSize = parseInt(prompt('Type in number of cells per row and colum (integer between 1 - 100): ', '16'));
    if (isNaN(newSize)) {
        alert('Input must be an integer!');
        return;
    } else if (newSize < 1 || newSize > 100) {
        alert('The number has to be between 1-100 !');
    } else {
        clearGrid();
        generateCells(newSize);
        currentFillColor();
    } 
}

let gridSize = 16;

// sets the default color of the cells
let currentFillColor = null;
generateCells(gridSize);
fillBlackWhite();

// color buttons 
const bwButton = document.querySelector('#blackWhite');
const rainbowButton = document.querySelector('#rainbow');
const whiteToBlackButton = document.querySelector('#whiteToBlack');

// clear the grid without changing size of grid
const clearGridButton = document.querySelector('#clearGrid');

// clears and resizes the grid
const resizeButton = document.querySelector('#resizeButton');

// listeners
resizeButton.addEventListener('click', resizeGrid);
bwButton.addEventListener('click', fillBlackWhite);
rainbowButton.addEventListener('click', fillRainbow);
whiteToBlackButton.addEventListener('click', fillWhiteToBlack);
clearGridButton.addEventListener('click', clearCells);