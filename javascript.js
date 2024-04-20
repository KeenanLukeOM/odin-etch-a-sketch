"use strict";

const squaresContainer = document.querySelector("#squaresContainer");

function generateSquares(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        const row = document.createElement("div");
        row.className = "row"
        for (let j = 0; j < gridNumber; j++) {
            const box = document.createElement("div");
            box.className = "box"
            row.appendChild(box)
        }
        squaresContainer.appendChild(row)
    }
}

generateSquares(16)

let allSquares = document.querySelectorAll(".box")
allSquares.forEach((box) => {box.addEventListener("mouseenter", (box) => {
    box.target.className = "boxOn"
    console.log(box)
}
)})


