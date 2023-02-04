const container = document.querySelector('#container');

const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', buildGrid);

const gridContainer = document.createElement('div');







let gridSize = 30;
let backgroundColor = 'green';

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


//////// Background color change



const backgroundColorInput = document.querySelector('#background-color-input');
const backgroundColorSubmit = document.querySelector('#background-color-submit');

backgroundColorSubmit.addEventListener('click', changeBackgroundColor);



function changeBackgroundColor(){
	backgroundColor = backgroundColorInput.value;
    return backgroundColor;
};

changeBackgroundColor();




function selectBackgroundColor(){
    let background =  document.querySelectorAll('.grid-item');
    background.style.background = `${changeBackgroundColor()}`;
};
        



////// Rainbow/random color


let hue = randomHue();
let saturation = 80;
let lightness = 80;


function randomHue() {
    let hue = Math.floor(Math.random() * 360) + 1;
    return hue;
}

function randomColor() {
    let result = ('hsl(' + randomHue() + ' ' + saturation + '% ' + lightness + '%)').toString();
    return result;
}

/////////// Pen color change


let penColor = `${randomColor()}`;

const penColorInput = document.querySelector('#pen-color-input');
const penColorSubmit = document.querySelector('#pen-color-submit');

penColorSubmit.addEventListener('click', changePenColor);



function changePenColor(){
	penColor = penColorInput.value;
    if (penColor == 'rainbow') {
        return randomColor();
    } else return penColor;
};

changePenColor();


//////// Hover grid item color change

function hoverColor(){
    let gridItems =  document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = `${changePenColor()}`;
        });

    });
};








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