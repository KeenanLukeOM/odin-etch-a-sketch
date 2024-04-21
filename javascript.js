"use strict";

const squaresContainer = document.querySelector("#squaresContainer");

// Initially declares squares and rows
let allSquares
let allRows


let mode = "black"

// Executes gridPopup function when create grid button clicked
document.querySelector("#createGridButton").onclick = gridPopup

// Executes clearCanvas function when wipe the canvas button clicked
document.querySelector("#wipeCanvasButton").onclick = clearCanvas

// Changes  function when wipe the canvas button clicked
document.querySelector("#colorModeButton").onclick = setMode


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

        // Checks for mode, and sets associated opacity
        if (box.target.className = "boxOn" && mode === "black") {
            box.target.style.opacity = opacityAddition(box.target.style.opacity)
            console.log(box.target.style.opacity)} 
        else if (box.target.className = "boxOn" && mode === "rainbow") {
            box.target.style.opacity = opacityAddition(box.target.style.opacity)
            box.target.style.backgroundColor = `${randomColor()}`
            console.log(box.target.style.backgroundColor)
        }
        box.target.className = "boxOn"
}
)})
}

function setMode() {
    {
        if (mode === "black"){
            mode = "rainbow"
            document.querySelector("#colorModeButton").textContent = "Color mode: Rainbow"
            console.log(mode)
        } else if (mode === "rainbow") {
            mode = "black"
            document.querySelector("#colorModeButton").textContent = "Color mode: Black"
            console.log(mode)
        }  
    }
}

// Adds 10% to opacity and returns new value
function opacityAddition(currentOpacity) {
    if (currentOpacity <= 1 && currentOpacity >= 0) {
        let newOpacity = Number(currentOpacity) + 0.1
        return newOpacity
    }
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
        box.style.backgroundColor = ""
})};

// Generates a random color, between 1-255
function randomColor() {
    let ans = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`
    return ans
}