// Create 16x16 grid 
const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid");
    container.appendChild(cell);
  };
  container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
};

makeGrid(16);

// Event listeners on hover

document.querySelectorAll('.grid').forEach(item => {
  item.addEventListener('mouseover', event => {
    item.style.backgroundColor = "black";
  } )
})