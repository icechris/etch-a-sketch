# etch-a-sketch
Interactive Grid Drawing App

An interactive grid-based drawing application where users can adjust the grid size, draw using random colors, and toggle between random color shading and black opacity. Built using HTML, CSS, and JavaScript.
Features

    Adjustable Grid Size: Users can resize the grid dynamically using a slider.
    Hover Effects: Color grid items on hover with either random colors or black, increasing opacity gradually.
    Reset Functionality: Clears the grid and regenerates it to its initial state.
    Color Toggle: Switch between drawing in random colors or black.

Demo

    Adjust the grid size using the slider.
    Hover over grid squares to draw.
    Use the reset button to clear the grid.
    Toggle between random colors and black shading with the "Change Color" button.

Technologies Used

    HTML: Structure of the grid and controls.
    CSS: Styling for the grid and layout.
    JavaScript: Dynamic grid creation and interactivity.

How to Use

    Clone or download this repository to your local machine.
    Open index.html in any modern web browser.
    Use the slider to select the grid size.
    Hover over the grid to start drawing.
    Use the buttons to reset or toggle color modes.

Code Overview
Core Functions

    createGrid(size):
        Dynamically generates a grid with the given size.
        Adds event listeners for hover effects and shading.

    getRandomColor():
        Generates a random RGB color for grid item shading.

    Event Listeners:
        Slider (gridSize): Adjusts grid size and updates the display label.
        Reset Button (resetButton): Clears and regenerates the grid.
        Change Color Button (changeColorButton): Toggles color mode between random colors and black.

Example Code Snippet

gridSize.addEventListener("input", (e) => {
  const newSize = e.target.value;
  gridLabel.textContent = `Grid Size: ${newSize} x ${newSize}`;
  createGrid(newSize);
});

changeColorButton.addEventListener("click", () => {
  colorMode = colorMode === "random" ? "black" : "random";
});
