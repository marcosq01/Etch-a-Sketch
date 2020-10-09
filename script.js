let gridSize = 16;


function generateCells(val) {
    const grid = document.querySelector("#grid");
    grid.style.gridTemplateColumns = `repeat(${val}, auto)`;
    grid.style.gridTemplateRows = `repeat(${val}, auto)`;

    console.log(grid);


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

generateCells(gridSize);
fillBlackWhite();

const bwButton = document.querySelector('#blackWhite');
const rainbowButton = document.querySelector('#rainbow');

bwButton.addEventListener('click', fillBlackWhite);
rainbowButton.addEventListener('click', fillRainbow);

