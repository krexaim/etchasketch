// Create 16x16 grid 
// https://stackoverflow.com/a/57550587/17677037
const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    cell.innerText = i + 1;
    cell.classList.add("grid");
    container.appendChild(cell);
  };
  container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
};

makeGrid(16);
