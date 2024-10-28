function createStyle(n) {
    return `background-color: black;
        width: ${n}px;
        height: ${n}px;
        opacity: 1;`;
}


function drawSquares(where, howMany = 16) {
    const squareSize = where.offsetWidth/howMany;
    const style = createStyle(squareSize);
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    for (let i = 0; i < howMany**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", style);
        newGrid.appendChild(square);
    }
    where.replaceWith(newGrid);
}

function getUserInput() {
    let input = prompt("Enter a number between 1 and 100 (inclusive)", "16")
    while (isNaN(input) || !(Number.isInteger(+input)) || +input < 1 || 100 < +input) {
        alert("Please enter an integer in range 1-100 inclusive.");
        input = prompt("Enter a number between 1 and 100 (inclusive)", "16");
    }
    return +input;
}

function drawNewBoard() {
    const squareNumber = getUserInput();
    grid = document.querySelector(".grid");
    drawSquares(grid, squareNumber);
    updateSpans(squareNumber);
}

function updateSpans(n = 16) {
    const spans = document.querySelectorAll("span");
    spans.forEach((x) => x.textContent = n);
}

function main() {
    updateSpans();

    const grid = document.querySelector(".grid");
    drawSquares(grid);

    const btn = document.querySelector("button");
    btn.addEventListener("click", drawNewBoard);
}

main();