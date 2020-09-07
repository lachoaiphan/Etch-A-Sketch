document.addEventListener('DOMContentLoaded', () => {
    let grid = document.getElementById('grid');
    let borderSize = 2;
    let gridSize = 16;
    let curColor = 'rgb(0, 0, 0)';

    function initializePad() {
        initializeBtns();
        initializeGrid();
    }

    function initializeGrid() {
        for (let i = 0; i < gridSize * gridSize; i++) {
            let gridBox = createGridBox();
            grid.appendChild(gridBox);
        }
    }

    function initializeBtns() {
        const btnClasses = ['.reset-btn', '.resize-btn', '.color-btn']
        const btnFunctions = [resetGridColor, resizeGrid, setRandomColor];
        for (let i = 0; i < btnFunctions.length; i++) {
            let curBtn = document.querySelector(btnClasses[i]);
            curBtn.addEventListener('click', btnFunctions[i]);
        }
    }

    function resetGridColor() {
        let gridBoxes = Array.from(document.querySelectorAll('.box'));

        for (let i = 0; i < gridBoxes.length; i++) {
            gridBoxes[i].style.backgroundColor = '';
        }
    }

    function setRandomColor() {
        const colors = [Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255)];

        curColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
    }

    function resizeGrid() {
        gridSize = prompt('Enter the grid size (1 - 64): ').toString();

        if (gridSize >= 1 && gridSize <= 64) {
            removeGrid();
            initializeGrid();
        }
    }

    function removeGrid() {
        while (grid.firstChild) grid.removeChild(grid.firstChild);
    }

    function createGridBox() {
        let gridWidth = (grid.clientWidth / gridSize).toString();
        let gridHeight = (grid.clientHeight / gridSize).toString();
        

        let gridBox = document.createElement('div');
        gridBox.style.width = `${(gridWidth - borderSize)}px`;
        gridBox.style.height = `${(gridHeight - borderSize)}px`;
        gridBox.classList.add('box');

        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = curColor;
        });

        return gridBox;
    }

    initializePad();
})

// Problem: Create a sketchpad in website
// 1. Create web application using JavaScript rendering (grid of square divs)
// 1.1. Probably utilize flexbox to create the grid
// 1.2 Ensure that borders do not affect the size of the containers
// 2. Create functionality of web application using hover and changing colors
// 3.