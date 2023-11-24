const frame = document.querySelector('.window');
const clearBtn = document.querySelector('.btn-container')
const bigBtn = document.querySelector('.big');
const mediumBtn = document.querySelector('.medium');
const smallBtn = document.querySelector('.small');
const colorBtn = document.querySelector('.color');
const eraseBtn = document.querySelector('.erase');
const fillColor = document.querySelector('.fill');

const bigBlock = {
  name: 'bigBlock',
  classType: 'big-block',
  size: 256,
  clicked: false
}

const mediumBlock = {
  name: 'mediumBlock',
  classType: 'medium-block',
  size: 1024,
  clicked: false
}

const smallBlock = {
  name: 'smallBlock',
  classType: 'small-block',
  size: 4096,
  clicked: false,
}

function fillGrid(block) {
  if (clickedRainbow) {
    block.style.backgroundColor = randomColor();
    block.classList.remove('fill-black');
    block.classList.add('fill-rainbow');
  } else if (!clickedRainbow) {
    block.style.backgroundColor = 'black';
    block.classList.remove('fill-rainbow');
    block.classList.add('fill-black');
  }
}

function generateGrid(classType, size) {
  for (let i = 1; i <= size; i += 1) {
    const block = document.createElement('div');
    block.classList.add(classType)
    frame.appendChild(block);

    block.addEventListener('mouseenter', () => {
      fillGrid(block);
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
  clearWindow();
  createGridSize(bigBlock.size);
});

mediumBtn.addEventListener('click', () => {
  mediumBlock.clicked = true;
  smallBlock.clicked = false;
  bigBlock.clicked = false;
  clearWindow();
  createGridSize(mediumBlock.size);
});

smallBtn.addEventListener('click', () => {
  smallBlock.clicked = true;
  mediumBlock.clicked = false;
  bigBlock.clicked = false;
  clearWindow();
  createGridSize(smallBlock.size);
});

let clickedRainbow = false;

colorBtn.addEventListener('click', () => {
  if (clickedRainbow) {
    clickedRainbow = false;
  } else {
    clickedRainbow = true;
  }
});
