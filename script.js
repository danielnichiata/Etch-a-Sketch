const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
document.body.appendChild(gridContainer);

for(let i = 0; i < 256; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.innerText = 'item'
    gridContainer.appendChild(gridItem);
}
