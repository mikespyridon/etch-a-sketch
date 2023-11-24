const frame = document.querySelector('.window');
const clearBtn = document.querySelector('.btn-container')
const bigBtn = document.querySelector('.big');
const mediumBtn = document.querySelector('.medium');
const smallBtn = document.querySelector('.small');
const colorBtn = document.querySelector('.color');
const eraseBtn = document.querySelector('.erase');
const fillColor = document.querySelector('.fill');

const bigBlock = {
  size: 256,
  clicked: false
}

const mediumBlock = {
  size: 1024,
  clicked: false
}

const smallBlock = {
  size: 4096,
  clicked: false,
}

let clickedRainbow = false;

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

function createGrid(size) {
  if (size === bigBlock.size) {
    for (let i = 1; i <= bigBlock.size; i += 1) {
      const block = document.createElement('div');
      block.classList.add('big-block')
      frame.appendChild(block);

      block.addEventListener('mouseenter', () => {
        fillGrid(block);
      }, true);
    }
  } else if (size === mediumBlock.size) {
    for (let i = 1; i <= mediumBlock.size; i += 1) {
      const block = document.createElement('div');
      block.classList.add('medium-block')
      frame.appendChild(block);

      block.addEventListener('mouseenter', () => {
        fillGrid(block);
      }, true);
    }
  } else if (size === smallBlock.size) {
    for (let i = 1; i <= smallBlock.size; i += 1) {
      const block = document.createElement('div');
      block.classList.add('small-block')
      frame.appendChild(block);

      block.addEventListener('mouseenter', () => {
        fillGrid(block);
      }, true);
    }
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
  clearWindow();
  createGrid(bigBlock.size);
});

mediumBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(mediumBlock.size);
});

smallBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(smallBlock.size);
});

colorBtn.addEventListener('click', () => {
  if (clickedRainbow) {
    clickedRainbow = false;
  } else {
    clickedRainbow = true;
  }
});
