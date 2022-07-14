// Create 16x16 grid 
const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid");
    container.appendChild(cell);
  };
  container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
  paint();
};

makeGrid(30);

// Event listeners on hover
function paint() {
  document.querySelectorAll(".grid").forEach(item => {
    item.addEventListener("mouseover", event => {
      item.style.backgroundColor = "black";
    })
  })}

// Prompt user for canvas size
document.getElementById("size").addEventListener("click", event => {
  let size = prompt("Canvas size (between 2 and 100)");
  if (size < 2 || size > 100 || isNaN(size)) {
    alert("Please select a size between 2 and 100");
    return;
  } else {
    clearBoard();
    makeGrid(size);
  }
})

const reset = document.getElementById("clear");

reset.addEventListener("click", event => {
  document.querySelectorAll(".grid").forEach(item => {
      item.style.backgroundColor = "white";
  })
})


function clearBoard() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

// TODO: separate clear board into removing divs and setting bgcolor white