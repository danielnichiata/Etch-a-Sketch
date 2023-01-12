function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  document.body.appendChild(gridContainer);
  return gridContainer;
}

gridContainer = createGridContainer();

function createGridItems() {
  for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener("mouseover", changeItemsColor);
  }
}
gridItem = createGridItems();

function changeItemsColor() {
  this.style.backgroundColor = "black";
}
