const frame = document.querySelector('.window');
const clearBtn = document.querySelector('.btn-container')


function createGrid(size) {
  for (let i = 1; i <= size; i += 1) {
    const block = document.createElement('div');
    block.classList.add('block')
    frame.appendChild(block);
  
    block.addEventListener('mousemove', () => {
      block.classList.add('fill');
    });
  }
}

createGrid(256);

function clearWindow() {
  frame.textContent = "";  
}

clearBtn.addEventListener('click', () => {
  clearWindow();
  createGrid(256);
});
