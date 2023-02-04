const container = document.querySelector('#container');

const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', buildGrid);

const gridContainer = document.createElement('div');

let gridSize = 4;

createGridContainer();
addGridItems();
addGridProperty();
hoverColor();


function userGridSize () {    
    while (true) {
    gridSize = parseInt(prompt('Enter number of grid squares on each side'));
    if (gridSize <= 100) {
        break
    }
    else if (gridSize > 100) {
        alert('You trying to break the app? Enter a number less than 100 you fool!');
    }
    break;
};
};





function createGridContainer() {    
    gridContainer.classList.add('grid-container');
    gridContainer.style.height = '500px';
    gridContainer.style.width = '500px';
    gridContainer.style.justifyContent = 'center';
    gridContainer.style.display = 'grid';
    container.appendChild(gridContainer);
}

function removeGridItems() {
    const myNode = document.querySelector('.grid-container');
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    
}

function addGridItems(){
    for (i = 0; i < (gridSize**2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
        };
}

function addGridProperty(){
    const gridCol = `repeat(${gridSize}, 1fr [col-line]`;
    const gridRow = `repeat(${gridSize}, 1fr [row-line]`;
    gridContainer.style.setProperty('grid-template-columns', gridCol);
    gridContainer.style.setProperty('grid-template-rows', gridRow);

}







function randomHue() {
    let hue = Math.floor(Math.random() * 360) + 1;
    return hue;
}



let hue = randomHue();
let saturation = 80;
let lightness = 80;

/*

function lightnessDec(){
    lightness = lightness - 10;
    return lightness;
}

*/

function randomColor() {
    let result = ('hsl(' + randomHue() + ' ' + saturation + '% ' + lightness + '%)').toString();
    return result;
}



function hoverColor(){
    let gridItems =  document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = randomColor();
        });

    });
};

/*

function hoverColor(){
    let gridItems =  document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'blue';
        });

    });
};

*/

function buildGrid () {
    removeGridItems();
    gridContainer.remove();
    userGridSize();
    createGridContainer();
    addGridProperty()
    addGridItems();
    hoverColor();

};

///////////////////////////////////////// Unused code ///////////////////////////////////////////

/*

function buildGrid () {
    removeGridItems();
    gridContainer.remove();
    createGridContainer();
    addGridProperty()

    const gridCol = `repeat(${gridSize}, 1fr [col-line]`;
    const gridRow = `repeat(${gridSize}, 1fr [row-line]`;
    gridContainer.style.removeProperty('grid-template-columns');
    gridContainer.style.removeProperty('grid-template-rows');
    gridContainer.style.setProperty('grid-template-columns', gridCol);
    gridContainer.style.setProperty('grid-template-rows', gridRow);
    for (i = 0; i < (gridSize**2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
        };
    

};

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++){

    }
}

*/