const frame = document.querySelector('.window');
const clearBtn = document.querySelector('.btn-container')
const bigBtn = document.querySelector('.big');
const mediumBtn = document.querySelector('.medium');
const smallBtn = document.querySelector('.small');
const colorBtn = document.querySelector('.color');
const eraseBtn = document.querySelector('.erase');
const fillColor = document.querySelector('.fill');

function generateBlockType(name, classType, size, clicked) {
  this.name = name;
  this.classType = classType;
  this.size = size;
  this.clicked = clicked;
}

const bigBlock = new generateBlockType("bigBlock", 'big-block', 256, false);
const mediumBlock = new generateBlockType("mediumBlock", 'medium-block', 1024, false);
const smallBlock = new generateBlockType("smallBlock", 'small-block', 4096, false);

function blockColor(block) {
  if (clickedRainbow) {
    block.style.backgroundColor = randomColor();
    block.classList.remove('fill-black');
  } else if (clickedErase) {
    block.style.backgroundColor = '#e8e8e8';
    block.classList.remove('fill-rainbow');
    block.classList.remove('fill-black');
  } else {
    block.style.backgroundColor = 'black';
    block.classList.remove('fill-rainbow');
    block.classList.remove('fill-black');
    block.classList.add('fill-black');
  }
}

function generateGrid(classType, size) {
  for (let i = 1; i <= size; i += 1) {
    const block = document.createElement('div');
    block.classList.add(classType)
    frame.appendChild(block);

    block.addEventListener('mouseenter', () => {
      blockColor(block);
    }, true);
  }
}

function createGridSize() {
  if (bigBlock.clicked) {
    generateGrid(bigBlock.classType, bigBlock.size);
  } else if (mediumBlock.clicked) {
    generateGrid(mediumBlock.classType, mediumBlock.size);
  } else if (smallBlock.clicked) {
    generateGrid(smallBlock.classType, smallBlock.size);
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function clearWindow() {
  frame.textContent = "";  
}

clearBtn.addEventListener('click', () => {
  clearWindow();
});

bigBtn.addEventListener('click', () => {
  bigBlock.clicked = true;
  mediumBlock.clicked = false;
  smallBlock.clicked = false;
  clickedErase = false;
  clearWindow();
  createGridSize(bigBlock.size);
});

mediumBtn.addEventListener('click', () => {
  mediumBlock.clicked = true;
  smallBlock.clicked = false;
  bigBlock.clicked = false;
  clickedErase = false;
  clearWindow();
  createGridSize(mediumBlock.size);
});

smallBtn.addEventListener('click', () => {
  smallBlock.clicked = true;
  mediumBlock.clicked = false;
  bigBlock.clicked = false;
  clickedErase = false;
  clearWindow();
  createGridSize(smallBlock.size);
});

let clickedRainbow = false;
let clickedErase = false;

colorBtn.addEventListener('click', () => {
  clickedErase = false;
  if (clickedRainbow) {
    clickedRainbow = false;
  } else {
    clickedRainbow = true;
  }
});

eraseBtn.addEventListener('click', () => {
  clickedRainbow = false;
  if (clickedErase) {
    clickedErase= false;
  } else {
    clickedErase = true;
  }
});