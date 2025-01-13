const gridContainer = document.getElementById("grid-container")
const gridSize = document.getElementById("grid-size")
const gridLabel = document.getElementById("grid-label")
const resetButton = document.getElementById("reset")


 function getRandomColor (){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
 }
function createGrid (size){
    gridContainer.innerHTML = '' //clear any existing grid
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr})` //create equal sized column and rows and each take 1 fraction of the space
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr})`
    

    //Create Grid Items
 for ( let i = 0; i < size * size ; i++) {
    
    //create a single grid square
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item")

    //style the gridItem // Add hover effect  for random color
    gridItem.addEventListener ("mouseover", () =>{
        gridItem.style.backgroundColor = getRandomColor();
    });






    gridContainer.appendChild(gridItem)
 }
}





createGrid(16)