function drawSquares(howMany, where) {
    const squareSize = where.offsetWidth/howMany;
    for (let i = 0; i < howMany**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; background-color: red;`);
        where.appendChild(square);
    }
}

function main() {
    const grid = document.querySelector(".grid");
    drawSquares(15, grid);
}

main();