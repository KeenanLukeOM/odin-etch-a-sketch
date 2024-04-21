"use strict";

const squaresContainer = document.querySelector("#squaresContainer");

// Initially declares squares and rows
let allSquares
let allRows

// Executes gridPopup function when create grid button clicked
document.querySelector("#createGridButton").onclick = gridPopup

// Executes clearCanvas function when wipe the canvas button clicked
document.querySelector("#wipeCanvasButton").onclick = clearCanvas

function generateSquares(gridNumber) {
    // Create number of rows equal to user provided grid number
    for (let i = 0; i < gridNumber; i++) {

        // Create the divs and assign a row class
        const row = document.createElement("div");
        row.className = "row"

        // Create number of boxes equal to user provided grid number
        for (let j = 0; j < gridNumber; j++) {

            // Create and assign the box class, append to the row
            const box = document.createElement("div");
            box.className = "box"
            row.appendChild(box)
        }

        // Append the rows to the squaresContainer
        squaresContainer.appendChild(row)
    }
    // Selects all squares, executes code when mouse enters div
    allSquares = document.querySelectorAll(".box")
    allSquares.forEach((box) => {box.addEventListener("mouseenter", (box) => {
        box.target.className = "boxOn"
        console.log(box)
}
)})
}

function gridPopup() {
    // Asks user for a grid number
    let response = prompt("How big would you like your grid? Enter a value between 1 - 100!", 64)

    // Checks for valid number, deletes previous canvas and rerun generateSquares with user supplied value
    if (response <= 100 && response > 0){
        console.log(response)
        allRows = document.querySelectorAll(".row")
        allRows.forEach((row) => {row.remove()})
        generateSquares(response)
    } else {

        // Indicates that value provided was incorrect
        return alert("Please enter a valid value. Between 1 - 100!")
    }
    
}

function clearCanvas() {
    // Selects all .boxOn classes back to default
    allSquares = document.querySelectorAll(".boxOn")
    allSquares.forEach((box) => {
        box.className = "box"
})};

