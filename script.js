const frame = document.querySelector('.window');
const clearBtn = document.querySelector('.btn-container')
const bigBtn = document.querySelector('.big');
const smallBtn = document.querySelector('.small');
const colorBtn = document.querySelector('.color');
const eraseBtn = document.querySelector('.erase');

const bigBlock = 256;
const smallBlock = 1024;

bigBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(bigBlock);
});

smallBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(smallBlock);
})

function createGrid(size) {
  if (size === bigBlock) {
    for (let i = 1; i <= bigBlock; i += 1) {
      const block = document.createElement('div');
      block.classList.add('big-block')
      frame.appendChild(block);

      block.addEventListener('mousemove', () => {
        block.classList.add('fill');
      });
    }
  } else if (size === smallBlock) {
    for (let i = 1; i <= smallBlock; i += 1) {
      const block = document.createElement('div');
      block.classList.add('small-block')
      frame.appendChild(block);

      block.addEventListener('mousemove', () => {
        block.classList.add('fill');
      });
    }
  }
}


function clearWindow() {
  frame.textContent = "";  
}

clearBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(256);
});
