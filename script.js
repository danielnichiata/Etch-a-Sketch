function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  document.body.appendChild(gridContainer);
  return gridContainer;
}

gridContainer = createGridContainer();

function createGridItems(gridSize) {
  let gridItems = gridContainer.getElementsByClassName("grid-item");
  while (gridItems.length > 0) {
    gridContainer.removeChild(gridItems[0]);
  }

  for (let i = 0; i < gridSize*gridSize; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener("mouseover", changeItemsColor);
  }
}

createGridItems(16);

function changeItemsColor() {
  this.style.backgroundColor = "black";
}

const bttnChangeSize = document.querySelector("button");
bttnChangeSize.onclick = windowsAlert;

function windowsAlert() {
  const newGridSize = Number(prompt("Insira um tamanho para o grid?"));
  createGridItems(newGridSize);
  gridContainer.style.gridTemplateColumns = `repeat(${newGridSize}, 2fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${newGridSize}, 2fr)`;
}
