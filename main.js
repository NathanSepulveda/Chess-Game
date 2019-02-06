//create squares
let gameBoard = document.querySelector("#chessBoard")
let oddColumns = document.querySelectorAll(".column--odd")
let evenColumns = document.querySelectorAll(".column--even")
let pawnBlack = "♟"
let pawnWhite = "♙"
let rookBlack = "♜"
let rookWhite = "♖"
let createSquares = () => {
    oddColumns.forEach(column => {
        let counter = 
        console.log("Hi")
        column.innerHTML += `
        <div class="squareBlack " id="1"></div>
        <div class="squareWhite " id="2">${pawnBlack}</div>
        <div class="squareBlack " id="3"></div>
        <div class="squareWhite " id="4"></div>
        <div class="squareBlack " id="5"></div>
        <div class="squareWhite " id="6"></div>
        <div class="squareBlack " id="7">${pawnWhite}</div>
        <div class="squareWhite " id="8"></div>
        `
        
    })
    evenColumns.forEach(column => {
        column.innerHTML += `
        <div class="squareWhite" id="1"></div>
        <div class="squareBlack" id="2">${pawnBlack}</div>
        <div class="squareWhite" id="3"></div>
        <div class="squareBlack" id="4"></div>
        <div class="squareWhite" id="5"></div>
        <div class="squareBlack" id="6"></div>
        <div class="squareWhite" id="7">${pawnWhite}</div>
        <div class="squareBlack" id="8"></div>
        `
    })
}
createSquares()

let addPieces = () => {
    let column1 = document.querySelector(".a")
    

    console.log(column1)
    // if (column1.id === 1) {
        
    // }

}

addPieces()