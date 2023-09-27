// JavaScript
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameOver = false;

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            gameOver = true;
            cells[a].style.backgroundColor = "#2ecc71";
            cells[b].style.backgroundColor = "#2ecc71";
            cells[c].style.backgroundColor = "#2ecc71";
            message.innerHTML = `${currentPlayer} wins!`;
        }
    }
}

function checkDraw() {
    const isDraw = [...cells].every((cell) => cell.innerHTML !== "");
    if (isDraw && !gameOver) {
        gameOver = true;
        message.innerHTML = "It's a draw!";
    }
}

function makeMove(index) {
    if (!cells[index].innerHTML && !gameOver) {
        cells[index].innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWin();
        checkDraw();
    }
}

function resetBoard() {
    cells.forEach((cell) => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "#fff";
    });
    message.innerHTML = "";
    currentPlayer = "X";
    gameOver = false;
}

resetButton.addEventListener("click", resetBoard);
