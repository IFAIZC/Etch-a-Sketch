//to display the grid by using document.getElementById.
const container = document.getElementById('grid-container');

// total cells for a 16x16 grid.
const totalCells = 60*60;

//creating the cells
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
}

// Add hover effect to cells
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-cell')) {
      e.target.style.backgroundColor = 'lightgreen';
    }
  });
  