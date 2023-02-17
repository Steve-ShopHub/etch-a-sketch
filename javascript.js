const container = document.querySelector('#container');

const changeGridSlide = document.querySelector('#change-grid');
changeGridSlide.addEventListener('input', buildGrid); // changed from 'click'

const output = document.querySelector(".change-grid-output");

output.textContent = changeGridSlide.value;

changeGridSlide.addEventListener('input', () => {
    output.textContent = changeGridSlide.value;
});

const gridContainer = document.createElement('div');







let gridSize = 50;


createGridContainer();
addGridItems();
addGridProperty();

hoverColor();


function userGridSize () {    
    while (true) {
    gridSize = changeGridSlide.value;
    if (gridSize <= 100) {
        break
    }
    // else if (gridSize > 100) {
    //     alert('You trying to break the app? Enter a number less than 100 you fool!');
    // }
    break;
};
};



/*

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

*/




function createGridContainer() {    
    gridContainer.classList.add('grid-container');
    gridContainer.style.height = '500px';
    gridContainer.style.width = '500px';
    gridContainer.style.justifyContent = 'center';
    gridContainer.style.display = 'grid';
    gridContainer.style.border = 'solid 2px black';
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

/*

let backgroundColor = 'green';

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
        
*/


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

/////////// Testing color picker HTML ^^ (replaces 'pen color change' commented out below)


let penColor = `${randomColor()}`;

const penColorInput = document.querySelector('#color');
const penColorSubmit = document.querySelector('#submit');

penColorSubmit.addEventListener('click', changePenColor);



function changePenColor(){
	penColor = penColorInput.value;
    if (penColor == 'rainbow') {
        return randomColor();
    } else return penColor;
};

changePenColor();


/* ///////////////

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


*/

//////// Hover grid item color change

function hoverColor(){
    let gridItems =  document.querySelectorAll('.grid-item');
    let isMouseDown = false;
    
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mousedown', () => {
            isMouseDown = true;
          });
          
          gridItem.addEventListener('mouseup', () => {
            isMouseDown = false;
          });
          
          gridItem.addEventListener('mouseover', () => {
            if (isMouseDown) {
              // Change the color of the grid item
              gridItem.style.backgroundColor = `${changePenColor()}`;
            }
          });
          
          gridItem.addEventListener('click', () => {
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